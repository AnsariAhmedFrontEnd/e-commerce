import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/pages/AboutUs";
import Store from "./components/pages/Store";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/ContactUs";
import ProductDetails from "./components/pages/ProductDetails";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<Store />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Layout>
  );
};

export default App;
