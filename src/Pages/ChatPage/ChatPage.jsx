import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const ChatPage = () => {
  return (
    <Container fluid>
      <Row style={{ marginTop: '2rem' }}>
        <Col>
          <h2>Chat with ....</h2>
        </Col>
      </Row>
      <Row style={{ marginTop: '2rem' }}>
        <div style={{ width: '10%' }}></div>
        <Col
          style={{
            backgroundColor: 'pink',
            height: '60vh',
            border: '1px solid black'
          }}
        >
          Chat Box
        </Col>
        <div style={{ width: '10%' }}></div>
      </Row>
      <Row>
        <div style={{ width: '10%' }}></div>
        <Col style={{ padding: '0' }}>
          <div style={{ display: 'flex' }}>
            <Button color="success">Upload A File</Button>
            <input
              style={{ width: '100%' }}
              type="text"
              placeholder="type a message here"
            />
            <Button color="success">Send Message</Button>
          </div>
        </Col>
        <div style={{ width: '10%' }}></div>
      </Row>
    </Container>
  );
};

export default ChatPage;
