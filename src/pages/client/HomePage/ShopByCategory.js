import "swiper/css";

import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import CategoryCard from 'components/CategoryCard';

import { Swiper, SwiperSlide } from "swiper/react";


import category1 from 'assets/images/category-img-1-woo-slider.png';
import category2 from 'assets/images/category-img-2-woo-slider.png';
import category3 from 'assets/images/category-img-6-woo-slider.png';
import category4 from 'assets/images/category-image-3-wooo-slider.png';
import category5 from 'assets/images/category-image-5-woo-slider.png';

const useStyles = makeStyles(() => ({
  container: {

  },

  title: {
    fontSize: 15,
    fontFamily: 'Lato',
    fontWeight: 600,
    letterSpacing: 2,
  },

  categoryCardContainer: {
    marginTop: 10,
    background: 'white',
    padding: 10,
  },
}));

const categoryData = [
  {
    id: 1,
    name: "cameras",
    image: category1,
  },
  {
    id: 2,
    name: "Video Games",
    image: category2,
  },
  {
    id: 3,
    name: "HeadPhone",
    image: category3,
  },
  {
    id: 4,
    name: "Watches",
    image: category4,
  },
  {
    id: 5,
    name: "Computer & Laptop",
    image: category5,
  },
]

function ShopByCategory() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Typography className={classes.title}>
          Shop By Category
        </Typography>
      </Grid>
      <Grid container className={classes.categoryCardContainer}>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          className="mySwiper"
        >
        {
          categoryData.map(item => (
            <SwiperSlide key={item.id}>
              <CategoryCard data={item}/>
            </SwiperSlide>
          ))
        }
        </Swiper>
      </Grid>
    </div>
  )
}

export default ShopByCategory;