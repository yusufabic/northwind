import { createSlice } from "@reduxjs/toolkit";

const edit = createSlice({
  name: "edit",
  initialState: {
    editProduct: {},
  },
  reducers: {
    setEditProduct: (state, action) => {
      state.editProduct = action.payload;
    },
  },
});

export const { setEditProduct } = edit.actions;

export default edit.reducer;
