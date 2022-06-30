import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { Button, IconButton, makeStyles, Typography } from '@material-ui/core';
import CompareIcon from '@material-ui/icons/Compare';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Rating } from '@material-ui/lab';
import clsx from 'clsx';
import React from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import QuantityComponent from './QuantityComponent';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    display: 'flex',
    background: 'white',
    boxShadow: '0px 10px 15px -3px rgba(15, 23, 42, 0.08)',
    padding: 10,
  },

  status: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: 50,
    padding: 2,
    borderRadius: '0px 0px 5px 5px',
    background: '#f4a51c',
    textAlign: 'center',
    '& span': {
      color: 'white',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'Lato',
    },
  },

  imageContainer: {
    display: 'flex',
  },
  imgThumb: {
    display: 'flex',
    flexDirection: 'column',
  },
  thumbItem: {
    opacity: 0.5,
    width: 60,
    height: 60,
    marginBottom: 20,
    overflow: 'hidden',
    '& img': {
      width: 'inherit',
      objectFit: 'contain',
    },
  },

  thumbActive: {
    opacity: 1,
  },

  selectedImage: {
    width: 350,
    height: 350,
    overflow: 'hidden',
    '& img': {
      width: 'inherit',
      objectFit: 'contain'
    },
    display: 'flex',
  },

  content: {
    padding: 10,
  },

  productName: {
    fontSize: 20,
    fontFamily: 'Lato',
    letterSpacing: 1.5,
    marginBottom: 10,
  },

  viewer: {
    fontSize: 14,
    fontFamily: 'Lato',
    color: '#686868',
    marginBottom: 10,
  },

  priceContainer: {
    display: 'flex',
    marginBottom: 10,
  },

  oldPrice: {
    fontWeight: 600,
    fontSize: 18,
    textDecoration: 'line-through',
    fontFamily: 'Lato',
    color: '#686868',
  },

  newPrice: {
    fontWeight: 600,
    marginLeft: 20,
    fontSize: 18,
    fontFamily: 'Lato',
    color: '#df971a',
  },

  description: {
    fontFamily: 'Lato',
    fontSize: 14,
    color: '#686868',
    lineHeight: 1.4,
  },

  buttonContainer: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  addtocartBtn: {
    background: '#f4a51c',
    textTransform: 'none',
    color: 'white',
    fontSize: 16,
    padding: '6px 12px',
    '&:hover': {
      background: '#f59c01',
    },
  },

  iconButton: {
    border: 'solid 1px #686868',
    padding: 8,
  },
}))

function ProductCardDetail({ data }) {
  const classes = useStyles();
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [indexActive, setIndexActive] = React.useState(0);

  const handleOnSlideChange = (swiper) => {
    setIndexActive(swiper.activeIndex);
  };

  return (
    <div className={classes.container}>
      {
        (data.status.length > 0) && (
          <div className={classes.status}>
            <span>{data.status}</span>
          </div>
        )
      }
      <div className={classes.imageContainer}>
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          freeMode={true}
          slidesPerGroup={1}
          watchSlidesProgress={true}
          direction="vertical"
          modules={[FreeMode, Navigation, Thumbs]}
          className={classes.imgThumb}>
          <SwiperSlide>
            <div className={clsx(classes.thumbItem, {
              [classes.thumbActive]: indexActive === 0,
            })}>
              <img alt='' src={data.mainImage} />
            </div>
          </SwiperSlide>
          {
            data.extraImage1 && (
              <SwiperSlide>
                <div className={clsx(classes.thumbItem, {
                  [classes.thumbActive]: indexActive === 1,
                })}>
                  <img alt='' src={data.extraImage1} />
                </div>
              </SwiperSlide>
            )
          }

          {
            data.extraImage2 && (
              <SwiperSlide>
                <div className={clsx(classes.thumbItem, {
                  [classes.thumbActive]: indexActive === 2,
                })}>
                  <img alt='' src={data.extraImage2} />
                </div>
              </SwiperSlide>
            )
          }

          {
            data.extraImage3 && (
              <SwiperSlide>
                <div className={clsx(classes.thumbItem, {
                  [classes.thumbActive]: indexActive === 2,
                })}>
                  <img alt='' src={data.extraImage3} />
                </div>
              </SwiperSlide>
            )
          }

        </Swiper>
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={classes.selectedImage}
          onSlideChangeTransitionStart={handleOnSlideChange}
        >
          {
            data.mainImage && (
              <SwiperSlide>
                <img alt='' src={data.mainImage} />
              </SwiperSlide>
            )
          }

          {
            data.extraImage1 && (
              <SwiperSlide>
                <img alt='' src={data.extraImage1} />
              </SwiperSlide>
            )
          }

          {
            data.extraImage2 && (
              <SwiperSlide>
                <img alt='' src={data.extraImage2} />
              </SwiperSlide>
            )
          }

          {
            data.extraImage3 && (
              <SwiperSlide>
                <img alt='' src={data.extraImage3} />
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
      <div className={classes.content}>
        <Typography className={classes.productName}>Suspendisse gravida lacus varius</Typography>
        <Rating name="read-only" value={4} readOnly />
        <Typography className={classes.viewer}> (1 customer review)</Typography>
        <div className={classes.priceContainer}>
          <Typography className={classes.oldPrice}>$ {data.oldPrice}</Typography>
          <Typography className={classes.newPrice}>$ {data.newPrice}</Typography>
        </div>
        <div className={classes.description}>
          {data.description}
        </div>
        <div className={classes.buttonContainer}>
          <QuantityComponent />
          <Button className={classes.addtocartBtn}> Add to cart </Button>
          <IconButton className={classes.iconButton} >
            <FavoriteIcon />
          </IconButton>
          <IconButton className={classes.iconButton}>
            <CompareIcon />
          </IconButton>
        </div>
      </div>
    </div >
  )
}

export default ProductCardDetail;