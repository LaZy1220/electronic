import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getInfoPage = createAsyncThunk("@@allInfo/load-info", async () => {
  return axios.get("https://electric.makser-test.site/api/all/");
});
const initialState = {
  status: "idle",
  list: [],
  error: null,
};
const allInfoSlice = createSlice({
  name: "@@allInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInfoPage.pending, (state) => {
        state.status = "loading";
        state.error = "null";
      })
      .addCase(getInfoPage.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(getInfoPage.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data;
      });
  },
});
export const allInfoReducer = allInfoSlice.reducer;
