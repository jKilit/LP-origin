import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./header.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const usernameUpper = currentUser
    ? currentUser.username[0].toUpperCase() + currentUser.username.slice(1)
    : "";

  return (
    <Navbar bg="light" expand="lg" className="header">
      <Navbar.Brand href="/">LearnPlatform</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="links">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/courses">Courses</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          {currentUser ? (
            <p className="welcome-text">Welcome, {usernameUpper}</p>
          ) : (
            <>
              <Button variant="primary" className="btn">
                <Link
                  to="/login"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Login
                </Link>
              </Button>
              <Button variant="outline-primary" className="btn">
                <Link
                  to="/register"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Sign up
                </Link>
              </Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
