import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ServiceLocationsSection from '../components/ServiceLocationsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import StakeholdersSection from '../components/StakeholdersSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

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
      <ServiceLocationsSection />
      <TestimonialsSection />
      <StakeholdersSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;