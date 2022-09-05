import { configureStore } from "@reduxjs/toolkit";
import navSlice from "../features/nav/navSlice";
import urlListSlice from "../features/url-list/urlListSlice";

export const store = configureStore({
  reducer: {
    nav: navSlice,
    urls: urlListSlice,
  }
});