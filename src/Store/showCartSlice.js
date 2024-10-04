import { createSlice } from "@reduxjs/toolkit";

const showCartSlice = createSlice({
    name: "showCart",
    initialState: {cartIsVisible:false},
    reducers: {
      toggleCart: (state) => {
        return {cartIsVisible:!state.cartIsVisible};
      }
    }
  
})


export const showCartActions = showCartSlice.actions;
export default showCartSlice;