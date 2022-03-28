import { createSlice } from "@reduxjs/toolkit";

const notification = createSlice({
  name: "notification",
  initialState: {
    notification: {
      show: false,
      message: "",
    },
  },
  reducers: {
    setNotification: (state, action) => {
      state.notification.show = action.payload.show;
      state.notification.message = action.payload.message;
    },
  },
});

export const { setNotification } = notification.actions;

export default notification.reducer;
