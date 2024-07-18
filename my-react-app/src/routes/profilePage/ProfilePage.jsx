import React, { useEffect } from "react";
import ProfileCourseList from "../../components/profileCourseList/ProfileCourseList";
import ProfileInformation from "../../components/profileInfo/ProfileInfo";
import "./profilePage.scss";
import { Button } from "react-bootstrap";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [currentCourses, setCurrentCourses] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser.id;
  const { updateUser } = useContext(AuthContext);
  const handleOnClick = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await apiRequest.get(`/courses/instructorCourses/${userId}`);
      console.log(response.data);
      setCurrentCourses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateCourse = () => {
    navigate("/create-course");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="profile-page">
      <Button variant="primary" onClick={handleCreateCourse}>
        Create new course
      </Button>
      <Button variant="dark" onClick={handleOnClick}>
        Logout
      </Button>
      <ProfileInformation user={currentUser} />
      <ProfileCourseList title="My Courses" courses={currentCourses} editable />
      {/* <ProfileCourseList title="Enrolled Courses" courses={enrolledCourses} /> */}
    </div>
  );
};

export default ProfilePage;
