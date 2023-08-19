import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../../helpers/persistance-storage";

const initialState = {
  isLoading: false,
  isLogIn: false,
  userData: null,
  email: "",
  password: "",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoginStart: (state) => {
      state.isLoading = true;
    },

    addUserSuccess: (state, action) => {
      state.userData = action.payload;
      setItem("token", action.payload.token);
      state.isLoading = false;
      state.isLogIn = true;
      state.error = null;
    },
    addPassword: (state, action) => {
      state.email = action.payload;
    },
    addUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { userLoginStart, addUserSuccess, addUserFailure } =
  authSlice.actions;
export default authSlice.reducer;
