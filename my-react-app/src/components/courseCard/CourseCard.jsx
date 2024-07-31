import React from "react";
import "./courseCard.scss";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

const CourseCard = ({ course, seeMore, includeDelete, onDelete }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${course.id}`);
  };

  const handleDelete = async () => {
    try {
      await apiRequest.delete(`/courses/${course.id}`);
      console.log("Course deleted:", course.id); // Debug log
      onDelete(course.id); // Notify the parent component about the deletion
    } catch (error) {
      console.log("Error deleting course:", error);
    }
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
        <div className="see-more">
          <Button
            variant="primary"
            onClick={() => navigate(`/instructor/${course.id}`)}
          >
            See More
          </Button>
        </div>
      )}
      {includeDelete && (
        <div className="delete-course" onClick={handleDelete}>
          <Button variant="danger">Delete</Button>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
