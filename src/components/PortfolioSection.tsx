// src/components/PortfolioSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from './PortfolioCard';
import { fadeInUp, staggerContainer } from './animations/variants';
// Placeholder images - replace with your actual portfolio images
import portfolioImg1 from '../assets/images/portfolio-placeholder-1.jpg';
import portfolioImg2 from '../assets/images/portfolio-placeholder-2.jpg';
import portfolioImg3 from '../assets/images/portfolio-placeholder-3.jpg';
import portfolioImg4 from '../assets/images/portfolio-placeholder-4.jpg';


const portfolioItems = [
  { id: 1, title: 'E-commerce Platform Redesign', category: 'UI/UX Design, Web Development', imageUrl: portfolioImg1, link: '#' },
  { id: 2, title: 'Mobile App for Startup', category: 'Web Design, UI/UX Design', imageUrl: portfolioImg2, link: '#' },
  { id: 3, title: 'Brand Identity for Cafe', category: 'Graphics Design', imageUrl: portfolioImg3, link: '#' },
  { id: 4, title: 'Tech Infrastructure Audit', category: 'IT Consultation', imageUrl: portfolioImg4, link: '#' },
  // Add more items
];

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary">Our Work</h2>
          <p className="text-center text-text-light mb-12 sm:mb-16 max-w-2xl mx-auto">
            Take a look at some of the projects we're proud to have delivered for our clients.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8" // Adjusted to 2 columns for better image display
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </motion.div>
        {/* Optional: "View More" button if you have many projects */}
      </div>
    </section>
  );
}

export default PortfolioSection;