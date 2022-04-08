import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
import AddProduct from "./pages/AddProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Notification />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/detail" component={ProductDetail} />
        <Route path="/product/:product_id" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/management" component={Management} />
        <Route path="/edit" component={Edit} />
        <Route path="/addproduct" component={AddProduct} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
