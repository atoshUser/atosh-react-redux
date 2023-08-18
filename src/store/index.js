import { configureStore } from "@reduxjs/toolkit";
import { auth } from "../reducer";
export const store = configureStore({
  reducer: {
    auth,
  },
  devTools: process.env.NODE_ENV !== "production",
});
