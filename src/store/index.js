import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../reducer/CounterSlice";
export const store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV !== "production",
});
