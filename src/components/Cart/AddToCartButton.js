import Button from "react-bootstrap/Button";
import CartContext from "../../store/cart-context";
import React, { useContext, useState } from "react";

const AddtoCartButton = (props) => {
  const [veiwCart, setVeiwCart] = useState(false);
  const cartCtx = useContext(CartContext);

  const addToCartHandler = async () => {
    cartCtx.addItems(props.item);
    setVeiwCart(true);

    if(veiwCart && !cartCtx.cartVisibility) {
      cartCtx.toggleCartVisibility();
    }

  };

  return (
    <Button className="text-left btn-sm" onClick={addToCartHandler}>
      {props.isInCart || veiwCart ? "View Cart" : "Add To Cart"}
    </Button>
    
  );
};

export default AddtoCartButton;
