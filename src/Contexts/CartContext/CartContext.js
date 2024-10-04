import React from "react";

const cartCtx = React.createContext({
    cartItems: [],
    totalAmount: 0,
    addProduct: () => {},
    removeFromCart: () => {},
    editAmount: () => {},
    clearCart: () => {},
})

export default cartCtx;