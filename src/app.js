import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import CartPage from './components/CartPage';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/products" component={ProductListingPage} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  </div>
);

export default App;