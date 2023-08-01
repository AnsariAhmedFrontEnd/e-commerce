import Button  from "react-bootstrap/Button";
import CartContext from "../store/cart-context";
import React, {useContext} from "react";

const AddtoCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const addToCartHandler = () => {
        cartCtx.addItems(props.item)
      };
    return (
        <Button className="text-left btn-sm" onClick={addToCartHandler}>Add to Cart</Button>

    )
};

export default AddtoCartButton;