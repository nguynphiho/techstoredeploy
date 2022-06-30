import 'swiper/css';
import "swiper/css/navigation";

import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Grid, IconButton, makeStyles } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import clsx from 'clsx';

import brand1 from 'assets/images/amazon.png';
import brand4 from 'assets/images/apple.png';
import brand2 from 'assets/images/motorolar.png';
import brand5 from 'assets/images/sony.png';
import brand3 from 'assets/images/windows.png';


const useStyles = makeStyles(() => ({
  container: {

  },

  cardContainer: {
    marginTop: 10,
    '&:hover button': {
      opacity: 1
    },
  },

  imageBrand: {
    width: 150,
    height: 50,
    objectFit: 'contain',
  },

  iconButton: {
    fontSize: 12,
  },

  navButton: {
    opacity: 0,
    width: 20,
    height: 20,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 999,
    background: 'white',
    '&:hover': {
      background: '#f3f3f3',
      color: '#df971a'
    },
  },

  prev: {
    left: 0
  },

  next: {
    right: 0,
  },

  swiper: {
    position: 'relative',
    margin: '0px 10px',
  },
}));

const brandData = [
  {
    id: 1,
    name: "Amazon",
    image: brand1,
  },
  {
    id: 2,
    name: "Motorola",
    image: brand2,
  },
  {
    id: 3,
    name: "Windows",
    image: brand3,
  },
  {
    id: 4,
    name: "Apple",
    image: brand4,
  },
  {
    id: 5,
    name: "Sonny",
    image: brand5,
  },
  {
    id: 6,
    name: "Amazon",
    image: brand1,
  },
]

function Brand() {
  const classes = useStyles();
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  return (
    <div className={classes.container}>
      <Grid container>
      </Grid>
      <Grid container className={classes.cardContainer}>
        <Swiper
          navigation={{
            // Both prevEl & nextEl are null at render so this does not work
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              // Override prevEl & nextEl now that refs are defined
              swiper.params.navigation.prevEl = navigationPrevRef.current
              swiper.params.navigation.nextEl = navigationNextRef.current

              // Re-init navigation
              swiper.navigation.destroy()
              swiper.navigation.init()
              swiper.navigation.update()
            })
          }}
          slidesPerView={5}
          spaceBetween={30}
          modules={[Navigation]}
          className={classes.swiper}
        >
          {
            brandData.map(item => (
              <SwiperSlide key={item.id}>
                <img alt="" src={item.image} className={classes.imageBrand} />
              </SwiperSlide>
            ))

          }
          {/* custom Prev Button */}
          <IconButton ref={navigationPrevRef} className={clsx(classes.navButton, classes.prev)}>
            <ArrowBackIosIcon className={classes.iconButton} />
          </IconButton>

          {/* custom Next Button */}
          <IconButton ref={navigationNextRef} className={clsx(classes.navButton, classes.next)}>
            <ArrowForwardIosIcon className={classes.iconButton} />
          </IconButton>
        </Swiper>
      </Grid>
    </div>
  )
}

export default Brand;