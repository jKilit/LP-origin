import React, { useEffect, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import "./instructorPage.scss";
import { useParams } from "react-router-dom";

const InstructorPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await apiRequest.get(`/courses/${id}`);
        console.log("Course fetched:", response.data);
        setCourse(response.data);
      } catch (error) {
        setError("Error fetching course details");
        console.error("Error fetching course details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
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
    <div className="instructor-page">
      <div className="container">
        <div className="course-overview">
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <div className="course-stats">
            <span>
              <strong>Enrolled Students:</strong> {course.enrollments.length}
            </span>
            <span>
              <strong>Average Rating:</strong> {course.averageRating || "N/A"}
            </span>
          </div>
        </div>
        <div className="instructor-info">
          <h3>Instructor Details</h3>
          <div className="instructor-details">
            <img
              src={course.instructor.photo || "/default-instructor.jpg"}
              alt={`Instructor ${course.instructor.username}`}
            />
            <div className="details">
              <h4>{course.instructor.username}</h4>
              <p>
                <strong>Bio:</strong>{" "}
                {course.instructor.bio || "Bio not available"}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {course.instructor.email || "Email not available"}
              </p>
            </div>
          </div>
        </div>
        <div className="enrolled-students">
          <h3>Enrolled Students</h3>
          <ul>
            {course.enrollments.map((enrollment) => (
              <li key={enrollment.userId}>{enrollment.user.username}</li> // Assuming userId is used as a placeholder
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstructorPage;
