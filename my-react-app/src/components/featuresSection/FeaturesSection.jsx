import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./featuresSection.scss";

const FeaturesSection = () => (
  <Container className="features-section" id="features">
    <h2 className="text-center mb-4">Features</h2>
    <Row>
      <Col md={4} className="text-center">
        <i className="fas fa-chalkboard-teacher fa-3x mb-3"></i>
        <h4>Expert Instructors</h4>
        <p>Learn from industry experts with years of experience.</p>
      </Col>
      <Col md={4} className="text-center">
        <i className="fas fa-video fa-3x mb-3"></i>
        <h4>High-Quality Content</h4>
        <p>Access high-quality video lectures and interactive content.</p>
      </Col>
      <Col md={4} className="text-center">
        <i className="fas fa-certificate fa-3x mb-3"></i>
        <h4>Certification</h4>
        <p>Earn certificates to showcase your skills and accomplishments.</p>
      </Col>
    </Row>
  </Container>
);

export default FeaturesSection;
