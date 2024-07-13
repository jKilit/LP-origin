import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./courseSection.scss";

const CoursesSection = () => (
  <Container className="courses-section" id="courses">
    <h2 className="text-center mb-4">Popular Courses</h2>
    <Row>
      <Col md={4}>
        <Card className="course-card">
          <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
          <Card.Body>
            <Card.Title>Course Title 1</Card.Title>
            <Card.Text>Learn the basics of web development.</Card.Text>
            <Button variant="primary">View Course</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="course-card">
          <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
          <Card.Body>
            <Card.Title>Course Title 2</Card.Title>
            <Card.Text>
              Advanced JavaScript techniques and best practices.
            </Card.Text>
            <Button variant="primary">View Course</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="course-card">
          <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
          <Card.Body>
            <Card.Title>Course Title 3</Card.Title>
            <Card.Text>Master React for modern web development.</Card.Text>
            <Button variant="primary">View Course</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <div className="text-center mt-4">
      <Button variant="outline-primary">View All Courses</Button>
    </div>
  </Container>
);

export default CoursesSection;
