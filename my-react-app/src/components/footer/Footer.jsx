import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.scss";

const Footer = () => (
  <footer className="footer bg-light py-4">
    <Container>
      <Row>
        <Col md={4}>
          <h5>About Us</h5>
          <p>
            LearnPlatform is committed to providing high-quality online
            education to help you achieve your goals.
          </p>
        </Col>
        <Col md={4}>
          <h5>Contact</h5>
          <p>Email: support@learnplatform.com</p>
          <p>Phone: (123) 456-7890</p>
        </Col>
        <Col md={4}>
          <h5>Follow Us</h5>
          <p>
            <a href="#">Facebook</a> | <a href="#">Twitter</a> |{" "}
            <a href="#">LinkedIn</a>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
