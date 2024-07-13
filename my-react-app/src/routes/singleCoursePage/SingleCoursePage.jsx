import React from "react";
import CourseDetails from "../../components/courseDetails/CourseDetails";
import InstructorInfo from "../../components/instructorInfo/InstructorInfo";
import CourseContent from "../../components/courseContent/CourseContent";
import "./singleCoursePage.scss";

const SingleCoursePage = () => {
  // Dummy course data
  const course = {
    id: "123",
    title: "Introduction to Programming",
    description: "Learn the basics of programming using Python.",
    instructor: {
      name: "John Doe",
      bio: "An experienced software developer with a passion for teaching.",
      image: "https://via.placeholder.com/100",
    },
    image: "https://via.placeholder.com/600x200",
    content: [
      {
        title: "Module 1: Introduction to Python",
        lessons: [
          "What is Python?",
          "Setting up the environment",
          "Hello World in Python",
        ],
      },
      {
        title: "Module 2: Variables and Data Types",
        lessons: [
          "Understanding Variables",
          "Data Types in Python",
          "Type Casting",
        ],
      },
      {
        title: "Module 3: Control Structures",
        lessons: ["If-Else Statements", "For Loops", "While Loops"],
      },
      {
        title: "Module 4: Functions",
        lessons: ["Defining Functions", "Function Arguments", "Return Values"],
      },
      {
        title: "Module 5: Modules and Packages",
        lessons: ["Creating Modules", "Using Packages", "Installing Packages"],
      },
    ],
  };

  return (
    <div className="single-course-page">
      <CourseDetails course={course} />
      <InstructorInfo instructor={course.instructor} />
      <CourseContent content={course.content} />
    </div>
  );
};

export default SingleCoursePage;
