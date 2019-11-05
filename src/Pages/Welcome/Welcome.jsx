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
        <Col lg={6} md={5} sm={12} xs={12} style={{ marginRight: "3rem" }}>
          <h1>Welcome To RChat</h1>
          <ImageOverlay />
        </Col>
        <Col lg={5} md={5} sm={12} xs={12}>
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
