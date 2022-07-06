import { Grid, makeStyles } from '@material-ui/core';
import AboutCard from 'components/AboutCard';
import Banner from 'components/Banner';
import PopularCard from 'components/RecommendCard';
import ShowCase from 'components/ShowCase';
import StoreUpdate from 'components/StoreUpdate';
import StoreWidget from 'components/StoreWidget';
import TagCloud from 'components/TagCloud';
import React from 'react';

import ListComponent from '../../../components/ListComponent';


const useStyles = makeStyles((theme) => ({
  container: {
    margin: 10,
  },

  leftSideBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },

  rightSideBar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },

  bodyContent: {

  },

  options: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    }
  },

}))


function Body({ children, location, ...props }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={1}>
        <Grid item md={2} lg={2} className={classes.leftSideBar}>
          <ListComponent name="Category" data={props.categoryData} location={location} />
          <PopularCard data={props.popularData} name={"Popular"} />
          <TagCloud data={props.tagCloudData} />
          <Banner />
        </Grid>
        <Grid item sm={12} md={8} lg={8} className={classes.bodyContent}>
          {children}
        </Grid>
        <Grid item md={2} lg={2} className={classes.rightSideBar}>
          <StoreWidget />
          <AboutCard />
          <StoreUpdate />
          <ShowCase />
        </Grid>
      </Grid>
    </div>
  )
}

export default React.memo(Body);