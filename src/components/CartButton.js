import { useContext } from "react";
import "./Cart.css";
import CartContext from "../store/cart-context";
const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce(
    (accumulator, currentItems) => {
      return accumulator + currentItems.quantity;
    },
    0
  );
  return (
    <div className="cart">
      <span>
        <button onClick={props.onCartButtonClick}>Cart</button>
      </span>
      <span className="badge">{numberOfCartItems}</span>
    </div>
  );
};

export default CartButton;
