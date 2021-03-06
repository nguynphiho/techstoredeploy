import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/client/HomePage/index';
import BlogPage from './pages/client/BlogPage/index';
import ShopPage from './pages/client/ShopPage/index';
import React from 'react';
import './App.css';

import MainClientPage from './pages/client';
import BlogDetail from 'pages/client/BlogPage/BlogDetail';
import ProductDetail from 'pages/client/ShopPage/ProductDetail';
import { productCarts } from 'redux/cart/selector';
import { useSelector } from 'react-redux';
import Login from 'pages/client/LoginPage';
import SignUp from 'pages/client/RegisterPage';
import ContactUs from 'pages/client/ContactUsPage';

function App() {
  const productCart = useSelector(productCarts);
  const productIdcart = productCart.map(item => item.id);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
          <MainClientPage>
            <Switch>
              <Route exact path="/techstoredeploy">
                <HomePage productIdCart={productIdcart} />
              </Route>
              <Route exact path="/home">
                <HomePage productIdCart={productIdcart} />
              </Route>
              <Route exact path="/shop-page">
                <ShopPage productIdCart={productIdcart} />
              </Route>
              <Route exact path="/shop-page/products/:id">
                <ProductDetail productIdCart={productIdcart} />
              </Route>
              <Route exact path="/blog">
                <BlogPage />
              </Route>
              <Route exact path="/blog/:id">
                <BlogDetail />
              </Route>
            </Switch>
          </MainClientPage>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
