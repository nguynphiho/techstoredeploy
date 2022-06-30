import React from 'react';
import { Button, makeStyles, Typography, IconButton, Snackbar } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from 'clsx';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CompareIcon from '@material-ui/icons/Compare';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux';
import { addProductCart } from 'redux/cart/actions';

const useStyles = makeStyles((theme) => ({
  contianer: {
    margin: 10,
    position: 'relative',
    display: 'flex',
    background: 'white',
    flexDirection: (props) => ((props.horizontal) ? 'row' : 'column'),
    justifyContent: (props) => ((props.horizontal) ? 'flex-start' : 'center'),

    width: (props) => ((props.horizontal) ? '100%' : '95%'),
    height: (props) => ((props.horizontal) ? '300px' : 'auto'),
    borderRadius: '4px 4px 0px 0px',

    transition: 'all ease-in-out .3s',
    '&:hover': {
      cursor: 'pointer',
      transition: 'all ease-in-out .3s',
      boxShadow: '0px 0px 15px -3px rgba(15, 23, 42, 0.2)',
    },
    '&:hover img': {
      transition: 'all ease-in-out .3s',
      transform: 'scale(1.1)'
    }
  },

  status: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: 50,
    padding: 2,
    borderRadius: '0px 0px 5px 5px',
    background: '#f4a51c',
    textAlign: 'center',
    '& span': {
      color: 'white',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'Lato',
    },
  },

  rating: {
    position: 'absolute',
    top: 5,
    right: 5,
    opacity: 0,
    transition: 'all ease-in-out .3s',
    '& .MuiRating-root': {
      fontSize: 16,
    },
  },

  imageContainer: {
    overflow: 'hidden',
    position: 'relative',
    width: (props) => ((props.horizontal) ? '300px' : '100%'),
  },

  img: {
    transition: 'all ease-in-out .3s',
    width: (props) => ((props.horizontal) ? '300px' : '100%'),
    objectFit: 'contain',
  },

  navButton: {
    display: "flex",
    position: 'absolute',
    bottom: '5%',
    left: 0,
    right: 0,
    justifyContent: 'center',
    opacity: 0,
    transition: 'all ease-in-out .3s',
    '& button': {
      width: 40,
      height: 40,
      margin: 5,
      background: '#f3f3f3f3',
      '&:hover': {
        background: '#dddddd'
      }
    },
  },



  iconButton: {
    '&:hover': {
      color: '#f4a51c',
    }
  },

  buttonIcon: {
    color: 'red',
  },

  productName: {
    display: (props) => ((props.horizontal) ? 'none' : 'block'),
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Lato',
    fontWeight: 600,
    marginBottom: 10,
  },

  priceContainer: {
    display: (props) => ((props.horizontal) ? 'none' : 'flex'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  oldPrice: {
    fontSize: (props) => ((props.horizontal) ? '18px' : '16px'),
    fontFamily: 'Lato',
    fontWeight: 400,
    color: '#686868',
    textDecoration: 'line-through',
  },

  newPrice: {
    fontSize: (props) => ((props.horizontal) ? '18px' : '16px'),
    fontFamily: 'Lato',
    fontWeight: 400,
    color: '#df971a',
  },
  addToCart: {
    display: (props) => ((props.horizontal) ? 'none' : 'block'),
    borderRadius: '0px 0px 4px 4px',
    background: 'white',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.2)',
    position: 'absolute',
    bottom: -36,
    left: 0,
    right: 0,
    opacity: 0,
    zIndex: 999,
  },

  addCartButton: {
    borderRadius: 0,
    width: (props) => ((props.horizontal) ? '200px' : '100%'),
    background: (props) => ((props.horizontal) ? '#e9e9e9' : 'none'),
    color: '#686868',
    textTransform: 'none',
    '&:hover': {
      color: '#df971a',
    },
    zIndex: 999,
  },

  cartIn: {
    opacity: 1,
    animation: `$effectIn 500ms ${theme.transitions.easing.easeInOut}`
  },

  cartOut: {
    animation: `$effectOut 500ms ${theme.transitions.easing.easeInOut}`,
  },

  // Horizontall;
  horizontalContentCard: {
    display: (props) => ((props.horizontal) ? 'block' : 'none'),
    width: '60%',
    padding: '20px',
  },

  horizontalTitle: {
    display: (props) => ((props.horizontal) ? 'block' : 'none'),
    fontSize: 22,
    fontWeight: 600,
    fontFamily: 'Lato',

  },

  horizontalPriceContainer: {
    display: (props) => ((props.horizontal) ? 'flex' : 'none'),
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },

  description: {
    display: (props) => ((props.horizontal) ? 'block' : 'none'),
    fontSize: 14,
    fontFamily: 'Lato',
    color: '#686868',
    margin: '20px 0px',
  },

  // animation

  fadeIn: {
    opacity: '1 !important',
  },

  '@keyframes effectIn': {
    '0%': {
      transform: 'translateY(10px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(0px)',
      opacity: 1,
    }
  },

  '@keyframes effectOut': {
    '0%': {
      transform: 'translateY(0px)',
      opacity: 1,
    },
    '100%': {
      transform: 'translateY(10px)',
      opacity: 0,
    }
  },
}));

function ProductCard({ data, horizontal }) {
  const classes = useStyles({ horizontal });

  const [isHover, setHover] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false)
  const [added, setAdded] = React.useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    event.stopPropagation();
    const cartItem = {
      ...data,
      quantity: 1,
      totalPrice: data.newPrice,
    };
    dispatch(addProductCart(cartItem))
    setOpenSnackbar(true)
    setAdded(true)
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      <div
        className={classes.contianer}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => history.push(
          {
            pathname: `/shop-page/products/${data.id}`,
            state: {
              data,
            },
          }
        )}
      >
        {
          data.status.length > 0 && (
            <div className={classes.status}>
              <span>{data.status}</span>
            </div>
          )
        }
        <div className={classes.imageContainer}>
          <img src={data.mainImage} alt="" className={classes.img} />
          <div className={clsx(classes.rating, {
            [classes.fadeIn]: isHover,
          })}>
            <Rating name="read-only" value={data.rating} readOnly />
          </div>
          <div className={clsx(classes.navButton, {
            [classes.fadeIn]: isHover,
          })}
          >
            <Tooltip title="QuickView" placement="top">
              <IconButton>
                <SearchIcon className={classes.iconButton} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Wishlist" placement="top">
              <IconButton>
                <FavoriteBorderIcon className={classes.iconButton} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Compare" placement="top">
              <IconButton>
                <CompareIcon className={classes.iconButton} />
              </IconButton>
            </Tooltip>
          </div>
        </div>

        <div className={classes.horizontalContentCard}>
          <Typography className={classes.horizontalTitle}>{data.name}</Typography>
          <div className={classes.horizontalPriceContainer}>
            <Typography className={classes.oldPrice}>{`$ ${data.oldPrice}`}</Typography>
            <Typography>  &nbsp; -   &nbsp; </Typography>
            <Typography className={classes.newPrice}>{`$ ${data.newPrice}`}</Typography>
          </div>
          <div>
            <Typography className={classes.description}>
              {data.description}
            </Typography>
          </div>
          {
            !added ? (
              <div>
                <Button className={classes.addCartButton} onClick={handleAddToCart}>
                  <ShoppingCartIcon />
                  Add to cart
                </Button>
              </div>
            ) : (
              <div>
                <Button className={classes.addCartButton}>
                  <ShoppingCartIcon />
                  View Cart
                </Button>
              </div>
            )
          }

        </div>

        <div>
          <Typography className={classes.productName}>
            {(data.name.length > 25) ? data.name.slice(0, 20) + "..." : data.name}
          </Typography>
        </div>
        <div className={classes.priceContainer}>
          <Typography className={classes.oldPrice}>{`$ ${data.oldPrice}`}</Typography>
          <Typography>  &nbsp; -   &nbsp; </Typography>
          <Typography className={classes.newPrice}>{`$ ${data.newPrice}`}</Typography>
        </div>
        <div className={clsx(classes.addToCart, {
          [classes.cartIn]: isHover,
          [classes.cartOut]: !isHover,
        })}>
          {
            !added ? (
              <Button className={classes.addCartButton} onClick={handleAddToCart}>
                <ShoppingCartIcon />
                Add to cart
              </Button>
            ) : (
              <Button className={classes.addCartButton}>
                <ShoppingCartIcon />
                ViewCart
              </Button>
            )
          }
        </div>
      </div>

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="success">Added product to cart successfully!</Alert>
      </Snackbar>
    </>
  )
}

export default ProductCard;