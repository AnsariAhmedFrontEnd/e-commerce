import { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken);

    const isLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token)
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token')
    };

    const authValue = {
        token:token,
        isLoggedIn:isLoggedIn,
        login:loginHandler,
        logout: logoutHandler
    };
  return <AuthContext.Provider value={authValue}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
