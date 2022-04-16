import { configureStore } from "@reduxjs/toolkit";
import product from "./product";
import cart from "./cart";
import notification from "./notification";
import edit from "./edit";

export default configureStore({
  reducer: {
    product,
    cart,
    notification,
    edit,
  },
});
