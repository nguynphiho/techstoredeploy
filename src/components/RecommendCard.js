import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import ItemProductRecommend from './ItemProductRecommend';

const useStyles = makeStyles(() => ({
  recommendContainer: {
    marginTop: 20,
    padding: 10,
    background: 'white',
    borderRadius: 4,
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
  },
  title: {
    padding: 5,
    fontWeight: 600,
    fontFamily: 'Lato',
    letterSpacing: 2,
  },
}));

function RecommendCard({ name, data }) {
  const classes = useStyles();
  return (
    <div className={classes.recommendContainer}>
      <Typography className={classes.title}> {name } </Typography>
      <Grid container>
        {data.map(item => (
          <ItemProductRecommend item={item} myClass={name} key={item.id}/>
        ))}
      </Grid>
    </div>
  )
}

export default RecommendCard;