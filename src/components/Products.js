import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddtoCartButton from "./AddToCartButton";

const albumProductArray = [
  {
    id: "1",
    title: "Album 1",
    price: "12.99",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },
  {
    id: "2",
    title: "Album 2",
    price: "14.99",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },
  {
    id: "3",
    title: "Album 3",
    price: "16.99",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: "4",
    title: "Album 4",
    price: "9.99",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];
const Products = (props) => {
  const productList = albumProductArray.map((product) => {
    return (
      <Col
        key={product.id}
        className="col-6 d-flex justify-content-center align-items-center mt-4 border-none"
      >
        <Card className="d-flex justify-content-center w-50 border-light">
          <h3 className="pb-4">{product.title}</h3>
          <Link to={`/products/${product.id}`}>
            <img src={product.imageUrl} alt={product.title} style={{width:'90%'}} />
          </Link>
          <div className="d-flex justify-content-between align-items-center m-2 pt-2 pb-2">
            <p className="text-right mt-2">${product.price}</p>
            <AddtoCartButton item={product} />
          </div>
        </Card>
      </Col>
    );
  });
  return (
    <Container>
      <h2 className="text-center">Music</h2>
      <ul>
        <Row className="text-center">{productList}</Row>
      </ul>
    </Container>
  );
};

export default Products;
