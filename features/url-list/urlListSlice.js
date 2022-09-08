import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getShortUrl = createAsyncThunk(
  "urlList/getShortUrl",
  async (name, thunkAPI) => {
    try {
      const response = await axios.get("https://api.shrtco.de/v2/shorten", {
        params: {
          url: name,
        },
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("error");
    }
  }
);

const initialState = {
  URLs: [],
  shortenURLs: [],
  isLoading: true,
};

const urlListSlice = createSlice({
  name: "urlList",
  initialState,
  reducers: {},
  extraReducers: {
    [getShortUrl.pending]: (state) => {
      state.isLoading = true;
    },
    [getShortUrl.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.URLs.push(action.payload.result.original_link);
      state.shortenURLs.push(action.payload.result.full_short_link3);
    },
    [getShortUrl.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    },
  },
});

export default urlListSlice.reducer;
