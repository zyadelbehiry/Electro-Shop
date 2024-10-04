import { createSlice } from "@reduxjs/toolkit";
const productsSlice = createSlice({
    name: "products",
    initialState: { cartItems: [], totalAmount: 0 },
    reducers: {
      addProduct: (prev, product) => {
        const existingProductIndex = prev.cartItems.findIndex(
          (item) => item.id === product.payload.id
        );
  
        const updatedAmount = prev.totalAmount + product.payload.product_price;
        if (existingProductIndex !== -1) {
          // Instead of mutating, create a new cartItems array
          const updatedCartItems = prev.cartItems.map((item, index) => {
            if (index === existingProductIndex) {
              return { ...item, quantity: item.quantity + 1 }; // Increment quantity
            }
            return item; // Return unchanged items
          });
  
          return { totalAmount: updatedAmount, cartItems: updatedCartItems };
        } else {
          const modifiedProduct = { ...product.payload, quantity: 1 };
          // product.payload.quantity = 1;
  
          return {
            totalAmount: updatedAmount,
            cartItems: [...prev.cartItems, modifiedProduct],
          };
        }
      },
      removeFromCart: (prev, productId) => {
        // Recalculate total price
        const updatedAmount =
          prev.totalAmount -
          prev.cartItems[productId.payload].product_price *
            prev.cartItems[productId.payload].quantity;
        return {
          cartItems: prev.cartItems.filter(
            (item, index) => index !== productId.payload
          ),
          totalAmount: updatedAmount,
        };
      },
      editAmount: (prev, payload) => {
        const updatedTotalAmount = prev.cartItems.reduce(
          (sum, item) => sum + item.product_price * item.quantity,
          0
        );
        const updatedCartItems = prev.cartItems.map((item) =>
          item.id === prev.cartItems[payload.payload.productId].id
            ? { ...item, quantity: payload.payload.quantity }
            : item
        );
  
        return { cartItems: updatedCartItems, totalAmount: updatedTotalAmount };
      },
      clearCart: (prev) => {
        return {
          cartItems: [],
          totalAmount: 0,
        };
      },
    },
  });

export const prodcutActions = productsSlice.actions;
export default productsSlice;