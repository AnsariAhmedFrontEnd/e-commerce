import { Container, Row, Col, Card } from "react-bootstrap";
import AddtoCartButton from "../Cart/AddToCartButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const albumProductArray = [
  {
    id: "5",
    title: "T-shirt",
    price: "49",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
    quantity: 1,
  },
  {
    id: "6",
    title: "Coffe Cup",
    price: "14.99",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
    quantity: 1,
  },
];
const MerchProdcuts = (props) => {
  const cartCtx = useContext(CartContext);
  const productList = albumProductArray.map((product) => {
    const itemInCart = cartCtx.items.find((item) => item.id === product.id);
    return (
      <Col
        key={product.id}
        className="col-6 d-flex justify-content-center align-items-center mt-4 border-none"
      >
        <Card className="d-flex justify-content-center w-50 border-light">
          <h3 className="pb-4">{product.title}</h3>
          <Link to={`/store/${product.id}`}>
          <img src={product.imageUrl} alt={product.title} style={{width:'90%'}} />
          </Link>
          <div className="d-flex justify-content-between align-items-center m-2 pt-2 pb-2">
            <p className="text-right mt-2">${product.price}</p>
            <AddtoCartButton item={product} isInCart={itemInCart !== undefined} />
          </div>
        </Card>
      </Col>
    );
  });
  return (
      
      <Container className="mx-auto">
        <h2 className="text-center">Merch</h2>
        <Row className="text-center">{productList}</Row>
      </Container>
  );
};

export default MerchProdcuts;
