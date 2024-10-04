import React, { useState } from "react";
import style from "./NavBar.module.css";
import animations from "../Animations/Animations.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Cart from "./Cart/Cart";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store/authSlice";
import { prodcutActions } from "../Store/productSlice";
import { showCartActions } from "../Store/showCartSlice";
const NavBar = () => {
  const cartItems = useSelector((state) => state.products.cartItems);
  const cartIsVisible = useSelector((state) => state.showCart.cartIsVisible);
  const isLoggedIn = sessionStorage["isLoggedIn"];
  const isAdmin = sessionStorage["isAdmin"];
  const username = sessionStorage["userName"];
  const shortUsername = username.split("@")[0];
  const [menuClass, setMenuClass] = useState("md-hidden");
  const location = useLocation();
  ////////////////////////////
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleResponsiveMenu = () => {
    menuClass === "md-nav-list"
      ? setMenuClass("md-hidden")
      : setMenuClass("md-nav-list");
  };
  const showCartHandler = () => {
    if (isLoggedIn === "false") {
      navigate("/auth/login");
      return;
    } else {
      dispatch(showCartActions.toggleCart());
    }
  };
  const logoutHandler = () => {
    dispatch(authActions.logout());
    dispatch(prodcutActions.clearCart());
  };

  return (
    <>
      {menuClass === "md-nav-list" && (
        <div className={style["overlay"]} onClick={toggleResponsiveMenu}></div>
      )}
      {menuClass === "md-hidden" && (
        <div className={`${style["cart-item"]} ${style["lg-hidden"]}`} onClick={showCartHandler}>
          <div className={style["custom-cart"]}>
            <i className="bx bxs-cart"></i>
            <span className={style["cart-count"]}>{cartItems.length}</span>
          </div>
        </div>
      )}
      <nav
        className={`${style["nav-bar"]} ${style["md-nav-bar"]} ${animations["move-down"]}`}
      >
        <div className={style["close-nav"]} onClick={toggleResponsiveMenu}>
          <i className="bx bx-menu"></i>
        </div>
        <ul className={`${style["nav-list"]} ${style[menuClass]} `}>
          {isLoggedIn !== "false" && (
            <li className={style["nav-item"]}>
              <NavLink
                className={style["username"]}
                onClick={toggleResponsiveMenu}
                to={"/"}
              >
                {shortUsername}
              </NavLink>
            </li>
          )}

          {isAdmin === "true" && (
            <li className={style["nav-item"]}>
              <NavLink
                to={"/admin-dashboard"}
                className={
                  location.pathname === "/admin-dashboard"
                    ? style["active"]
                    : ""
                }
                onClick={toggleResponsiveMenu}
              >
                Dashboard
              </NavLink>
            </li>
          )}

          <li className={style["nav-item"]}>
            <NavLink
              to={"/about"}
              className={location.pathname === "/about" ? style["active"] : ""}
              onClick={toggleResponsiveMenu}
            >
              About
            </NavLink>
          </li>
          <li className={style["nav-item"]}>
            <NavLink
              to={"/products"}
              className={
                location.pathname === "/products" ? style["active"] : ""
              }
              onClick={toggleResponsiveMenu}
            >
              Products
            </NavLink>
          </li>
          <li className={style["nav-item"]}>
            <NavLink
              to={"/"}
              className={location.pathname === "/" ? style["active"] : ""}
              onClick={toggleResponsiveMenu}
            >
              Home
            </NavLink>
          </li>
          <li className={style["nav-item"]}>
            <NavLink
              to="/help"
              className={location.pathname === "/help" ? style["active"] : ""}
              onClick={toggleResponsiveMenu}
            >
              Help
            </NavLink>
          </li>
          {isLoggedIn === "false" && (
            <>
              <li className={style["nav-item"]}>
                <NavLink
                  to="/auth/login"
                  className={
                    location.pathname === "/auth/login" ? style["active"] : ""
                  }
                  onClick={toggleResponsiveMenu}
                >
                  LOGIN
                </NavLink>
              </li>
              <li className={style["nav-item"]}>
                <NavLink
                  to="/auth/signup"
                  className={
                    location.pathname === "/auth/signup" ? style["active"] : ""
                  }
                  onClick={toggleResponsiveMenu}
                >
                  SIGNUP
                </NavLink>
              </li>
            </>
          )}
          {isLoggedIn === "true" && (
            <>
              <li className={style["nav-item"]}>
                <NavLink
                  to="/auth/login"
                  onClick={() => {
                    logoutHandler();
                    toggleResponsiveMenu();
                  }}
                >
                  LOGOUT
                </NavLink>
              </li>
              <div className={style["cart-item"]} onClick={showCartHandler}>
                <span className={style["cart-count"]}>{cartItems.length}</span>
                <i className="bx bxs-cart"></i>
              </div>
            </>
          )}
        </ul>
        {cartIsVisible &&
          createPortal(<Cart />, document.getElementById("cart-modal"))}
      </nav>
    </>
  );
};
export default NavBar;
