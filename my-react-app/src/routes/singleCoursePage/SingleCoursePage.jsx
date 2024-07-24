import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseDetails from "../../components/courseDetails/CourseDetails";
import InstructorInfo from "../../components/instructorInfo/InstructorInfo";
import CourseContent from "../../components/courseContent/CourseContent";
import EnrollmentSection from "../../components/enrollmentSection/EnrollmentSection";
import "./singleCoursePage.scss";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

const SingleCoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser ? currentUser.id : null;
  const [userIsEnrolled, setUserIsEnrolled] = useState(false);

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

    const checkEnrollment = async () => {
      try {
        const response = await apiRequest.get(`/enrollment/${userId}`);
        const enrolledCourseIds = response.data.map(
          (enrollment) => enrollment.courseId
        );
        setUserIsEnrolled(enrolledCourseIds.includes(id));
        if (enrolledCourseIds.includes(id)) {
          console.log("User is enrolled in this course");
        }
      } catch (error) {
        console.error("Error checking enrollment:", error);
      }
    };

    if (userId) {
      fetchCourse();
      checkEnrollment();
    }
  }, [id, userId]);

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
        {userIsEnrolled ? <></> : (
          <EnrollmentSection courseId={course.id} />
        )}
      </div>
    </div>
  );
};

export default SingleCoursePage;
