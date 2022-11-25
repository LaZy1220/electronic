import { configureStore } from "@reduxjs/toolkit";
import { allInfoReducer } from "./components/features/allInfo-slice";

export const store = configureStore({
  reducer: {
    allInfo: allInfoReducer,
  },
  devTools: true,
});
