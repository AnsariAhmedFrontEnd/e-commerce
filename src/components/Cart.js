import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const Cart = (props) => {
  const cartItems = [
    {
      title: "Album 1",
      price: "$12.99",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Album 2",
      price: "$42.99",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
  ];

  const cartItemsList = cartItems.map((item) => (
    <Row key={item.title} className="mb-4">
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
        <p className="mb-0 my-2">{item.price}</p>
      </Col>
      <Col className="d-flex align-items-center">
        <p className="mb-0 mx-3 border border-primary border-2 p-1 px-3">1</p>
      </Col>
      <Col>
        <Button variant="danger" block>
          Remove
        </Button>
      </Col>
    </Row>
  ));

  return (
    <Fragment>
      <Container
        className="w-50 border border-danger border-2"
        style={{
          position: "absolute",
          zIndex: 30,
          backgroundColor: "#fff",
          right: 0,
          top: 200,
        }}
      >
        <Button variant="danger" onClick={props.onClose} className="mt-4 align-item-end">
          X
        </Button>
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
        <Row className="align-items-end">
          <h3 className="">Total $00.00</h3>
        </Row>
        <Button
          variant="success"
          className="align-items-center justify-content-center"
        >
          Purchase
        </Button>
      </Container>
    </Fragment>
  );
};

const rootElement = document.getElementById("cart-root");

ReactDOM.createPortal(<Cart />, rootElement);

export default Cart;
