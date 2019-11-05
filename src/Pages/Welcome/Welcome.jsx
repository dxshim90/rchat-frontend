import React from "react";
import Carousel from "../../Components/WelcomePageCarousel/Carosul";
import { Jumbotron, Button, Container, Row, Col } from "reactstrap";

// components
import SignUpForm from "../../Components/SIgnUpForm/SignUpForm";
import VideoBackground from "../../Components/VideoBackground/VideoBackground";
import ImageOverlay from "../../Components/ImageOverlay/ImageOverlay";

const Welcome = () => {
  return (
    <Container>
      <VideoBackground />
      <Row style={{ marginTop: "2rem" }}>
        <Col style={{ marginRight: "3rem" }}>
          <ImageOverlay />
        </Col>
        <Col>
          <SignUpForm />
        </Col>
      </Row>
      <Row style={{ marginTop: "2rem" }}>
        <Col>
          <h1>Featured Users</h1>
          <Carousel />
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
