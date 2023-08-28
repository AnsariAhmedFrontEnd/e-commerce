import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/pages/AboutUs";
import Store from "./components/pages/Store";
import Layout from './components/Layout/Layout';
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";
import ProductDetails from "./components/pages/ProductDetails";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import AuthContext from "./store/auth-context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const App = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Store /> : <Navigate to="/login" />}
        />
        <Route
          path="/store"
          element={isLoggedIn ? <Store /> : <Navigate to="/login" />}
        />
        <Route path="login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />

        {isLoggedIn && <Route path="/store" element={<Store />} />}
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="store/:productId"
          element={isLoggedIn ? <ProductDetails /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
