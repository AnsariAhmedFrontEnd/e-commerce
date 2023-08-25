import React, { useContext, useRef, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      if (isLogin) {
        
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDOC77pwg681wWtDQ6I0DXfS_ohIJXnEp8",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
            if(response.ok) {
              const data = await response.json();
        authCtx.login(data.idToken);
        navigate("/store");
            }else{
              const data = await response.json();
              alert(data.error.message)
            }
        
      } else {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOC77pwg681wWtDQ6I0DXfS_ohIJXnEp8",
          {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if(response.ok) {
          const data = await response.json();
    authCtx.login(data.idToken);
    navigate("/store");
        }else{
          const data = await response.json();
          alert(data.error.message)
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex justify-content-center mb-4">
      <Card className="mt-3 w-50">
        <Form onSubmit={submitHandler}>
          <Card.Header className="mb-4 text-center">
            <h2>Login</h2>
          </Card.Header>
          <Card.Body>
            <Form.Control
              ref={emailInputRef}
              type="email"
              placeholder="Enter email"
              className="m-auto mb-4"
            />

            <Form.Control
              ref={passwordInputRef}
              type="password"
              placeholder="Password"
              className="m-auto mb-4"
            />

            <Form.Check type="checkbox" label="Remember me" />
          </Card.Body>
          <div className="d-flex justify-content-center">
            <Button variant="dark" type="submit" className="m-auto">
              {isLogin ? "Login" : "Create Account"}
            </Button>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <p type="button" onClick={switchAuthModeHandler}>
              {isLogin ? "Create new account" : "Login with existing account"}
            </p>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
