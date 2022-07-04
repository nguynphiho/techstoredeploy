import React from 'react';
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core';
import { useScrollWindow } from 'hooks/input.hooks';
import clsx from 'clsx';
import Badge from '@material-ui/core/Badge';
import MenuComponent from 'components/MenuComponent';
import storeIcon from 'assets/icons/storeIcon.png';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from 'redux/cart/actions';
import { toggleMenu } from 'redux/sidebarMenu/action';
import { isOpenSelector } from 'redux/cart/selector';


const useStyles = makeStyles((theme) => ({
  container: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 0,
    right: 0,
    left: 0,
    background: 'white',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.2)',
    zIndex: 9999,
    transform: 'translateY(-100px)',
    transition: 'all ease-in-out .5s',
  },

  active: {
    transform: 'translateY(0px)',
  },

  iconMenu: {
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center',
  },

  badge: {
    // color: 'white',
    // background: 'black',
  },

  iconButton: {
    padding: 8,
  },

  menuText: {
    paddingLeft: 10,
    fontFamily: 'Lato',
    fontSize: 18,
    fontWeight: 600,
    color: '#686868',
  },

}))

const menuData = [
  {
    id: 1,
    label: 'Home',
    link: '/home',
    subMenu: [],
  },
  {
    id: 2,
    label: 'Blog',
    link: '/blog',
    subMenu: [],
  },
  {
    id: 3,
    label: 'Shop page',
    link: '/shop-page',
    subMenu: [],
  },
  {
    id: 4,
    label: 'Accessories',
    link: '/accessories',
    subMenu: [
      {
        id: 1,
        label: 'Menu Item 1',
        link: '/accessories/item1'
      },
      {
        id: 2,
        label: 'Menu Item 2',
        link: '/accessories/item2'
      },
      {
        id: 3,
        label: 'Menu Item 3',
        link: '/accessories/item3'
      },
    ],
  },
  {
    id: 5,
    label: 'Watches',
    link: '/watches',
    subMenu: [],
  },
  {
    id: 6,
    label: 'Contact Us',
    link: '/contact-us',
    subMenu: [
      {
        id: 1,
        label: "Via Phone",
        link: "/contact-us/phone"
      },
      {
        id: 2,
        label: "Via Email",
        link: "/contact-us/email"
      },
      {
        id: 3,
        label: "Via Social Media",
        link: "/contact-us/social-medial"
      },
    ],
  },
  {
    id: 7,
    label: 'Upgrade To Pro',
    link: '/upgrage-to-pro',
    subMenu: [
      {
        id: 1,
        label: "Pay $199 for Month",
        link: "/upgrage-to-pro/moth"
      },
      {
        id: 2,
        label: "Pay $499 for 6 Month",
        link: "/upgrage-to-pro/halfYear"
      },
      {
        id: 3,
        label: "Pay $999 for 12 Month",
        link: "/upgrage-to-pro/year"
      },
    ],
  },
];

function FixedMenu({ location }) {
  const isMenuOpen = useSelector((state) => state.sideBarMenuReducer);
  const isCartOpen = useSelector(isOpenSelector);

  const combineValue = (!isMenuOpen && !isCartOpen);
  // const [isActive, setActive] = React.useState(false);

  console.log('menu open:' +isMenuOpen);
  console.log('cart open:' +isCartOpen);
  console.log('combine value:' + combineValue);

  console.log(isCartOpen)

  const dispatch = useDispatch();
  const screenHeight = useScrollWindow();
  const classes = useStyles({ screenHeight });

  const handleOpenCart = () => {
    dispatch(toggleCart(true));
  };

  const handleOpenMenu = () => {
    dispatch(toggleMenu(true));
  };
  return (
    <div className={clsx(classes.container, {
      [classes.active]: (screenHeight > 300 && combineValue),
    })}>
      <div className={classes.logoIcon}>
        <IconButton className={classes.iconMenu} onClick={handleOpenMenu}>
          <Avatar variant='square' src={storeIcon}></Avatar>
          <Typography className={classes.menuText}>Menu</Typography>
        </IconButton>
      </div>
      <MenuComponent data={menuData} location={location} />
      <div className={classes.groupButton}>
        <IconButton className={classes.iconButton}>
          <SearchIcon />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <AccountCircleIcon />
        </IconButton>
        <IconButton
          onClick={handleOpenCart}
          style={{ color: 'black', margin: '0px 10px 0px 20px' }}
          className={classes.iconButton}
        >
          <Badge badgeContent={6} color="primary" overlap="rectangular" >
            <LocalMallIcon style={{ color: 'black' }} />
          </Badge>
        </IconButton>
      </div>
    </div>
  )
}

export default FixedMenu;