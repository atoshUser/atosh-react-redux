import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLogIn: false,
  userData: [],
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
      state.userData = [...state.userData, action.payload];
      state.isLoading = false;
    },
    addPassword: (state, action) => {
      state.email = action.payload;
    },
    addUserFailure: (state,action) => {
        state.isLoading = false
      state.error = action.payload;
    },
  },
});

export const { userLoginStart, addUserSuccess,addUserFailure } = authSlice.actions;
export default authSlice.reducer;
