import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "store";

const initialState = {
  isShow: false,
  info: {},
};

export const counterSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    show: (state, action) => {
      state.isShow = true;
      state.info = action.payload.alertInfo;
    },

    hide: (state) => {
      state.isShow = false;
    },
  },
});

export const { show, hide } = counterSlice.actions;

export default counterSlice.reducer;

export const selectCounter = () => (state: AppState) => state.alert;
