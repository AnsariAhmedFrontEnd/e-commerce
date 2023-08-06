import { Fragment, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import CartButton from "../components/CartButton";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <Fragment>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/home" className="mx-5 text-decoration-none fs-5">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="mx-5 text-decoration-none fs-5">
              Store
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-5 text-decoration-none fs-5">
              About
            </Nav.Link>
          </Nav>
          <CartButton onCartButtonClick={showCartHandler} />
        </Container>
      </Navbar>
      <div className="heading">The Generics</div>
      {showCart && <Cart onClose={closeCartHandler} />}
    </Fragment>
  );
};

export default NavigationBar;
