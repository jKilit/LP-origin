import React, { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import "./heroSection.scss";
import heroImage from "../../imgs/Workshop-1920-x-600-px1.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const HeroSection = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleClick = () => {
    if (currentUser) {
      navigate("/courses");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="hero-section">
      <img src={heroImage} alt="Hero Background" className="hero-image" />
      <Container className="text-center">
        <h1 className="hero-title">Learn Anytime, Anywhere</h1>
        <p className="hero-subtitle">
          Join our community and start learning from the best instructors today!
        </p>
        <Button variant="primary" size="lg" onClick={handleClick}>
          Get Started
        </Button>
      </Container>
    </div>
  );
};

export default HeroSection;
