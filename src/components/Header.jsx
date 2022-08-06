import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">
            <Nav.Item>Home</Nav.Item>
          </Link>
          <Link to="/add">
            <Nav.Item>Add Contact</Nav.Item>
          </Link>
          <Link to="/contact">
            <Nav.Item>Contact</Nav.Item>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
