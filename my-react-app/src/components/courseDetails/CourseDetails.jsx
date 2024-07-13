import React from "react";
import "./courseDetails.scss";

const CourseDetails = ({ course }) => {
  return (
    <div className="course-details">
      <img src={course.image} alt={course.title} className="course-image" />
      <h1 className="course-title">{course.title}</h1>
      <p className="course-description">{course.description}</p>
    </div>
  );
};

export default CourseDetails;
