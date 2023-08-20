import { configureStore } from "@reduxjs/toolkit";
import auth from "../reducer/auth/auth";
import article from "../reducer/article/article";
export const store = configureStore({
  reducer: {
    article,
    auth,
  },
  devTools: process.env.NODE_ENV !== "production",
});
