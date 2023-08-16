import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/pages/AboutUs";
import Store from "./components/pages/Store";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <Layout>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/" element={<Store />} />
      </Routes>
    </Layout>
  );
};

export default App;
