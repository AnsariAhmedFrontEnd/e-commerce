import NavigationBar from './NavigationBar';
import Footer from "./Footer";
import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
