import { createSlice } from "@reduxjs/toolkit";

const isAddShowSlice = createSlice({
  name: "@@isAddOrder",
  initialState: false,
  reducers: {
    setActiveAddOrder: (_, actions) => actions.payload,
  },
});

export const { setActiveAddOrder } = isAddShowSlice.actions;
export const isAddShowReducer = isAddShowSlice.reducer;
