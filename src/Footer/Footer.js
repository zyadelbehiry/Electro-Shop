import React from "react";
import style from "./Footer.module.css"
import { NavLink } from "react-router-dom";
const Footer = () => {
  
  return (
    <footer className={style.footer}>
      <ul className={style["icons-list"]}>
        <li >
          <i className="bx bxl-whatsapp"></i>
        </li>
        <li>
          <i className="bx bxl-facebook-circle"></i>
        </li>
        <li>
          <i className="bx bxl-github"></i>
        </li>
        <li>
          <i className="bx bxl-instagram"></i>
        </li>
        <li>
          <i className="bx bxl-linkedin" ></i>
        </li>
      </ul>
      <ul className={style["nav-links"]}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>
        <li>
          <NavLink to={"/help"}>Help</NavLink>
        </li>
      </ul>
      <p>Copyrights &copy;2024 Zyad Elbehiry</p>

    </footer>
  );
};

export default Footer;
