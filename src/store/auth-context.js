import React from "react";

const AuthContext = React.createContext({
    token:'',
    isLoggedIn:false,
    email:'',
    login:(token) => {},
    logout:() => {}
});

export default AuthContext;