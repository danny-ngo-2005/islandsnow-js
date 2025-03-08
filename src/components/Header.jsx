'use client';

import React from 'react';
import { Row, Image, Col } from 'react-bootstrap';

const Header = () => (
  <Row className="justify-content-md-center py-3">
    <Col md="auto">
      <Image
        fluid
        rounded
        src="experience-islandsnow-bootstrap-logo.png"
        alt="foo"
      />
    </Col>
  </Row>
);

export default Header;
