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
  console.log("currentUser in Header:", currentUser);
  return (
    <div>
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
                <Button variant="primary" className="ml-2">
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="outline-primary" className="ml-2">
                  <Link to="/register">Sign up</Link>
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
