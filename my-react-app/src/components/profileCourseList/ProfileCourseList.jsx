import React, { useState, useEffect } from "react";
import CourseCard from "../courseCard/CourseCard";
import "./profileCourseList.scss";

const ProfileCourseList = ({ title, courses, seeMore, includeDelete }) => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    setCourseList(courses);
  }, [courses]);

  const handleDeleteCourse = (courseId) => {
    setCourseList((prevCourses) =>
      prevCourses.filter((course) => course.id !== courseId)
    );
  };

  return (
    <div className="courses-list">
      <h2>{title}</h2>
      <div className="courses-container">
        {courseList.length > 0 ? (
          courseList.map((course) => (
            <CourseCard
              className="course-item"
              key={course.id}
              course={course}
              seeMore={seeMore}
              includeDelete={includeDelete}
              onDelete={handleDeleteCourse}
            />
          ))
        ) : (
          <p>No courses available.</p>
        )}
      </div>
    </div>
  );
};

export default ProfileCourseList;
