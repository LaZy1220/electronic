import { createSlice } from "@reduxjs/toolkit";

const thankForReviewSlice = createSlice({
  name: "@@isThankForReview",
  initialState: false,
  reducers: {
    setActiveThankForReview: (_, actions) => actions.payload,
  },
});

export const { setActiveThankForReview } = thankForReviewSlice.actions;
export const isThankForReviewReducer = thankForReviewSlice.reducer;
