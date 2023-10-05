import ReactDOM from "react-dom";
import { useContext } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const Cart = (props) => {

  const cartCtx = useContext(CartContext);

  const removeItemFromCartHandler = (itemId) => {
    console.log(itemId)
    cartCtx.removeItem(itemId);
  };

  
 
  const totalAmount = cartCtx.items.reduce((accumulator, currentItems) => {
    return (
      accumulator + Number(currentItems.quantity) * Number(currentItems.price)
    );
  }, 0);

  const cartItemsList = cartCtx.items.map((item) => (
    <Row key={item._id} className="mb-4">
      <Col className="d-flex flex-row align-items-center">
        <Image
          src={item.imageUrl}
          alt={item.title}
          thumbnail
          style={{ borderRadius: "6px" }}
          width="50px"
          height="50px"
        />
        <h5 className="mt-2 text-center">{item.title}</h5>
      </Col>
      <Col>
        <p className="mb-0 my-2">${item.price}</p>
      </Col>
      <Col className="d-flex align-items-center">
        <p className="mb-0 mx-3 border border-primary border-2 p-1 px-3">
          {item.quantity}
        </p>
      </Col>
      <Col>
        <Button
          onClick={() => removeItemFromCartHandler(item._id)}
          variant="danger"
          className="btn-block"
        >
          Remove
        </Button>
      </Col>
    </Row>
  ));

  return (
    <Container
      className="border border-danger border-2 me-4"
      style={{
        position: "absolute",
        zIndex: 30,
        backgroundColor: "#fff",
        right: 0,
        top: 200,
        width: "45%",
      }}
    >
      <Row className="align-items-center">
        <Col className="d-flex justify-content-end">
          <Button variant="danger" onClick={props.onClose} className="mt-2">
            X
          </Button>
        </Col>
      </Row>
      <h2 className="text-center">Cart</h2>
      <Row className="font-weight-bold">
        <Col xs={12} md={3}>
          <h4>Item</h4>
        </Col>
        <Col xs={12} md={3}>
          <h4>Price</h4>
        </Col>
        <Col xs={12} md={3}>
          <h4> Quantity</h4>
        </Col>
      </Row>
      {cartItemsList}
      <Row className="align-items-center mt-4">
        <Col className="d-flex justify-content-end">
          <h3 className="">Total ${totalAmount.toFixed(2)}</h3>
        </Col>
      </Row>
      <Button
        variant="success"
        className="align-items-center justify-content-center mb-4 mt-4"
      >
        Purchase
      </Button>
    </Container>
  );
};

const rootElement = document.getElementById("cart-root");

ReactDOM.createPortal(<Cart />, rootElement);

export default Cart;
