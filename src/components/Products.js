import { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const albumProductArray = [
  {
    title: "Album 1",
    price: "$12.99",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Album 2",
    price: "$14.99",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Album 3",
    price: "$16.99",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Album 4",
    price: "$9.99",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Products = (props) => {
  const productList = albumProductArray.map((product) => {
    return (
      <Col className="col-6 d-flex justify-content-between align-items-center">
        <div className="mt-4">
          <h3>{product.title}</h3>
          <div className="p-4">
            <img
              src={product.imageUrl}
              width="200px"
              height="200px"
              alt={product.title}
            />
          </div>
          <div className="d-flex justify-content-between m-3">
            <p className="text-right">{product.price}</p>
            <Button className="text-left btn-sm">Add to Cart</Button>
          </div>
        </div>
      </Col>
    );
  });
  return (
    <Fragment>
        <h2 className="text-center">Music</h2>
      <Container className="mx-auto">
        <Row className="text-center">{productList}</Row>
      </Container>
  
    </Fragment>
  );
};

export default Products;
