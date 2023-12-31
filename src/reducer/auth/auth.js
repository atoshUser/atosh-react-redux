import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../../helpers/persistance-storage";

const initialState = {
  isLoading: false,
  isLogIn: false,
  userData: null,

  
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
  
    addUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logOutUser:state => {
       state.userData = null
       state.isLogIn = false
    }
  },
});

export const { userLoginStart, addUserSuccess, addUserFailure,logOutUser } =
  authSlice.actions;
export default authSlice.reducer;
