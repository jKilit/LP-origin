import React from "react";
import CourseCard from "../courseCard/CourseCard";
import "./courseList.scss";

const CourseList = () => {
  const dummyCourses = [
    {
      id: 1,
      title: "Introduction to Programming",
      description: "Learn the basics of programming using Python.",
      instructor: "John Doe",
      author: "Jane Smith",
      date: "2021-09-01",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Holy_bible_book.jpg",
    },
    {
      id: 1,
      title: "Introduction to Programming",
      description: "Learn the basics of programming using Python.",
      instructor: "John Doe",
      author: "Jane Smith",
      date: "2021-09-01",
      imageUrl: "https://bairesdev.mo.cloudinary.net/blog/2023/08/How-to-Choose-the-Right-Programming-Language-for-a-New-Project.jpg?tx=w_1920,q_auto",
    },
    {
      id: 1,
      title: "Introduction to Programming",
      description: "Learn the basics of programming using Python.",
      instructor: "John Doe",
      author: "Jane Smith",
      date: "2021-09-01",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Holy_bible_book.jpg",
    },
    {
      id: 1,
      title: "Introduction to Programming",
      description: "Learn the basics of programming using Python.",
      instructor: "John Doe",
      author: "Jane Smith",
      date: "2021-09-01",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Holy_bible_book.jpg",
    },
    {
      id: 1,
      title: "Introduction to Programming",
      description: "Learn the basics of programming using Python.",
      instructor: "John Doe",
      author: "Jane Smith",
      date: "2021-09-01",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Holy_bible_book.jpg",
    },
    {
      id: 1,
      title: "Introduction to Programming",
      description: "Learn the basics of programming using Python.",
      instructor: "John Doe",
      author: "Jane Smith",
      date: "2021-09-01",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Holy_bible_book.jpg",
    },
  ];

  return (
    <div className="course-list">
      {dummyCourses.map((course) => (
        <CourseCard key={course.id} course={course} editable={false} />
      ))}
    </div>
  );
};

export default CourseList;
