import React from "react";

const CartContext = React.createContext({
    items:[],
    addItems: (item) => {},
    removeItem : (id) => {},
    cartVisibility: false,
    toggleCartVisibility: () => {}
});

export default CartContext;