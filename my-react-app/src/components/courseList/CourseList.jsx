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

  // If you want to use dummy data, you can uncomment the following lines and comment out the useEffect above
  // const courses = [
  //   {
  //     id: 1,
  //     title: "Introduction to Programming",
  //     description: "Learn the basics of programming using Python.",
  //     instructor: "John Doe",
  //     author: "Jane Smith",
  //     date: "2021-09-01",
  //     imageUrl:
  //       "https://upload.wikimedia.org/wikipedia/commons/d/d7/Holy_bible_book.jpg",
  //   },
  //   // ...more dummy courses
  // ];

  return (
    <div className="course-list">
      {courses.length > 0 ? (
        courses.map((course) => (
          <CourseCard key={course.id} course={course} editable={false} />
        ))
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};

export default CourseList;
