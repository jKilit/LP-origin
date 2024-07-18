import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseDetails from "../../components/courseDetails/CourseDetails";
import InstructorInfo from "../../components/instructorInfo/InstructorInfo";
import CourseContent from "../../components/courseContent/CourseContent";
import "./singleCoursePage.scss";
import apiRequest from "../../lib/apiRequest";

const SingleCoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await apiRequest.get(`/courses/${id}`);
        setCourse(response.data);
        console.log("Course fetched:", response.data);
      } catch (error) {
        setError("Error fetching course");
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!course) {
    return <div>No course found</div>;
  }

  return (
    <div className="single-course-page">
      <div className="container">
        <CourseDetails course={course} />
        <InstructorInfo instructor={course.instructor} />
        <CourseContent content={course.modules} />
      </div>
    </div>
  );
};

export default SingleCoursePage;
