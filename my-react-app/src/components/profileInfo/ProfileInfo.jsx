import React from "react";
import "./profileInfo.scss";

const ProfileInformation = ({ user }) => {
  return (
    <div className="profile-information">
      <h3>Profile Information</h3>
      <ul>
        <li>
          <strong>Name:</strong> {user.username}
        </li>
        <li>
          <strong>Email:</strong> {user.email}
        </li>
        <li>
          <strong>Bio:</strong> {user.bio}
        </li>
      </ul>
    </div>
  );
};

export default ProfileInformation;
