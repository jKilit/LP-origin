import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./TestimonialsSection.scss";

const TestimonialsSection = () => (
  <Container className="testimonials-section" id="testimonials">
    <h2 className="text-center mb-4">What Our Students Say</h2>
    <Row>
      <Col md={4}>
        <Card className="testimonial-card">
          <Card.Body>
            <Card.Text>
              "This platform has transformed the way I learn. The courses are
              well-structured and the instructors are amazing!"
            </Card.Text>
            <Card.Footer>
              <small className="text-muted">- Jane Doe</small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="testimonial-card">
          <Card.Body>
            <Card.Text>
              "I love the flexibility and the quality of the content. Highly
              recommend to anyone looking to upskill."
            </Card.Text>
            <Card.Footer>
              <small className="text-muted">- John Smith</small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="testimonial-card">
          <Card.Body>
            <Card.Text>
              "The certification has helped me land a new job. Great platform
              with great resources."
            </Card.Text>
            <Card.Footer>
              <small className="text-muted">- Emily Johnson</small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default TestimonialsSection;
