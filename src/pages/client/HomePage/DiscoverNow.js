import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from 'react';
import { Grid as Grids, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import product5 from 'assets/images/product23.png';
import product4 from 'assets/images/product24.png';
import product3 from 'assets/images/product25.png';
import product2 from 'assets/images/product26.png';
import product1 from 'assets/images/product27.png';
import ItemProductRecommend from 'components/ItemProductRecommend';

const useStyles = makeStyles((theme) => ({
  container: {
  },

  title: {
    fontSize: 15,
    fontFamily: 'Lato',
    fontWeight: 600,
    letterSpacing: 2,
  },

  iconButton: {
    fontSize: 12,
  },

  navButton: {
    marginLeft: 5,
    background: 'white',
    '&:hover': {
      background: '#f3f3f3',
      color: '#df971a'
    },
  },

  cardContainer: {
    marginTop: 10,
    width: '100%',
    background: 'white',
    '& .MuiAvatar-img': {
      border: 'none',
    }
  },

  itemProducts: {
    width: '100%',
    padding: 5,
    margin: 10,
  },

  swiper: {

  },

}));

const popularData = [
  {
    id: 1,
    name: 'Suspendisse gravida lacus varius',
    link: '/',
    image: product1,
    oldPrice: 12.01,
    newPrice: 9.99,
  },
  {
    id: 2,
    name: 'Aliquam erat volutpat',
    link: '/',
    image: product2,
    oldPrice: null,
    newPrice: 200.99,
  },
  {
    id: 3,
    name: 'In fringilla felis non nulla porta rutrum',
    link: '/',
    image: product3,
    oldPrice: 12.01,
    newPrice: 9.99,
  },
  {
    id: 4,
    name: 'Suspendisse volutpat massa',
    link: '/',
    image: product4,
    oldPrice: 12.01,
    newPrice: 9.99,
  },
  {
    id: 5,
    name: 'Microsoft Surface Laptop 3',
    link: '/',
    image: product5,
    oldPrice: null,
    newPrice: 500.99,
  },
  {
    id: 6,
    name: 'Suspendisse gravida lacus varius',
    link: '/',
    image: product1,
    oldPrice: 12.01,
    newPrice: 9.99,
  },
  {
    id: 7,
    name: 'Aliquam erat volutpat',
    link: '/',
    image: product2,
    oldPrice: null,
    newPrice: 200.99,
  },
  {
    id: 8,
    name: 'In fringilla felis non nulla porta rutrum',
    link: '/',
    image: product3,
    oldPrice: 12.01,
    newPrice: 9.99,
  },
  {
    id: 9,
    name: 'Suspendisse volutpat massa',
    link: '/',
    image: product4,
    oldPrice: 12.01,
    newPrice: 9.99,
  },
  {
    id: 10,
    name: 'Microsoft Surface Laptop 3',
    link: '/',
    image: product5,
    oldPrice: null,
    newPrice: 500.99,
  },
];


function DiscoveryNow() {
  const classes = useStyles();
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  return (
    <div className={classes.container}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item sm={12} md={3} lg={3}>
          <Typography className={classes.title}>Discovery Now</Typography>
        </Grid>
        <Grid container item sm={2} md={2} lg={2} justifyContent="flex-end">
          <Grid item>
            <IconButton ref={navigationPrevRef} className={classes.navButton}>
              <ArrowBackIosIcon className={classes.iconButton} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton ref={navigationNextRef} className={classes.navButton}>
              <ArrowForwardIosIcon className={classes.iconButton} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <div className={classes.cardContainer}>
          <Swiper
            slidesPerView={4}
            grid={{
              fill: 'row',
              rows: 2,
            }}
            navigation={{
              // Both prevEl & nextEl are null at render so this does not work
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            className={classes.swiper}
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
            // navigation={true}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Grids]}
          >
            {
              popularData.map(item => (
                <SwiperSlide key={item.id}>
                  <div className={classes.itemProducts}>
                    <ItemProductRecommend item={item} myClass="discovery" />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </Grid>
    </div>
  )
}

export default DiscoveryNow;