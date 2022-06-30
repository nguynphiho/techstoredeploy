import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/client/HomePage/index';
import BlogPage from './pages/client/BlogPage/index';
import ShopPage from './pages/client/ShopPage/index';
import './App.css';

import MainClientPage from './pages/client';
import BlogDetail from 'pages/client/BlogPage/BlogDetail';
import ProductDetail from 'pages/client/ShopPage/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainClientPage>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/shop-page" component={ShopPage} />
            <Route exact path="/shop-page/products/:id" component={ProductDetail} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/blog/:id" component={BlogDetail} />
          </Switch>
        </MainClientPage>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
