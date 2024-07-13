import React from 'react';
import CourseList from '../../components/courseList/CourseList';
import './coursesPage.scss';

const CoursesPage = () => {
  return (
    <div className="courses-page">
      <h1>All Courses</h1>
      <CourseList />
    </div>
  );
};

export default CoursesPage;
