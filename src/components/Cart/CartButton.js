import { useContext } from "react";
import "./Cart.css";
import CartContext from '../../store/cart-context';
const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.length;
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
