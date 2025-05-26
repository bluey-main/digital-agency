// src/pages/HomePage.tsx
import React from 'react';
import Hero from '../components/Hero';
import PortfolioSectionV2 from '../components/PortfolioSectionV2';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';
import ServicesSection from '../components/ServicesSection';

function HomePage() {

    // Replace with your actual WhatsApp number and desired pre-filled message
  const prefilledMessage = "Hello! I'm interested in your digital agency services.";
  return (
    <>
      <Hero />
      <PortfolioSectionV2 /> {/* Add the new portfolio section */}
      <ServicesSection/>

       <FloatingWhatsAppButton 

          message={prefilledMessage}
        />
    </>
  );
}

export default HomePage;