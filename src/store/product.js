import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
  name: "product",
  initialState: {
    selectedProduct: {},
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = product.actions;

export default product.reducer;
