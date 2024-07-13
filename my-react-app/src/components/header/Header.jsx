import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <Navbar bg="light" expand="lg" className="header">
    <Navbar.Brand href="/">LearnPlatform</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/courses">Courses</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Button variant="primary" className="ml-2">
          <Link to= "/login">
          Login
          </Link>
        </Button>
        <Button variant="outline-primary" className="ml-2">
        <Link to= "/register">
          Sign up
          </Link>
        </Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
