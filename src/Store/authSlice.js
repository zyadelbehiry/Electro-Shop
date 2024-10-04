import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false, isAdmin: false, username: "" },
    reducers: {
      login: (prev, payload) => {
      sessionStorage.setItem("isLoggedIn", true);
      sessionStorage.setItem("userName", payload.payload);
      return {
          isLoggedIn: true,
          isAdmin: false,
          username: payload.payload,
        };
      },
      adminLogin: (prev, payload) => {
        sessionStorage.setItem("isLoggedIn", true);
        sessionStorage.setItem("isAdmin", true);
        sessionStorage.setItem("userName", payload.payload);
        return {
          isLoggedIn: true,
          isAdmin: true,
          username: payload.payload,
        };
      },
      logout: (prev) => {
        sessionStorage.setItem("isLoggedIn", false);
        sessionStorage.setItem("isAdmin", false);
        sessionStorage.setItem("userName", "");
        return {
          isLoggedIn: false,
          isAdmin: false,
          username: "",
        };
      },
    },
  });
export const authActions = authSlice.actions;
export default authSlice;