'use client';

import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Facebook, Twitter, Pinterest, Instagram, House, Search, PersonFill, Cart } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container className="d-flex justify-content-between">
      <Nav>
        <Nav.Link><Facebook /></Nav.Link>
        <Nav.Link><Twitter /></Nav.Link>
        <Nav.Link><Pinterest /></Nav.Link>
        <Nav.Link><Instagram /></Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link><House /></Nav.Link>
        <Nav.Link><Search /></Nav.Link>
        <Nav.Link><PersonFill /></Nav.Link>
        <NavDropdown title={<Cart />}>
          <NavDropdown.ItemText>Your cart is empty</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

export default TopMenu;
