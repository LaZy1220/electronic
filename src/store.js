import { configureStore } from "@reduxjs/toolkit";
import { addFeedBackReducer } from "./components/features/addFeedBack-slice";
import { allInfoReducer } from "./components/features/allInfo-slice";
import { isAddShowReducer } from "./components/features/isShowAddOrder-slice";
import { isShowReducer } from "./components/features/isShowOrder-slice";
import { menuReducer } from "./components/features/menu-slice";
import { isThankForReviewReducer } from "./components/features/thankForReview-slice";

export const store = configureStore({
  reducer: {
    isAddShow: isAddShowReducer,
    isAddFeedBack: addFeedBackReducer,
    isShow: isShowReducer,
    isThankForReview: isThankForReviewReducer,
    allInfo: allInfoReducer,
    active: menuReducer,
  },
  devTools: true,
});
