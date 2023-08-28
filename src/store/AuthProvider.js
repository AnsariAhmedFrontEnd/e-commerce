import { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const initialEmail = localStorage.getItem('email')
    const [token, setToken] = useState(initialToken);
    const [email, setEmail] = useState(initialEmail);

    const isLoggedIn = !!token;

    const loginHandler = (token, email) => {
        setToken(token);
        localStorage.setItem('token', token);
        setEmail(email);
        localStorage.setItem('email', email);

    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    };

    const authValue = {
        token:token,
        isLoggedIn:isLoggedIn,
        email:email,
        login:loginHandler,
        logout: logoutHandler
    };
  return <AuthContext.Provider value={authValue}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
