import { createSlice } from "@reduxjs/toolkit";

const isCheckFormSlice = createSlice({
  name: "@@isAddOrder",
  initialState: false,
  reducers: {
    setCheckForm: (_, actions) => actions.payload,
  },
});

export const { setCheckForm } = isCheckFormSlice.actions;
export const isCheckFormReducer = isCheckFormSlice.reducer;
