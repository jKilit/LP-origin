import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import "./enrollmentSection.scss"; // Import the SCSS file
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


const EnrollmentSection = ({ courseId }) => {
  const [enrolling, setEnrolling] = useState(false);
  const { currentUser} = useContext(AuthContext);
  const userId = currentUser ? currentUser.id : null;
  const navigate = useNavigate();

  const handleEnroll = async () => {
    setEnrolling(true);
    try {
      await apiRequest.post("/enrollment/enrollUserInCourse", {
        courseId,
        userId,
      });
      navigate("/home");
    } catch (error) {
      alert("Error enrolling in the course");
      console.error("Error enrolling in course:", error);
    } finally {
      setEnrolling(false);
    }
  };

  return (
    <div className="enrollment-section">
      <div className="enrollment-content">
        <h3>Like what you see?</h3>
        <p>
          Enroll now to start learning and enhance your skills with this amazing
          course. Join a community of learners and get started with hands-on
          experience!
        </p>
        <Button
          className="enroll-button"
          onClick={handleEnroll}
          disabled={enrolling}
        >
          {enrolling ? "Enrolling..." : "Join Program"}
        </Button>
      </div>
    </div>
  );
};

export default EnrollmentSection;
