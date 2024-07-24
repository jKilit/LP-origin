import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import "./enrollmentSection.scss";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

const EnrollmentSection = ({ courseId }) => {
  const [enrolling, setEnrolling] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEnroll = async () => {
    if (!currentUser) {
      // Handle case when user is not logged in
      alert("You must be logged in to enroll in a course.");
      return;
    }

    setEnrolling(true);
    try {
      // Optionally handle any additional logic here, e.g., check if the user is already enrolled
      navigate(`/checkout/${courseId}`);
    } catch (error) {
      console.error("Error during enrollment:", error);
      alert("An error occurred while enrolling.");
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
          {enrolling ? "Going to payment..." : "Join Program"}
        </Button>
      </div>
    </div>
  );
};

export default EnrollmentSection;
