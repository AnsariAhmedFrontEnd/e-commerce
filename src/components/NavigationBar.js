import { Fragment, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import CartButton from "../components/CartButton";
import Cart from "../components/Cart";
import { NavLink} from "react-router-dom";

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
            <NavLink to="/home" className="mx-5 text-decoration-none fs-5 link">
                Home
            </NavLink>
            <NavLink to="/"  className="mx-5 text-decoration-none fs-5 link">
              Store
            </NavLink>
            <NavLink to="/about" className="mx-5 text-decoration-none fs-5 link">
              About
            </NavLink>
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
