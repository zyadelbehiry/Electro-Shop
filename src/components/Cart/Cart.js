import React, { useEffect, useState } from "react";
import style from "./Cart.module.css";
import CardDetails from "./CardDetails";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { prodcutActions } from "../../Store/productSlice";
import { showCartActions } from "../../Store/showCartSlice";
import CartItem from "./CartItem";
const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const [cartContent, setCartContent] = useState("cart-items");
  const dispatch = useDispatch();
  const toggleCart = useSelector(state=>state.showCart.cartIsVisible);
  const cartItems = useSelector((state) => state.products.cartItems);
  const cartTotalAmount = useSelector((state) => state.products.totalAmount);

  const cartToggleHandler = () => {
    cartItems.length !== 0 && setCartContent("checkout-content");
  };
  const backBtnHandler = () => {
    setCartContent("cart-items");
  };
  const backDropHandler = () => {
    // props.toggleCart();
    dispatch(showCartActions.toggleCart())
  };
  const removeFromCartHandler = (e, indx) => {
    dispatch(prodcutActions.removeFromCart(indx));
    setTotalPrice(cartTotalAmount);
    setCurrentQuantity(Number(e.target.value));
  };

  const quantityChangeHandler = (e, item) => {
    const item_index_in_cart = cartItems.findIndex((i) => i.id === item.id);
    e.target.value.trim() === ""
      ? dispatch(
          prodcutActions.editAmount({
            productId: item_index_in_cart,
            quantity: 0,
          })
        )
      : dispatch(
          prodcutActions.editAmount({
            productId: item_index_in_cart,
            quantity: Number(e.target.value),
          })
        );
    setCurrentQuantity(Number(e.target.value));
  };

  // For calculating the total amount at every change in the cart
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.product_price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [currentQuantity, cartItems]);
  return (
    <>
      <div className={style["back-drop"]} onClick={backDropHandler}></div>
      <div className={style.cart}>
        <div className={style["cart-items"]}>
          {cartContent === "cart-items" && (
            <h2 className={style.cartTitle}>Shopping Cart</h2>
          )}

          {cartContent === "cart-items" &&
            cartItems?.map((item, indx) => {
              return (
                <CartItem
                key={indx}
                  indx={indx}
                  item={item}
                  removeFromCartHandler={removeFromCartHandler}
                  quantityChangeHandler={quantityChangeHandler}
                ></CartItem>
              );
            })}
        </div>
        {cartItems.length === 0 && (
          <p className={style["empty-cart"]}>Cart is Empty!</p>
        )}

        {/* ///////////////////////Total Amount Section////////////////////////////// */}
        {cartContent === "checkout-content" && <CardDetails />}
        {/* ///////////////////////////////////////////////////////////////// */}

        <div className={style["control-btns"]}>
          {cartContent === "cart-items" && (
            <p>
              Total Amount : <span> {totalPrice}$</span>
            </p>
          )}
          {cartContent === "cart-items" ? (
            <>
              <button
                className={style["checkoutBtn"]}
                onClick={() => {
                  cartToggleHandler();
                }}
              >
                Checkout <i className="bx bxs-chevron-right"></i>
              </button>
            </>
          ) : (
            <>
              <button
                className={style["checkoutBtn"]}
                onClick={
                  backBtnHandler
                }
              >
                <i className="bx bxs-chevron-left"></i> Back
              </button>
              <button
                className={style["checkoutBtn"]}
                onClick={() => {
                  dispatch(showCartActions.toggleCart());
                  dispatch(prodcutActions.clearCart());
                }}
              >
                Complete
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
