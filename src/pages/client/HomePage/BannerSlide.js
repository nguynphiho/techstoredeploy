import 'swiper/css';
import 'swiper/css/pagination';

import { Avatar, makeStyles } from '@material-ui/core';
import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import slideImage1 from 'assets/images/camera-circle-new.png';
import slideImage2 from 'assets/images/slider-watches-1-1.png';

const useStyles = makeStyles(() => ({
  slide: {
    height: '100%',
    width: '100%',
  },
  swiper: {
    '& .swiper-pagination-bullet': {
      height: 12,
      width: 12,
    },
    '& .swiper-pagination-bullet-active': {
      background: 'black'
    },
  }
}))

function BannerSlide() {
  const classes = useStyles();
  return (
    <>
      <Swiper
        className={classes.swiper}
        // onSwiper={setSwiper}
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <Avatar variant="square" src={slideImage1} className={classes.slide} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar variant="square" src={slideImage2} className={classes.slide} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default BannerSlide;