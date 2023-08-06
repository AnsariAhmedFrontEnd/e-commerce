import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/pages/AboutUs";
import Store from "./components/pages/Store";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<Store />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
