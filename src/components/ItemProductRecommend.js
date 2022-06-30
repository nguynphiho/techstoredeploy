import React from 'react';
import { Avatar, makeStyles, Typography, Grid } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  itemRecommendcontainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    '&:hover': {
      color: '#f4a51c',
      cursor: 'pointer',
    }
  },

  contentContainer: {
    paddingLeft: 20,
    width: '100%',
  },

  productImage: {
    width: 60,
    height: 60,
    border: 'solid 0.5px #d9d5d5',
  },

  productName: {
    color: '#686868',
    fontWeight: 400,
    fontSize: 14,
    fontFamily: 'Lato',
    '&:hover': {
      color: '#f4a51c',
      cursor: 'pointer',
    }
  },

  oldPrice: {
    color: '#686868',
    textDecoration: 'line-through',
    fontSize: 14,
    fontFamily: 'Lato',
  },

  newPrice: {
    color: '#df971a',
    fontSize: 14,
    fontFamily: 'Lato',
  },
}));

function ItemProductRecommend({ item, myClass }) {
  const classes = useStyles();
  const [containerWidth, setContainerWidth] = React.useState(0);

  React.useEffect(() => {
    const container = document.querySelector(`.${myClass}`);
    setContainerWidth(container.offsetWidth);
  },[myClass])
  return (
    <div className={clsx(classes.itemRecommendcontainer, myClass)}>
      <div className={classes.imageContainer}>
        <Avatar variant='square' src={item.image} className={classes.productImage} />
      </div>
      <div className={classes.contentContainer}>
        <Typography className={classes.productName}>
          {(containerWidth < 200) ? `${item.name.slice(0, 11)}...` : item.name}
        </Typography>
        <Grid container alignItems="center" justifyContent="flex-start">
          {
            item.oldPrice && (
              <Grid item xs={item.oldPrice ? 6 : 1}>
                <Typography className={classes.oldPrice}>{`$ ${item.oldPrice}`}</Typography>
              </Grid>
            )
          }
          <Grid item xs={item.oldPrice ? 6 : 11}>
            <Typography className={classes.newPrice}>{`$ ${item.newPrice}`}</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ItemProductRecommend;