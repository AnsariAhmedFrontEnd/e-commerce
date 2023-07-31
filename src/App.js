import { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import  Nav  from 'react-bootstrap/Nav';
import  Container  from 'react-bootstrap/Container';
import Cart from './components/Cart';
import MerchProdcuts from './components/MerchProducts';
import './App.css'
import Products from './components/Products';
import Button  from 'react-bootstrap/Button';
const App = () => {
  return (
    <Fragment>
       <Navbar bg="dark" data-bs-theme="dark">
       <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#home" className='mx-5'>Home</Nav.Link>
            <Nav.Link href="#store" className='mx-5'>Store</Nav.Link>
            <Nav.Link href="#about" className='mx-5'>About</Nav.Link>
          </Nav>
          <Cart />
        </Container>
       </Navbar>
       <div className='heading'>The Generics</div>
       <main>
        <section id="album">
          <Products />
        </section>
        <section id='merch'>
          <MerchProdcuts />
        </section>
        <div className='text-center mb-4'>
        <Button>See the Cart</Button>
        </div>
       </main>
       <footer>
        <div className='d-flex justify-content-between p-4 w-100' style={{backgroundColor:'cyan'}}>
        <div>
          <h2>The Generics</h2>
        </div>
        <div className='d-flex' style={{listStyle:'none'}}>
          <li className='mx-4'>Youttube</li>
          <li className='mx-4'>Youttube</li>
          <li className='mx-4'>Youttube</li>
        </div>
        </div>
       </footer>
    </Fragment>
  );
}

export default App;
