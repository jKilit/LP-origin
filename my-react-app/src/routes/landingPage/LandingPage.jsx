import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import FeaturesSection from "../../components/featuresSection/FeaturesSection";
import CoursesSection from "../../components/courseSection/CourseSection";
import TestimonialsSection from "../../components/testimonialsSection/TestimonialsSection";
import Footer from "../../components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./landingPage.scss";


const LandingPage = () => (
  <div className="landingPage">
    <HeroSection />
    <FeaturesSection />
    <CoursesSection />
    <TestimonialsSection />
    <Footer />
  </div>
);

export default LandingPage;
