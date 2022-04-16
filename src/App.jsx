import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Management from "./pages/Management";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import "./style/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Notification />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/detail" component={ProductDetail} />
        <Route path="/product/:product_id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/management" component={Management} />
        <Route path="/edit" component={Edit} />
        <Route path="/add" component={Add} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
