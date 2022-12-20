import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <input type="text" placeholder="Search" />
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/product-details">Products</Link>
            <Link to="/cart">Cart</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
