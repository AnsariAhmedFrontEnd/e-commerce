import { Fragment } from "react";
import { Row, Col, Button, Container, Card } from "react-bootstrap";

const Home = (props) => {
  const musicProducts = [
    { date: "JUL16", place: "DETROIT, MI", title: "DTE ENERGY MUSIC THEATRE" },
    { date: "JUL19", place: "TORONTO,ON", title: "BUDWEISER STAGE" },
    { date: "JUL22", place: "BRISTOW, VA", title: "JIGGY LUBE LIVE" },
    { date: "JUL29", place: "PHOENIX, AZ", title: "AK-CHIN PAVILION" },
    { date: "AUG02", place: "LAS VEGAS, NV", title: "T-MOBILE ARENA" },
    { date: "AUG07", place: "CONCORD, CA", title: "CONCORD PAVILION" },
  ];

  const musicList = musicProducts.map((musicItem) => {
    return (
      <Row key={musicItem.title} className="align-items-center justify-content-between mb-2 border-bottom border-dark">
        <Col className="col-2">{musicItem.date}</Col>
        <Col className="col-2">{musicItem.place}</Col>
        <Col className="col-4">{musicItem.title}</Col>
        <Col className="col-4 d-flex justify-content-end align-items-center">
          <Button variant="info" className="mb-2 fw-bold color-white" style={{color:'white'}}>BUY TICKETS</Button>
        </Col>
      </Row>
    );
  });

  return (
    <Fragment>
      <div className="text-center">
        <h1>Tours</h1>
      </div>
      <Container className="d-flex justify-content-center align-items-center mb-4">
        <Card className="w-75 p-4 border-0">{musicList}</Card>
      </Container>
    </Fragment>
  );
};

export default Home;
