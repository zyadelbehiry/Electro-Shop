import { useState } from "react";
import React from "react";

const Credent = React.createContext({
  username: "",
  isLoggedIn: false,
  isAdmin: false,
  logout:() => {}
});

export default Credent;
