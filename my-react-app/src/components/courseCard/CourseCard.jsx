import React from "react";
import "./courseCard.scss";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const CourseCard = ({ course, editable }) => {
  return (
    <div className="course-card">
      <Link to="/specific">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="course-image"
        />
        <div className="course-details">
          <h3 className="course-title">{course.title}</h3>
          <p className="course-description">{course.description}</p>
          <div className="course-meta">
            <span className="course-author">By {course.author}</span>
            <span className="course-date">{course.date}</span>
            <span className="course-date">{course.instructor.username}</span>
          </div>
          {editable && (
          <Button variant="primary" onClick={() => alert("Edit Course")}>
            Edit Course
          </Button>
        )}
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
