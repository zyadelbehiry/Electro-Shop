import React from 'react'
import style from './HomeCards.module.css'
import animations from '../../Animations/Animations.module.css'
import { NavLink } from "react-router-dom";
import labtopImg from "../../Assets/labtop.png";
import labtopImg2 from "../../Assets/Intel-Evo-Article-Photo-1.png";
import labtopImg3 from "../../Assets/minimalist-knollingstyle-photograph-object_896360-1930.avif";
const HomeCards = () => {
  return (
    <div className={style["grid-cards"]}>
        <NavLink to={"/products"} className={`${style["main-box"]} ${animations["move-right"]}`}>
          <img src={labtopImg} alt="any" />
          <h2>
          Power Meets Portability. Find Your Perfect Laptop. 
          </h2>
        </NavLink>
        <NavLink to={"/products"} className={`${style["secondary-box1"]} ${animations["move-left"]}`}>
          <img src={labtopImg2} alt="any" />
          <h3>Heigh Quality Products</h3>
        </NavLink>
        <NavLink to={"/products"} className={`${style["secondary-box2"]} ${animations["move-left"]}`}>
          <img src={labtopImg3} alt="any" />
          <h3>Unleash Productivity with Top-Notch Laptops.</h3>
        </NavLink>
      </div>
  )
}

export default HomeCards
