import React,{useContext, useState} from "react";
import { Outlet } from "react-router";
import NavBar from "../NavBar";
import loginCredentials from "../../Contexts/CredentialContext/LoginCredentials";
import Footer from "../../Footer/Footer";
const Layout = () => {
  const userCredentials = useContext(loginCredentials);
  const [state,setState] = useState("zozza");
  return (
    <div> 
      <NavBar username={userCredentials.username}/>
      <main>
        <Outlet  setState={state}/>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
