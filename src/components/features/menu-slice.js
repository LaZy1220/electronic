import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "@@menu",
  initialState: false,
  reducers: {
    setActive: (_, actions) => actions.payload,
  },
});

export const { setActive } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
