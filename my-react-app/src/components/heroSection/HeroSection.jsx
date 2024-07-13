import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './heroSection.scss';

const HeroSection = () => (
  <div className="hero-section">
    <Container className="text-center">
      <h1 className="hero-title">Learn Anytime, Anywhere</h1>
      <p className="hero-subtitle">Join our community and start learning from the best instructors today!</p>
      <Button variant="primary" size="lg">Get Started</Button>
    </Container>
  </div>
);

export default HeroSection;
