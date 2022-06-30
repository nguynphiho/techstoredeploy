import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import ShopIcon from '@material-ui/icons/Shop';

const useStyles = makeStyles(() => ({
  container: {
    padding: '0px 10px',
    background: 'white',
    borderRadius: 4,
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },
  icon: {
    fontSize: 40,
    color: '#f4a51c',
  },
  widget: {
    padding: '15px 10px',
    '&:not(:last-child)': {
      borderBottom: 'solid 0.5px #c5c2c2'
    },
  },
  primaryText: {
    fontSize: 14,
    fontFamily: 'Lato',
    fontWeight: 650,
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
          <Grid item xs={4}>
            <StarBorderIcon className={classes.icon}/>
          </Grid>
          <Grid item xs={8}>
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
          <Grid item xs={4}>
            <VerifiedUserIcon className={classes.icon}/>
          </Grid>
          <Grid item xs={8}>
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
          <Grid item xs={4}>
            <LocalCafeIcon className={classes.icon}/>
          </Grid>
          <Grid item xs={8}>
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
          <Grid item xs={4}>
            <ShopIcon className={classes.icon}/>
          </Grid>
          <Grid item xs={8}>
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
          <Grid item xs={4}>
            <AirplanemodeActiveIcon className={classes.icon}/>
          </Grid>
          <Grid item xs={8}>
            <Typography className={classes.primaryText}>Free Shipping</Typography>
            <Typography className={classes.secondaryText}>On all order over</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default StoreWidget;