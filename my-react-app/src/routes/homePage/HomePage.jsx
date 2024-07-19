// HomePage.jsx

import React, { useEffect, useContext } from "react";
import MainContent from "../../components/mainContentHome/MainContentHome";
import Footer from "../../components/footer/Footer";
import "./homePage.scss";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";

const HomePage = ({ recentActivity, recommendedCourses }) => {
  const { currentUser } = useContext(AuthContext);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
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
    <div className="home-Page">
      <div className="main-Content">
        <MainContent enrolledCourses={enrolledCourses} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
