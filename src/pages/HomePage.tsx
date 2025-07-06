import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to contact section if coming from navbar contact button
    if (location.state?.scrollToContact) {
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.state]);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;