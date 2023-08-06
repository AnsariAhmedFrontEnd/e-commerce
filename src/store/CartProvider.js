import CartContext from "./cart-context";
import React, { useState } from "react";

const CartProvider = (props) => {
  const [cartArray, setCartArray] = useState([]);

  const addToCartHandler = (item) => {
    const existingItemIndex = cartArray.findIndex(
      (productitem) => productitem.id === item.id
    );

    if (existingItemIndex === -1) {
      setCartArray((previousItems) => [...previousItems, item]);
    } else {
      const updatedCartArray = [...cartArray];
      updatedCartArray[existingItemIndex].quantity += 1;
      setCartArray(updatedCartArray);
    }
  };


  const removeItemHandler = (id) => {
    const updatedCartArray = cartArray.filter((item => item.id !== id));
    setCartArray(updatedCartArray);
  };

  const cartContext = {
    items: cartArray,
    addItems: addToCartHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
