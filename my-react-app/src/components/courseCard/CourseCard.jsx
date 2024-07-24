import React from "react";
import "./courseCard.scss";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
const CourseCard = ({ course, seeMore }) => {
  console.log("CourseCard -> course", course);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/courses/${course.id}`);
  };

  return (
    <div className="course-card">
      <div onClick={handleClick}>
        <img src={course.image} alt={course.title} className="course-image" />
        <div className="course-details">
          <h3 className="course-title">{course.title}</h3>
          <p className="course-description">{course.description}</p>
          <div className="course-meta">
            <span className="course-author">By {course.author}</span>
            <span className="course-date">{course.date}</span>
            <span className="course-instructor">
              {course.instructor.username}
            </span>
          </div>
        </div>
      </div>
      {seeMore && (
        <div className="see-More">
          <Button
            variant="primary"
            onClick={() => navigate(`/instructor/${course.id}`)}
          >
            See More
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
