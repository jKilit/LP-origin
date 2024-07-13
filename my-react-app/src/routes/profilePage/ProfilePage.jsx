import React from "react";
import ProfileCourseList from "../../components/profileCourseList/ProfileCourseList";
import ProfileInformation from "../../components/profileInfo/ProfileInfo";
import "./profilePage.scss";
import { Button } from "react-bootstrap";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const navigate = useNavigate();
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
  const user = {
    profilePicture: "https://via.placeholder.com/100",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "A passionate educator and lifelong learner.",
  };
  const currentCourses = [
    {
      id: 1,
      title: "Advanced React",
      description: "Learn advanced concepts in React.",
      imageUrl:
        "https://bairesdev.mo.cloudinary.net/blog/2023/08/How-to-Choose-the-Right-Programming-Language-for-a-New-Project.jpg?tx=w_1920,q_auto",
    },
    {
      id: 2,
      title: "Intro to Python",
      description: "Beginner friendly Python course.",
      imageUrl: "https://via.placeholder.com/300x150",
    },
  ];

  const enrolledCourses = [
    {
      id: 3,
      title: "Data Science 101",
      description: "Introduction to data science concepts.",
      imageUrl:
        "https://bairesdev.mo.cloudinary.net/blog/2023/08/How-to-Choose-the-Right-Programming-Language-for-a-New-Project.jpg?tx=w_1920,q_auto",
    },
    {
      id: 4,
      title: "Machine Learning Basics",
      description: "Learn the basics of machine learning.",
      image: "https://via.placeholder.com/300x150",
    },
  ];

  return (
    <div className="profile-page">
      <Button variant="primary">Create new course</Button>
      <Button variant="dark" onClick={handleOnClick}>
        Logout
      </Button>
      <ProfileInformation user={user} />
      <ProfileCourseList title="My Courses" courses={currentCourses} editable />
      <ProfileCourseList title="Enrolled Courses" courses={enrolledCourses} />
    </div>
  );
};

export default ProfilePage;
