import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const ToolsCookies = new Cookies();

let getStatusAuth = ToolsCookies.get("status_login");
let getDataAuth = ToolsCookies.get("user_data");

export const UserSlice = createSlice({
  name: "User",
  initialState: {
    autStatus: getStatusAuth ? true : false,
    userData: getDataAuth ? getDataAuth : null,
    token: null,
    refreshToken: "",
  },
  reducers: {
    setAuthStatus: (state, action) => {
      state.authStatus += action.payload;
    },

    setUserData: (state, action) => {
      state.userData = action.payload;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },

    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

export const { setAuthStatus, setUserData, setToken, setRefreshToken } =
  UserSlice.actions;

export default UserSlice.reducer;
