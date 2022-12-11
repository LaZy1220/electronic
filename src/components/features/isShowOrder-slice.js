import { createSlice } from "@reduxjs/toolkit";

const isShowSlice = createSlice({
  name: "@@isOrder",
  initialState: true,
  reducers: {
    setActiveOrder: (_, actions) => actions.payload,
  },
});

export const { setActiveOrder } = isShowSlice.actions;
export const isShowReducer = isShowSlice.reducer;
