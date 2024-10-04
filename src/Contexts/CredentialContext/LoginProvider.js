import React from "react";
import LoginCredentials from "./LoginCredentials";
const initialLoginStatus = {
  username: "",
  isLoggedIn: false,
  isAdmin: false,
  login: () => {},
  logout: () => {},
};
const loginHandler = (prev, action) => {
  if (action.type === "LOGIN") {
    prev.username = action.username;
    prev.isLoggedIn = true;
  } else if (action.type === "LOGOUT") {
    prev.username = "";
    prev.isLoggedIn = false;
  }
  return prev;
};
const LoginProvider = (props) => {
  const [loginCredentials, dispatchLoginCredentials] = React.useReducer(
    loginHandler,
    initialLoginStatus
  );
  const credentials = {
    username: loginCredentials.username,
    isLoggedIn: loginCredentials.isLoggedIn,
    isAdmin: loginCredentials.isAdmin,
    login: (username) => {dispatchLoginCredentials({type:"LOGIN",username:username,isLoggedIn:true,})},
    logout: () => {dispatchLoginCredentials({type:"LOGOUT",username:"",isLoggedIn:false,})}
  }
  return <LoginCredentials.Provider value={credentials} >{props.children}</LoginCredentials.Provider>;
};

export default LoginProvider;
