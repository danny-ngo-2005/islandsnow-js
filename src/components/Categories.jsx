import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Categories = () => (
  <Row className="justify-content-center p-3">
    {['MEN', 'WOMEN', 'KIDS', 'BRANDS', 'SEARCH'].map((category) => (
      <Col key={category} xs={1} className="text-center">
        <strong>{category}</strong>
      </Col>
    ))}
  </Row>
);

export default Categories;
