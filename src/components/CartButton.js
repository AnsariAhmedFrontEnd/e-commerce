import './Cart.css';
const CartButton = (props) => {
    return (
        <div className="cart">
            <span><button onClick={props.onCartButtonClick}>Cart</button></span>
            <span className='badge'>0</span>
        </div>
    )
};


export default CartButton;