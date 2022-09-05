import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  URLs: [],
};

const urlListSlice = createSlice({
  name: "urlList",
  initialState,
  reducers: {
    addUrl: (state, action) => {
      state.URLs.push(action.payload)
    }
  }
});

export const { addUrl } = urlListSlice.actions;

export default urlListSlice.reducer;