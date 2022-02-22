import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Products from "./pages/products";
import Product from "./pages/product";
import Cart from "./pages/cart";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
