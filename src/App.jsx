import React, { useState } from "react";
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
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./style/index.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        <Route path="/management">
          {isLoggedIn ? <Management /> : <Redirect to="/signin" />}
        </Route>
        <Route path="/edit" component={Edit} />
        <Route path="/add" component={Add} />
        <Route path="/signin">
          <SignIn setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/signup" component={SignUp} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
