import React, { useEffect, useContext, useState } from "react";
import MainContent from "../../components/mainContentHome/MainContentHome";
import Footer from "../../components/footer/Footer";
import "./homePage.scss";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const recentActivity = [
    { id: 1, description: "Completed Module 1 of JavaScript Basics" },
    { id: 2, description: "Started Python for Data Science course" },
    { id: 3, description: "Finished reading 'React Hooks Guide'" },
  ];

  const recommendedCourses = [
    { id: 1, title: "Advanced CSS and Sass" },
    { id: 2, title: "Node.js: The Complete Guide" },
    { id: 3, title: "Machine Learning with Python" },
  ];

  const fetchEnrolledCourses = async () => {
    try {
      const response = await apiRequest.get(`/enrollment/${currentUser.id}`);
      setEnrolledCourses(response.data.map((item) => item.course));
      console.log("Enrolled courses: ", response.data);
    } catch (error) {
      console.log("Error fetching enrolled courses: ", error);
    }
  };

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  return (
    <div className="home-page">
      <header className="welcome-section">
        <h1>Welcome Back!📖</h1>
        <p>Ready to continue your learning journey?</p>
      </header>
      <div className="content-container">
        <section className="main-content">
          <MainContent enrolledCourses={enrolledCourses} />
        </section>
        <section className="sidebar">
          <div className="recent-activity">
            <h3>Recent Activity</h3>
            <ul>
              {recentActivity.map((activity) => (
                <li key={activity.id}>{activity.description}</li>
              ))}
            </ul>
          </div>
          <div className="recommended-courses">
            <h3>Recommended Courses</h3>
            <ul>
              {recommendedCourses.map((course) => (
                <li key={course.id}>{course.title}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
