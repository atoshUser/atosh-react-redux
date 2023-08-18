import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogIn: false,
  userData: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoginStart: (state) => {
      state.isLogIn = !state.isLogIn;
    },

    addUserData: (state, action) => {
      state.userData = [...state.userData, action.payload];
    },
  },
});

export const { userLoginStart, addUserData } = authSlice.actions;
export default authSlice.reducer;
