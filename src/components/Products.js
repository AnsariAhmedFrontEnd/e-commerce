import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddtoCartButton from "./AddToCartButton";

const albumProductArray = [
  {
    id: "1",
    title: "Album 1",
    price: "12.99",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity:1
  },
  {
    id: "2",
    title: "Album 2",
    price: "14.99",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity:1
  },
  {
    id: "3",
    title: "Album 3",
    price: "16.99",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity:1
  },
  {
    id: "4",
    title: "Album 4",
    price: "9.99",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity:1
  },
];
const Products = (props) => {
  const productList = albumProductArray.map((product) => {
    return (
      <Col key={product.id} className="col-6 d-flex justify-content-between align-items-center">
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
            <p className="text-right">${product.price}</p>
            <AddtoCartButton item={product} />
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
