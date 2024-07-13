// HomePage.jsx

import React from "react";
import MainContent from "../../components/mainContentHome/MainContentHome";
import Footer from "../../components/footer/Footer";
import "./homePage.scss";

const HomePage = ({
  user,
  enrolledCourses,
  recentActivity,
  recommendedCourses,
}) => {
  return (
    <div className="homePage">
      <MainContent
        enrolledCourses={enrolledCourses}
        recentActivity={recentActivity}
        recommendedCourses={recommendedCourses}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
