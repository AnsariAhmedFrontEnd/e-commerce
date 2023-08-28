import { Fragment, useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import CartButton from "../Cart/CartButton";
import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import CartContext from "../../store/cart-context";

const NavigationBar = (props) => {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();


  const showCartHandler =  () => {
cartCtx.toggleCartVisibility();
  };

  const closeCartHandler = () => {
    cartCtx.toggleCartVisibility();
  };

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/login");
  };

  return (
    <Fragment>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="mx-auto">
            <NavLink to="/home" className="mx-5 text-decoration-none fs-5 link">
              Home
            </NavLink>
            {authCtx.isLoggedIn && (
              <NavLink
                to="/store"
                className="mx-5 text-decoration-none fs-5 link"
              >
                Store
              </NavLink>
            )}
            <NavLink
              to="/about"
              className="mx-5 text-decoration-none fs-5 link"
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="mx-5 text-decoration-none fs-5 link"
            >
              Contact Us
            </NavLink>
            {!authCtx.isLoggedIn && (
              <NavLink
                to="/login"
                className="mx-5 text-decoration-none fs-5 link"
              >
                Login
              </NavLink>
            )}
            {authCtx.isLoggedIn && (
              <Button variant="dark" onClick={logoutHandler}>
                Logout
              </Button>
            )}
          </Nav>
          {authCtx.isLoggedIn && (
            <CartButton onCartButtonClick={showCartHandler} />
          )}
        </Container>
      </Navbar>
      <div className="heading">The Generics</div>
      {cartCtx.cartVisibility && <Cart onClose={closeCartHandler} />}
    </Fragment>
  );
};

export default NavigationBar;
