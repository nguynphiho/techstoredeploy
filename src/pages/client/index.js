import FixedMenu from 'components/FixedMenu';
import SidebarMenu from 'components/SidebarMenu';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Body from './body/Body';
import CartDrawer from './CartDrawer/CartDrawer';
import Footer from './footer/Footer';
import Header from './header/Header';
import Menu from './menu/Menu';
import { useScrollWindow } from 'hooks/input.hooks';

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
import ScrollTopButton from 'components/ScrollTopButton';
import MotorolaPhone from 'assets/images/product22.png';
import FastImageCanonCamera from 'assets/images/product4.png';
import AppleTVBox from 'assets/images/product7.png';
import AppleMacbookPro from 'assets/images/product8.png';
import Speaker from 'assets/images/products11.png';
import NotificationCart from 'components/NotificationCart';

import { isOpenSnackbar, productCarts } from 'redux/cart/selector';
import { useSelector } from 'react-redux';




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

const popularData = [
  {
    id: 13,
    name: "Fast Image Canon Camera",
    oldPrice: 412.02,
    newPrice: 399.99,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: FastImageCanonCamera,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 5,
    category: ["Camera", "New Arrival",],
    status: ["Featured"],
    tags: ["laptop"],
  },
  {
    id: 14,
    name: "Apple TV Box",
    oldPrice: 412.02,
    newPrice: 399.99,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: AppleTVBox,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 5,
    category: ["Apple", "New Arrival",],
    status: ["Featured"],
    tags: ["Apple"],
  },
  {
    id: 15,
    name: "Apple Macbook Pro 2020",
    oldPrice: 412.02,
    newPrice: 399.99,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: AppleMacbookPro,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 5,
    category: ["Apple", "New Arrival",],
    status: ["On sale"],
    tags: ["Apple"],
  },
  {
    id: 17,
    name: "Motorola Flip Phone 2022",
    oldPrice: 412.02,
    newPrice: 399.99,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: MotorolaPhone,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 5,
    category: ["SmartPhone", "New Arrival",],
    status: ["On sale"],
    tags: ["SmartPhone"],
  },
  {
    id: 18,
    name: "Best performance Speaker 2022",
    oldPrice: 412.02,
    newPrice: 399.99,
    description: "Nulla finibus massa non maximus rhoncus. Duis ut ligula et nibh dictum eleifend vel non massa. Aliquam molestie, urna at pellentesque vehicula, sem justo condimentum purus, quis sodales dolor urna ut lorem. Aliquam erat volutpat. Sed ac ligula quis lacus consequat fringilla laoreet quis purus.",
    mainImage: Speaker,
    extraImage1: "",
    extraImage2: "",
    extraImage3: "",
    view: 100,
    color: ["black"],
    amount: 10,
    rating: 5,
    category: ["Audio", "New Arrival",],
    status: ["On sale"],
    tags: ["Audio"],
  },
];

const tagCloudData = [
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

function MainClientPage( props ) { 
  const location = useLocation();
  const isNotify = useSelector(isOpenSnackbar);
  
  const { screenHeight } = useScrollWindow();
  return (
    <div>
      <Header />
      <FixedMenu location={location.pathname} screenHeight={screenHeight} />
      <Menu location={location.pathname} />
      <Body
        location={location.pathname}
        popularData={popularData}
        tagCloudData={tagCloudData}
        categoryData={categoryData}
      >
        {props.children}
      </Body>
      <Footer location={location.pathname} popularData={popularData} />
      <CartDrawer screenHeight={screenHeight}/>
      <SidebarMenu location={location.pathname} menuData={menuData} categoryData={categoryData} />
      <ScrollTopButton screenHeight={screenHeight}/>
      <NotificationCart isNotify={isNotify} />
    </div>
  )
}

export default MainClientPage;