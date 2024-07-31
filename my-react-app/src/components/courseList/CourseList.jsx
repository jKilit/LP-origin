import React, { useState, useEffect } from "react";
import CourseCard from "../courseCard/CourseCard";
import "./courseList.scss";
import apiRequest from "../../lib/apiRequest";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await apiRequest.get("/courses/allCourses");
      console.log("Courses fetched:", response.data);
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="course-list">
      {courses.length > 0 ? (
        courses.map((course) => (
          <CourseCard key={course.id} course={course} editable={false} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CourseList;
