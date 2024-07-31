import React from "react";
import "./instructorInfo.scss";

const InstructorInfo = ({ instructor }) => {
  return (
    <div className="instructor-info">
      <h2 className="instructor-name">{instructor.name}</h2>
      <p className="instructor-bio">{instructor.bio}</p>
    </div>
  );
};

export default InstructorInfo;
