import { configureStore } from "@reduxjs/toolkit";
import { allInfoReducer } from "./components/features/allInfo-slice";
import { menuReducer } from "./components/features/menu-slice";

export const store = configureStore({
  reducer: {
    allInfo: allInfoReducer,
    active: menuReducer,
  },
  devTools: true,
});
