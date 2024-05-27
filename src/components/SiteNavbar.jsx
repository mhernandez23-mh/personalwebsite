import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SiteNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto"> {/* Align nav items to the right */}
          <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
          <Nav.Link as={Link} to="/about-me" className="nav-link">About Me</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link">Contact</Nav.Link>
          <Nav.Link as={Link} to="/projects" className="nav-link">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SiteNavbar;
