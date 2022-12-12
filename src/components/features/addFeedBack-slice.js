import { createSlice } from "@reduxjs/toolkit";

const addFeedBackSlice = createSlice({
  name: "@@addFeedBack",
  initialState: false,
  reducers: {
    setActiveAddFeedBack: (_, action) => action.payload,
  },
});

export const { setActiveAddFeedBack } = addFeedBackSlice.actions;
export const addFeedBackReducer = addFeedBackSlice.reducer;
