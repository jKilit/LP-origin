import React, { useState } from "react";
import CourseForm from "../../components/courseForm/CourseForm";
import "./createCoursePage.scss";

const CreateCoursePage = () => {
  return (
    <div className="create-course-page">
      <h2>Create New Course</h2>
      <CourseForm />
    </div>
  );
};

export default CreateCoursePage;
