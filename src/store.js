import { configureStore } from "@reduxjs/toolkit";
import { allInfoReducer } from "./components/features/allInfo-slice";
import { isAddShowReducer } from "./components/features/isShowAddOrder-slice";
import { isShowReducer } from "./components/features/isShowOrder-slice";
import { menuReducer } from "./components/features/menu-slice";

export const store = configureStore({
  reducer: {
    isAddShow: isAddShowReducer,
    isShow: isShowReducer,
    allInfo: allInfoReducer,
    active: menuReducer,
  },
  devTools: true,
});
