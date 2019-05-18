import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Products from './components/Products';
import Item from './components/Item';
import Checkout from './components/Checkout.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import SignUp from './components/SignUp';
import Order from './components/Order.js';
import Payment from './components/Payment.js';
import NewProducts from './components/NewProducts.js';
import EditProduct from './components/EditProduct.js';



const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:pet" component={Products}/>
      <Route exact path="/products/:pet/:category" component={Products}/>
      <Route exact path="/product/:id" component={Item} />
      <Route exact path="/product/:id/:edit" component={Item} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/orders" component={Order} />
      <Route exact path="/newproducts" component={NewProducts}/>
      <Route exact path="/editproduct/:id" component={EditProduct}/>
      <Route exact path="/payment" component={Payment} />
    </div>
  </Router>
);

export default Routes;
