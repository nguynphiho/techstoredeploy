import React from 'react';
import { useLocation } from 'react-router-dom';
import Body from './body/Body';
import CartButton from './CartDrawer/CartDrawer';
import Footer from './footer/Footer';
import Header from './header/Header';
import Menu from './menu/Menu';


function MainClientPage( props ) { 
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const handleOpenCart = (value) => {
    setOpen(value)
    handleOpenDrawer();
  };

  const handleOpenDrawer = (value) => {
    return value;
  }

  const handleCloseCart = (value) => {
    setOpen(value);
  }

  return (
    <div>
      <Header openCart={(value) => handleOpenCart(value)}/>
      <Menu location={location.pathname}/>
      <Body location={location.pathname}>
        {props.children}
      </Body>
      <Footer location={location.pathname}/>
      <CartButton openDrawer={() => handleOpenDrawer(open)} closeCart={(value) => handleCloseCart(value)}/>
    </div>
  )
}

export default MainClientPage;