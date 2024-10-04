import React from "react";
import style from "./HelpLayout.module.css";
import animations from '../../Animations/Animations.module.css'
import { NavLink } from "react-router-dom";
const HelpLayout = () => {
  return (
    <div className={style.helpLayout}>
      <h1 className={`${style["help-header-text"]} ${animations["move-down"]}`}>Hi! How can we help?</h1>
      <div className={`${style["help-search"]} ${animations["move-down"]}`}>
      <span className={style["search-icon"]}>
        <i className="bx bx-search"></i>
      </span>
      <input
        type="search"
        className={style["help-input"]}
        placeholder="Search for similar answers "
      />
      </div>
      <div className={style["featured-articles"]}>
        <h3 className={style["fa-header"]}>featured articles</h3>
        <ul className={style["fa-articles"]}>
          <li className={animations["move-right"]}>
            <p className={style["fa-article-head"]}>Problems Signing in</p>
            <p>Accounts Basics</p>
          </li>
          <li className={animations["move-left"]}>
            <p className={style["fa-article-head"]}>
              How to connect Electro-shop support
            </p>
            <p>Contact</p>
          </li>
          <li className={animations["move-right"]}>
            <p className={style["fa-article-head"]}>
              Electro-shop product offerings
            </p>
            <p>About Electro-shop</p>
          </li>
          <li className={animations["move-left"]}>
            <p className={style["fa-article-head"]}>How to purchase products</p>
            <p>Billing & Subscription</p>
          </li>
        </ul>
        <ul className={style["help-icons"]}>
          <li className={animations["move-right"]}>
            <NavLink to="/products">
              <i className="bx bx-store-alt"></i>
            </NavLink>
            <p>Go Shopping</p>
          </li>
          <li className={animations["move-left"]}>
            <NavLink to="/about">
              <i className="bx bxs-credit-card-alt"></i>
            </NavLink>
            <p>Payment Methods</p>
          </li>
          <li className={animations["move-right"]}>
            <NavLink to="/">
            <i className='bx bx-child'></i>
            </NavLink>
            <p>Contact</p>
          </li>
          <li className={animations["move-left"]}>
            <NavLink to="/about">
            <i className='bx bx-comment'></i>
            </NavLink>
          <p>Kindely leave a comment</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HelpLayout;
