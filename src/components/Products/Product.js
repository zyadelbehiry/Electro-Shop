import React from "react";
import style from "./Product.module.css";
import animations from '../../Animations/Animations.module.css'
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { prodcutActions } from "../../Store/productSlice";
const Product = (props) => {

  const dispatch = useDispatch();
  const isLoggedIn = sessionStorage["isLoggedIn"];
  const navigate = useNavigate();

  const addToCartBtnHandler = (product) => {
    if (isLoggedIn!=="true") {
      navigate("/auth/login");
      return;
    } else {
      dispatch(prodcutActions.addProduct(product));
    }
  };
  return (
    <div className={`${style["product-card"]} ${animations["move-right"]}`}>
      <NavLink
        key={props.product.id}
        className={style["product-link"]}
        to={`${props.product.id.toString()}`}
      >
        <div className={style["product-image"]}>
          <img
            src={`${process.env.PUBLIC_URL}/images/${props.product["product_image"]}`}
            alt={props.product["product_name"]}
          />
        </div>
      </NavLink>
      <div className={style["product-summary"]}>
        <div className={style["p-summary-desc"]}>
          <h3>{props.product["product_name"]}</h3>
          <p className={style["price"]}>
            ${(+props.product["product_price"]).toFixed(2)}
          </p>
        </div>
        <button
          className={style["add-cart-btn"]}
          onClick={() => addToCartBtnHandler(props.product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Product;
