import MerchProdcuts from "../Products/MerchProducts";
import Products from "../Products/Products";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
const Store = (props) => {
  return (
    <Container className="m-4">
      <Card className="d-flex justify-content-center align-items-center mx-4 border-light">
        <Products />
        <MerchProdcuts />
        <Row className="text-center mb-4">
          <Col>
            <Button variant="dark">See the Cart</Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Store;
