import React from "react";
import CourseCard from "../courseCard/CourseCard";
import "./mainContentHome.scss";

const MainContent = ({ enrolledCourses }) => {
  return (
    <div className="main-content">
      <h2>Dashboard</h2>
      <div className="course-overview">
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className="no-courses">
            <div className="message-container">
              <h3>🚀 Ready to Level Up?</h3>
              <p>
                It looks like you haven't started your learning journey yet.
                Don't miss out on amazing opportunities to grow your skills and
                knowledge.
              </p>
              <p>
                Explore our diverse range of courses and find the one that
                inspires you to start today!
              </p>
              <a href="/courses" className="cta-button">
                Browse Courses
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
