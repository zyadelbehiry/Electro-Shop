import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productSlice";
import authSlice from "./authSlice";
import showCartSlice from "./showCartSlice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    auth: authSlice.reducer,
    showCart: showCartSlice.reducer,
  },
});
export default store;
