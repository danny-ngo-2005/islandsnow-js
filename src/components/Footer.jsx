import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer>
    <Container>
      <Row className="p-3">
        <Col>
          <strong>NAVIGATION</strong>
          <hr />
          <div>About us</div>
          <div>Employment</div>
          <div>Videos</div>
        </Col>
        <Col>
          <strong>MAIN MENU</strong>
          <hr />
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </Col>
        <Col>
          <strong>CONNECT</strong>
          <hr />
          <div>Sign up for the latest update</div>
          <input type="text" placeholder="Enter Email Address" className="form-control my-2" />
          <div className="btn btn-dark">Join</div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
