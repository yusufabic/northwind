import { createSlice, current } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const filteredCartArray = state.cart.filter(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (filteredCartArray.length) {
        state.cart
          .filter((cartItem) => cartItem.id === action.payload.id)
          .forEach((item) => {
            item.quantity += 1;
          });
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
    },

    update: (state, action) => {
      state.cart
        .filter((cartItem) => cartItem.id === action.payload.id)
        .forEach((item) => {
          item.quantity += action.payload.amount;
        });
    },

    remove: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart.splice(index, 1);
    },
  },
});

export const { addToCart, update, remove } = cart.actions;

export default cart.reducer;
