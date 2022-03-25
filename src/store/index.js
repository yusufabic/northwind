import { configureStore } from "@reduxjs/toolkit";
import product from "./product";
import cart from "./cart";
import notification from "./notification";

export default configureStore({
  reducer: {
    product,
    cart,
    notification,
  },
});
