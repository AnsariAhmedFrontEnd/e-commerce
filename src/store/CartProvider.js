import CartContext from "./cart-context";
import React, { useState, useContext, useEffect, useCallback } from "react";
import AuthContext from "./auth-context";

const CartProvider = (props) => {
  const [cartArray, setCartArray] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const authCtx = useContext(AuthContext);
  const url = "https://e-commerce-93448-default-rtdb.firebaseio.com/";
  console.log(cartArray)

  //Cart Visibility Function

  const toggleCartVisibility = () => {
    setCartVisible((prevStat) => !prevStat);
  };

  //Helper function for GET request..

  const fetchData = useCallback(async () => {
    const userEmail = authCtx.email;
    const cleanedEmail = userEmail.replace(/[.@]/g, "");

    const response = await fetch(`${url}/${cleanedEmail}.json`);

    const data = await response.json();
    setCartArray((prevCartArray) => [...prevCartArray, data]);
  }, [authCtx.email]);

  //Add to Cart Function

  const addToCartHandler = async (item) => {
    const userEmail = authCtx.email;
    const cleanedEmail = userEmail.replace(/[.@]/g, "");

    try {
      await fetch(`${url}/${cleanedEmail}.json`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });

      fetchData(() => {});
    } catch (error) {
      console.log("Error adding item to cart", error);
    }
  };

  const removeItemHandler = async (id) => {
    const userEmail = authCtx.email;
    const cleanedEmail = userEmail.replace(/[.@]/g, "");
    try {
      await fetch(`${url}/${cleanedEmail}/${id}`, {
        method: "DELETE",
      });

      await fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [authCtx.email, fetchData]);

  const cartContext = {
    items: cartArray,
    addItems: addToCartHandler,
    removeItem: removeItemHandler,
    cartVisibility: cartVisible,
    toggleCartVisibility: toggleCartVisibility,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
