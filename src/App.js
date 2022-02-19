import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/home";
import Products from "./Pages/products";
import Product from "./Pages/product";
import Card from "./Pages/cart";
function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/products" component={Products} />

          <Route path="/product" component={Product} />
          <Route path="/card" component={Card} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
