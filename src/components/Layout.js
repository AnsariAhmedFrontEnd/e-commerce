import CartProvider from '../store/CartProvider';
import NavigationBar from "./NavigationBar";
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <CartProvider>
            <NavigationBar />
            <main>{children}</main>
            <Footer />
        </CartProvider>
    )
};

export default Layout;