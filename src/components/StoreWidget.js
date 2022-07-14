import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import ShopIcon from '@material-ui/icons/Shop';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 5,
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
    background: 'white',
    borderRadius: 4,
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 50,
    [theme.breakpoints.down("md")]: {
      fontSize: 30,
    },
    color: '#f4a51c',
  },
  widget: {
    padding: '15px 5px',
    '&:not(:last-child)': {
      borderBottom: 'solid 0.1px #c5c2c2'
    },
  },
  primaryText: {
    fontSize: 13,
    fontFamily: 'Lato',
    fontWeight: 600,
  },
  secondaryText: {
    fontSize: 13,
    fontFamily: 'Lato',
    fontWeight: 400,
    color: '#686868'
  },
}));

function StoreWidget() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          className={classes.widget}
          alignItems="center"
        >
          <Grid item xs={3} sm={1} md={4} lg={4} className={classes.iconContainer}>
            <StarBorderIcon className={classes.icon} />
          </Grid>
          <Grid item xs={8} lg={8}>
            <Typography className={classes.primaryText}>Join risk free</Typography>
            <Typography className={classes.secondaryText}>30 days refunds</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          className={classes.widget}
          alignItems="center"
        >
          <Grid item xs={3} sm={1} md={4} lg={4} className={classes.iconContainer}>
            <VerifiedUserIcon className={classes.icon} />
          </Grid>
          <Grid item xs={8} lg={8}>
            <Typography className={classes.primaryText}>100% Safe</Typography>
            <Typography className={classes.secondaryText}>Secure Shopping</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          className={classes.widget}
          alignItems="center"
        >
          <Grid item xs={3} sm={1} md={4} lg={4} className={classes.iconContainer}>
            <LocalCafeIcon className={classes.icon} />
          </Grid>
          <Grid item xs={8} lg={8}>
            <Typography className={classes.primaryText}>24x7 Support</Typography>
            <Typography className={classes.secondaryText}>Online 24 hours</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          className={classes.widget}
          alignItems="center"
        >
          <Grid item xs={3} sm={1} md={4} lg={4} className={classes.iconContainer}>
            <ShopIcon className={classes.icon} />
          </Grid>
          <Grid item xs={8} lg={8}>
            <Typography className={classes.primaryText}>Best Offers</Typography>
            <Typography className={classes.secondaryText}>Grab now</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          className={classes.widget}
          alignItems="center"
        >
          <Grid item xs={3} sm={1} md={4} lg={4} className={classes.iconContainer}>
            <AirplanemodeActiveIcon className={classes.icon} />
          </Grid>
          <Grid item xs={8} lg={8}>
            <Typography className={classes.primaryText}>Free Shipping</Typography>
            <Typography className={classes.secondaryText}>On all order over</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default StoreWidget;