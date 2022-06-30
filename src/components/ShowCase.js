import React from 'react';
import { makeStyles, Grid, Avatar, Typography } from '@material-ui/core';
import showcase1 from 'assets/images/product1.png';
import showcase2 from 'assets/images/product3.png';
import showcase3 from 'assets/images/product23.png';
import showcase4 from 'assets/images/product12.png';
import showcase5 from 'assets/images/product18.png';
import showcase6 from 'assets/images/product8.png';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 20,
    padding: 10,
    background: 'white',
    borderRadius: 4,
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },
  image: {
    margin: 10,
    width: 70,
    height: 70,
    border: 'solid 0.5px #d9d5d5',
    borderRadius: 4,
  },
  title: {
    padding: 5,
    fontWeight: 600,
    fontFamily: 'Lato',
    letterSpacing: 2,
  },
}))

function ShowCase() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.title}> Show Case </Typography>
      <Grid container>
        <Grid container item xs={6} justifyContent="center" >
          <Avatar className={classes.image} src={showcase1} />
          <Avatar className={classes.image} src={showcase2} />
          <Avatar className={classes.image} src={showcase3} />
          <Avatar className={classes.image} src={showcase3} />
          <Avatar className={classes.image} src={showcase3} />
        </Grid>
        <Grid container item xs={6} justifyContent="center">
          <Avatar className={classes.image} src={showcase4} />
          <Avatar className={classes.image} src={showcase5} />
          <Avatar className={classes.image} src={showcase6} />
          <Avatar className={classes.image} src={showcase6} />
          <Avatar className={classes.image} src={showcase6} />
        </Grid>
      </Grid>
    </div>
  )
}

export default ShowCase;