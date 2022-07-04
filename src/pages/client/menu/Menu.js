import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from 'redux/sidebarMenu/action';

import MenuComponent from 'components/MenuComponent';

const useStyles = makeStyles((theme) => ({
  contianer: {
    background: 'white',
  },

  callButton: {
    marginRight: 20,
    background: '#f4a51c',
    '&:hover': {
      background: '#df971a',
    },
    '&.MuiIconButton-root': {
      padding: 7,
    }
  },

  contact: {
    display: 'flex',
    alignItems: 'center',
  },

  phoneNumber: {
    [theme.breakpoints.down("xs")]: {
      display: 'none',
    },
  },

  iconMenu: {
    [theme.breakpoints.up("md")]: {
      display: 'none',
    },
    borderRadius: 4,
    backgroundColor: '#f4a51c',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#ffb93f',
    },
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
]

function Menu({ location }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openSideBarMenu = (value) => {
    dispatch(toggleMenu(value));
  };

  return (
    <div className={classes.contianer}>
      <Grid container style={{ padding: 5 }}>
        <Grid
          item
          xs={10}
          sm={9}
          md={10}
          lg={10}
        >
          <MenuComponent data={menuData} location={location}/>
          <IconButton className={classes.iconMenu} onClick={() => openSideBarMenu(true)} >
            <MenuIcon />
            <Typography
              style={{
                fontSize: 16,
                fontFamily: 'Lato',
                fontWeight: 600,
              }}
            >
              Menu & Category
            </Typography>
          </IconButton>
        </Grid>
        <Grid
          item
          xs={2}
          sm={3}
          md={2}
          lg={2}
          className={classes.contact}
        >
          <IconButton className={classes.callButton}>
            <PhoneInTalkIcon style={{ color: 'white' }} />
          </IconButton>
          <Typography className={classes.phoneNumber}>+8435 2642 497</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Menu;