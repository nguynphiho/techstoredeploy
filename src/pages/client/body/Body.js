import { Grid, makeStyles } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import CameraIcon from '@material-ui/icons/Camera';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import SpeakerIcon from '@material-ui/icons/Speaker';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import WatchIcon from '@material-ui/icons/Watch';
import product5 from 'assets/images/product23.png';
import product4 from 'assets/images/product24.png';
import product3 from 'assets/images/product25.png';
import product2 from 'assets/images/product26.png';
import product1 from 'assets/images/product27.png';
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

const categoryData = [
  {
    id: 1,
    label: "Uncategoried",
    icon: <NotInterestedIcon />,
    link: '/category/uncategoried',
    subItem: [],
  },
  {
    id: 2,
    label: "Accessories",
    icon: <DevicesOtherIcon />,
    link: '/category/accessories',
    subItem: [],
  },
  {
    id: 3,
    label: "Cameras",
    icon: <CameraIcon />,
    link: '/category/cameras',
    subItem: [
      {
        id: 1,
        label: 'Security Camera',
        link: '/category/cameras/security-camera',
      },
      {
        id: 2,
        label: 'Gopro',
        link: '/category/cameras/gopro'
      },
    ],
  },
  {
    id: 4,
    label: "Computer&Laptop",
    icon: <LaptopWindowsIcon />,
    link: '/category/computer-laptop',
    subItem: [],
  },
  {
    id: 5,
    label: "New Arrival",
    icon: <AcUnitIcon />,
    link: '/category/new-rrival',
    subItem: [],
  },
  {
    id: 6,
    label: "Most Popular",
    icon: <BubbleChartIcon />,
    link: '/category/most-popular',
    subItem: [],
  },
  {
    id: 7,
    label: "On Sale",
    icon: <LocalMallIcon />,
    link: '/category/on-sale',
    subItem: [],
  },
  {
    id: 10,
    label: "Audio",
    icon: <SpeakerIcon />,
    link: '/category/audio',
    subItem: [
      {
        id: 1,
        label: "Headphones",
        link: '/category/audio/headphones',
      },
      {
        id: 2,
        label: "Speaker",
        link: '/category/audio/speaker',

      },
    ],
  },
  {
    id: 8,
    label: "Smartphone",
    icon: <SmartphoneIcon />,
    link: '/category/smartphone',
    subItem: [],
  },
  {
    id: 9,
    label: "Video Games",
    icon: <SportsEsportsIcon />,
    link: '/category/video-games',
    subItem: [],
  },

  {
    id: 11,
    label: "Home Appliances",
    icon: <HomeWorkIcon />,
    link: '/category/home-appliances',
    subItem: [],
  },
  {
    id: 12,
    label: "Watches",
    icon: <WatchIcon />,
    link: '/category/watches',
    subItem: [
      {
        id: 1,
        label: "Smart Watch",
        link: '/category/watches/smart-watch',
      },
    ],
  },
];

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
];

const TagCloudData = [
  {
    id: 1,
    label: "Accesories",
    link: "/"
  },
  {
    id: 2,
    label: "Apple",
    link: "/"
  },
  {
    id: 3,
    label: "Cameras",
    link: "/"
  },
  {
    id: 4,
    label: "Gaming",
    link: "/"
  },
  {
    id: 5,
    label: "Home",
    link: "/"
  },
  {
    id: 6,
    label: "Laptop",
    link: "/"
  },
  {
    id: 7,
    label: "Sound",
    link: "/"
  },
  {
    id: 8,
    label: "Speaker",
    link: "/"
  },
  {
    id: 9,
    label: "Sporty",
    link: "/"
  },
  {
    id: 10,
    label: "Watches",
    link: "/"
  },
]
function Body({ children, location }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={1}>
        <Grid item md={2} lg={2} className={classes.leftSideBar}>
          <ListComponent name="Category" data={categoryData} location={location} />
          <PopularCard data={popularData} name={"Popular"} />
          <TagCloud data={TagCloudData} />
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

        {/* <Grid item className={classes.options}>
          <ListComponent name="Category" data={categoryData} location={location} />
          <PopularCard data={popularData} name={"Popular"} />
          <TagCloud data={TagCloudData} />
          <Banner />

          <StoreWidget />
          <AboutCard />
          <StoreUpdate />
          <ShowCase />
        </Grid> */}
      </Grid>
    </div>
  )
}

export default Body;