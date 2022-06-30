import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PropTypes from 'prop-types';
import React from 'react';
import { Grid as Grids, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductCard from 'components/ProductCard';
import { productsData } from '../../FakeData';

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

  appBar: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },

  tabChildren: {
    textTransform: 'none',
    fontSize: '14px',
    fontFamily: 'Lato',
    minWidth: 100,
    '&.Mui-selected': {
      color: '#df971a',
    },
  },

  tabBar: {
    color: "#686868",
    '& .MuiTabs-flexContainer': {
      justifyContent: 'flex-end',
    },
  },

  swiper: {
    paddingBottom: 30,
  },

  productItem: {

  },

}))

function TabPanel(props) {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <div
      className={classes.tabpanel}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{
        padding: 10,
        background: 'white',
        width: '100%',
      }}
    >
      {value === index && (
        <>
          {props.children}
        </>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function TrendNow() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.container}>
      <Grid container alignItems="center">
        <Grid item sm={12} md={12} lg={3}>
          <Typography className={classes.title}> Trending Now</Typography>
        </Grid>
        <Grid
          container
          item
          sm={12}
          md={12}
          lg={9}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item sm={10}>
            <div className={classes.root}>
              <AppBar position="static" className={classes.appBar}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                  TabIndicatorProps={{
                    style: {
                      display: 'none',
                    },
                  }}
                  className={classes.tabBar}
                >
                  <Tab label="Most Popular" className={classes.tabChildren} />
                  <Tab label="New Arrial" className={classes.tabChildren} />
                  <Tab label="On Sale" className={classes.tabChildren} />
                </Tabs>
              </AppBar>
            </div>
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
      </Grid>
      <Grid container>
        <TabPanel value={value} index={0}>
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
              productsData.map(item => (
                <SwiperSlide key={item.id}>
                  <ProductCard data={item} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </TabPanel>
        <TabPanel value={value} index={1}>
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
              productsData.map(item => (
                <SwiperSlide key={item.id}>
                  <ProductCard data={item} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </TabPanel>
        <TabPanel value={value} index={2}>
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
              productsData.map(item => (
                <SwiperSlide key={item.id}>
                  <ProductCard data={item} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </TabPanel>
      </Grid>
    </div>
  )
}

export default TrendNow;