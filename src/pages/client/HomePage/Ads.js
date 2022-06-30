import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import ads1 from 'assets/images/ad-banner-464.png'
import ads2 from 'assets/images/ab-banner-right-464.png'

const useStyles = makeStyles(() => ({
  container: {
  },

}))
function Ads() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container justifyContent="space-between" spacing={2}>
        <Grid item sm={12} md={6} lg={6}>
          <img alt='' src={ads1} width="100%"/>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <img alt='' src={ads2} width="100%"/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Ads