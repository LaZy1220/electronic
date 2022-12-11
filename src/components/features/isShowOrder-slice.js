import { createSlice } from "@reduxjs/toolkit";

const isShowSlice = createSlice({
  name: "@@isOrder",
  initialState: false,
  reducers: {
    setActiveOrder: (_, actions) => actions.payload,
  },
});

export const { setActiveOrder } = isShowSlice.actions;
export const isShowReducer = isShowSlice.reducer;
