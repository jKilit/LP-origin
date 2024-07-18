import React from "react";
import CourseCard from "../courseCard/CourseCard";
import "./profileCourseList.scss";

const ProfileCourseList = ({ title, courses, editable }) => {
  return (
    <div className="courses-list">
      <h2>{title}</h2>
      <div className="courses-container">
        {courses.map((course) => (
          <CourseCard className= "course-item"key={course.id} course={course} editable={editable} />
        ))}
      </div>
    </div>
  );
};

export default ProfileCourseList;
