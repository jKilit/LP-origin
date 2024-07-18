import React from "react";
import CourseCard from "../courseCard/CourseCard";
import ActivityItem from "../activityItem/ActivityItem";
import "./mainContentHome.scss";

const MainContent = ({
  // enrolledCourses,
  // recentActivity,
  // recommendedCourses,
}) => {

  const enrolledCourses = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the fundamentals of React.js",
    author: "John Doe",
    date: "July 1, 2024",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Explore advanced JavaScript concepts",
    author: "Jane Smith",
    date: "June 15, 2024",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Python for Data Science",
    description: "Master Python for data analysis and visualization",
    author: "Mike Johnson",
    date: "August 5, 2024",
    imageUrl: "https://via.placeholder.com/300",
  },
];

// Dummy recent activity
const recentActivity = [
  {
    id: 1,
    title: "Completed Introduction to React",
    description: "You completed the course 'Introduction to React'",
    date: "July 3, 2024",
    iconUrl: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    title: "Enrolled in Advanced JavaScript",
    description: "You enrolled in the course 'Advanced JavaScript'",
    date: "July 2, 2024",
    iconUrl: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    title: "Posted a review for Python for Data Science",
    description: "You posted a review for the course 'Python for Data Science'",
    date: "June 30, 2024",
    iconUrl: "https://via.placeholder.com/50",
  },
];

// Dummy recommended courses
const recommendedCourses = [
  {
    id: 4,
    title: "Angular Essentials",
    description: "Beginner-friendly guide to Angular framework",
    author: "Emily Brown",
    date: "July 10, 2024",
    imageUrl: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    title: "Java Programming",
    description: "Learn Java programming from scratch",
    author: "Chris Wilson",
    date: "July 8, 2024",
    imageUrl: "https://via.placeholder.com/300",
  },
];

  return (
    <div className="main-content">
      <h2>Dashboard</h2>
      <div className="course-overview">
        {enrolledCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        {recentActivity.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
      <h3>Recommended Courses</h3>
      <div className="recommended-courses">
        {recommendedCourses.map((course) => (
          <CourseCard key={course.id} course={course} editable={false} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
