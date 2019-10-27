import React from "react";
import Carousel from "../../Components/WelcomePageCarousel/Carosul";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";

const Welcome = () => {
  return (
    <Container>
      <Row style={{ marginTop: "2rem" }}>
        <Col xs="auto">
          <Jumbotron>
            <h1 className="display-3">Welcome to RChat</h1>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-2" />
            <Button size="lg" style={{ marginRight: "2rem" }} color="success">
              Login
            </Button>
            <Button size="lg" style={{ marginLeft: "2rem" }} color="success">
              Sign Up
            </Button>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Featured Users</h1>
          <Carousel />
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
