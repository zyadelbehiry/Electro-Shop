import React from "react";
import { useNavigate, useParams } from "react-router";
import useFetch from "../../Custom Hooks/useFetch";
import style from "./ProductDesc.module.css";
import Spinner from "../../UI/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { prodcutActions } from "../../Store/productSlice";
const ProductDesc = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `https://test-83a9a-default-rtdb.firebaseio.com/products/${id}`
  );
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((selector) => selector.auth.isLoggedIn);
  const navigate = useNavigate();
  const addToCartHandler = () => {
    if (isLoggedIn) {
      dispatch(prodcutActions.addProduct(data));
    } else {
      navigate("/auth/login");
    }
  };
  return (
    <>
      {data && (
        <div className={style["prod-desc"]}>
          <div className={style["prod-img"]}>
            <img
              src={`${process.env.PUBLIC_URL}/images/${data["product_image"]}`}
              alt={data["product_name"]}
            />
          </div>
          <div className={style["product-advantages"]}>
            <h1>{data["product_name"]}</h1>
            <h3>${data["product_price"].toFixed(2)} includes</h3>
            <h3>1-year warranty against manufactuuring defects</h3>
            <p>or ${data["product_price"] + 150} without warranty</p>
            <ul>
              <li>
                <span>
                  <i className="bx bx-check"></i>
                </span>{" "}
                Up to 50% offer
              </li>
              <li>
                <span>
                  <i className="bx bx-check"></i>
                </span>{" "}
                Valuable Gifts
              </li>
              <li>
                <span>
                  <i className="bx bx-check"></i>
                </span>{" "}
                1-Year warranty
              </li>
            </ul>
            <button
              className={style["add-cart-btn"]}
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
      {!data && <Spinner></Spinner>}
    </>
  );
};
export default ProductDesc;
