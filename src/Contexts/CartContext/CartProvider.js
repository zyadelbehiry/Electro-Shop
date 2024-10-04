import React, { useReducer} from "react";
import CartCtx from "./CartContext";
const initialCart = {
  cartItems: [],
  totalAmount: 0,
};
const cartHandler = (prev, action) => {
  if (action.type === "ADD_PRODUCT") {
    const existingProductIndex = prev.cartItems.findIndex(
      (item) => item.id === action.product.id
    );
    const updatedAmount = prev.totalAmount + action.product.product_price;
    if (existingProductIndex !== -1) {
      prev.cartItems[existingProductIndex].quantity += 0.5; // this because the component is rendered 2 times in each press so it will be increased by 1
      return { totalAmount: updatedAmount, cartItems: prev.cartItems };
    } else {
      action.product["quantity"] = 1;
      const updatedAmount = prev.totalAmount + action.product.product_price;

      return {
        totalAmount: updatedAmount,
        cartItems: [...prev.cartItems, action.product],
      };
    }
  } else if (action.type === "REMOVE_FROM_CART") {
    // Recalculate total price
    const updatedAmount = prev.totalAmount - prev.cartItems[action.productId].product_price*prev.cartItems[action.productId].quantity
    return {
      cartItems: prev.cartItems.filter(
        (item, index) => index !== action.productId
      ),
      totalAmount: updatedAmount,
    };
  } else if (action.type === "EDIT_AMOUNT") {
    const updatedTotalAmount = prev.cartItems.reduce(
      (sum, item) => sum + item.product_price * item.quantity,
      0
    );
    prev.totalAmount = updatedTotalAmount;
    const updatedCart = {
      cartItems: prev.cartItems.map((item) =>
        item.id === prev.cartItems[action.productId].id
          ? { ...item, quantity: action.quantity }
          : item
      ),
      totalAmount: prev.totalAmount,
    };
    return updatedCart;
  } else if (action.type === "CLEAR_CART") {
    return {
      cartItems: [],
      totalAmount: 0,
    };
  }
};
const CartProvider = (props) => {
  const [productsCart, dispatchProductsCart] = useReducer(
    cartHandler,
    initialCart
  );
  const cart = {
    cartItems: productsCart.cartItems,
    totalAmount: productsCart.totalAmount,
    addProduct: (product) =>
      dispatchProductsCart({ type: "ADD_PRODUCT", product }),
    removeFromCart: (productId) =>
      dispatchProductsCart({ type: "REMOVE_FROM_CART", productId }),
    editAmount: (productId, quantity) =>
      dispatchProductsCart({ type: "EDIT_AMOUNT", productId, quantity }),
    clearCart: () => dispatchProductsCart({ type: "CLEAR_CART" }),
  };
  return <CartCtx.Provider value={cart}>{props.children}</CartCtx.Provider>;
};

export default CartProvider;
