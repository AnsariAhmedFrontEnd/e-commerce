import { Fragment } from "react";
import MerchProdcuts from "../MerchProducts";
import Products from "../Products";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
const Store = (props) => {
  return (
    <Fragment>
      <Container className="m-4">
        <Card className="d-flex justify-content-center align-items-center">
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="d-flex justify-content-center align-items-center">
              <Products />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col>
              <MerchProdcuts />
            </Col>
          </Row>
          <Row className="text-center mb-4">
            <Col>
              <Button>See the Cart</Button>
            </Col>
          </Row>
        </Card>
      </Container>
    </Fragment>
  );
};

export default Store;
