import FixedMenu from 'components/FixedMenu';
import SidebarMenu from 'components/SidebarMenu';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Body from './body/Body';
import CartDrawer from './CartDrawer/CartDrawer';
import Footer from './footer/Footer';
import Header from './header/Header';
import Menu from './menu/Menu';

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
import HomeIcon from '@material-ui/icons/Home';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';



const menuData = [
  {
    id: 1,
    label: 'Home',
    link: '/home',
    icon: <HomeIcon />,
    subMenu: [],
  },
  {
    id: 2,
    label: 'Blog',
    link: '/blog',
    icon: <ChromeReaderModeIcon />,
    subMenu: [],
  },
  {
    id: 3,
    label: 'Shop page',
    link: '/shop-page',
    icon: <StorefrontIcon />,
    subMenu: [],
  },
  {
    id: 4,
    label: 'Accessories',
    link: '/accessories',
    icon: <DevicesOtherIcon />,
    subMenu: [
      {
        id: 1,
        label: 'Menu Item 1',
        link: '/accessories/item1'
      },
      {
        id: 2,
        label: 'Menu Item 2',
        link: '/accessories/item2'
      },
      {
        id: 3,
        label: 'Menu Item 3',
        link: '/accessories/item3'
      },
    ],
  },
  {
    id: 5,
    label: 'Watches',
    link: '/watches',
    icon: <WatchIcon />,
    subMenu: [],
  },
  {
    id: 6,
    label: 'Contact Us',
    link: '/contact-us',
    icon: <ContactPhoneIcon />,
    subMenu: [
      {
        id: 1,
        label: "Via Phone",
        link: "/contact-us/phone"
      },
      {
        id: 2,
        label: "Via Email",
        link: "/contact-us/email"
      },
      {
        id: 3,
        label: "Via Social Media",
        link: "/contact-us/social-medial"
      },
    ],
  },
  {
    id: 7,
    label: 'Upgrade To Pro',
    link: '/upgrage-to-pro',
    icon: <TrendingUpIcon />,
    subMenu: [
      {
        id: 1,
        label: "Pay $199 for Month",
        link: "/upgrage-to-pro/moth"
      },
      {
        id: 2,
        label: "Pay $499 for 6 Month",
        link: "/upgrage-to-pro/halfYear"
      },
      {
        id: 3,
        label: "Pay $999 for 12 Month",
        link: "/upgrage-to-pro/year"
      },
    ],
  },
];

const categoryData = [
  {
    id: 1,
    label: "Uncategoried",
    icon: <NotInterestedIcon />,
    link: '/category/uncategoried',
    subMenu: [],
  },
  {
    id: 2,
    label: "Accessories",
    icon: <DevicesOtherIcon />,
    link: '/category/accessories',
    subMenu: [],
  },
  {
    id: 3,
    label: "Cameras",
    icon: <CameraIcon />,
    link: '/category/cameras',
    subMenu: [
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
    subMenu: [],
  },
  {
    id: 5,
    label: "New Arrival",
    icon: <AcUnitIcon />,
    link: '/category/new-rrival',
    subMenu: [],
  },
  {
    id: 6,
    label: "Most Popular",
    icon: <BubbleChartIcon />,
    link: '/category/most-popular',
    subMenu: [],
  },
  {
    id: 7,
    label: "On Sale",
    icon: <LocalMallIcon />,
    link: '/category/on-sale',
    subMenu: [],
  },
  {
    id: 10,
    label: "Audio",
    icon: <SpeakerIcon />,
    link: '/category/audio',
    subMenu: [
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
    subMenu: [],
  },
  {
    id: 9,
    label: "Video Games",
    icon: <SportsEsportsIcon />,
    link: '/category/video-games',
    subMenu: [],
  },

  {
    id: 11,
    label: "Home Appliances",
    icon: <HomeWorkIcon />,
    link: '/category/home-appliances',
    subMenu: [],
  },
  {
    id: 12,
    label: "Watches",
    icon: <WatchIcon />,
    link: '/category/watches',
    subMenu: [
      {
        id: 1,
        label: "Smart Watch",
        link: '/category/watches/smart-watch',
      },
    ],
  },
];


function MainClientPage( props ) { 
  const location = useLocation();

  return (
    <div>
      <Header />
      <FixedMenu location={location.pathname} />
      <Menu location={location.pathname} />
      <Body location={location.pathname}>
        {props.children}
      </Body>
      <Footer location={location.pathname} />
      <CartDrawer />
      <SidebarMenu location={location.pathname} menuData={menuData} categoryData={categoryData} />
    </div>
  )
}

export default MainClientPage;