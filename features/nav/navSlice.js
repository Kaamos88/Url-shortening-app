import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleOn: (state) => {
      state.toggle = true;
    },
    toggleOff: (state) => {
      state.toggle = false;
    },
  }
});

export const {toggleOn, toggleOff} = navSlice.actions;

export default navSlice.reducer;