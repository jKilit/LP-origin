import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./courseSection.scss";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

const CoursesSection = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await apiRequest("/courses/allCourses"); // Replace with your API endpoint
        console.log("Courses fetched:", response.data);
        const randomCourses = response.data.sort(() => 0.5 - Math.random());
        const courses = randomCourses.slice(0, 3);
        setCourses(courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <Container className="courses-section" id="courses">
      <h2 className="text-center mb-4">Popular Courses</h2>
      <Row>
        {courses.length > 0 ? (
          courses.slice(0, 3).map((course) => (
            <Col md={4} key={course.id}>
              <Card className="course-card">
                <Card.Img
                  variant="top"
                  src={course.image || "https://via.placeholder.com/300x200"}
                />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleClick(course.id)}
                  >
                    View Course
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <p>Loading courses...</p>
          </Col>
        )}
      </Row>
      <div className="text-center mt-4" onClick={() => navigate("/courses")}>
        <Button variant="outline-primary">View All Courses</Button>
      </div>
    </Container>
  );
};

export default CoursesSection;
