import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import ImageOverlay from '../../Components/ImageOverlay/ImageOverlay';

const Dashboard = () => {
  return (
    <Container>
      <Row style={{ marginTop: '3rem' }}>
        <Col>
          <h2>Profile Username</h2>
          <ImageOverlay />
        </Col>
      </Row>
      <Row style={{ marginTop: '2rem' }}>
        <Col>
          <h5>Gender: Male</h5>
        </Col>
        <Col>
          <h5>Age: 28</h5>
        </Col>
      </Row>
      <Row style={{ marginTop: '2rem' }}>
        <Col>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            perspiciatis accusamus, voluptate officia doloribus facere beatae
            fuga nam unde impedit, incidunt similique facilis dolores eveniet,
            praesentium saepe eligendi distinctio perferendis repellendus ad.
            Necessitatibus, tenetur. Ipsum, nostrum culpa. Delectus nemo quos
            nesciunt quis quisquam, doloremque id reiciendis itaque blanditiis
            nam beatae exercitationem, error saepe? Soluta iste illo voluptas
            odit molestiae corporis accusantium, alias tenetur tempora quasi
            voluptatum enim expedita? Id quasi esse fugit inventore a ipsum cum
            officia voluptatibus tempora, quae dicta omnis asperiores
            repudiandae soluta temporibus doloremque dolorum quos? Odio
            reiciendis possimus officia perferendis ex explicabo facere vel esse
            facilis?
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color="success">Start a Chat With Profile</Button>
        </Col>
        <Col>
          <Button color="success"> Go Back</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
