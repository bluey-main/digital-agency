// src/components/ProjectCardV2.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi'; // For the link icon

export interface PortfolioItemV2 {
  id: string | number;
  title: string; // For alt text and potential overlay later
  imageUrl: string; // Path to the project mockup/screenshot
  projectUrl?: string; // Link to the live project or case study
  category?: string; // Optional
  theme?: 'light' | 'dark'; // To simulate device theme for the card background
}

interface ProjectCardV2Props {
  item: PortfolioItemV2;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } // Smooth spring-like ease
  },
};

const ProjectCardV2: React.FC<ProjectCardV2Props> = ({ item }) => {
  const handleCardClick = () => {
    if (item.projectUrl) {
      window.open(item.projectUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const cardBackgroundColor = item.theme === 'dark' ? 'bg-slate-800' : 'bg-white';
  const hasLink = !!item.projectUrl;

  return (
    <motion.div
      variants={cardVariants} // Will be animated as part of parent's stagger
      className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] rounded-xl h-auto 
                 ${cardBackgroundColor} 
                 rounded-card shadow-card-portfolio overflow-hidden 
                 group transform transition-all duration-300 ease-out
                 ${hasLink ? 'cursor-pointer hover:shadow-card-portfolio-hover hover:-translate-y-1.5' : ''}`}
      onClick={handleCardClick}
      layout // For smooth animations if size changes (less critical here)
    >
      {/* Optional: Mockup "browser" bar or device top - subtle */}
      <div className={`h-8 flex items-center px-3 space-x-1.5 ${item.theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'}`}>
        <span className={`block w-3 h-3 rounded-full ${item.theme === 'dark' ? 'bg-slate-600' : 'bg-red-400'}`}></span>
        <span className={`block w-3 h-3 rounded-full ${item.theme === 'dark' ? 'bg-slate-600' : 'bg-yellow-400'}`}></span>
        <span className={`block w-3 h-3 rounded-full ${item.theme === 'dark' ? 'bg-slate-600' : 'bg-green-400'}`}></span>
      </div>

      {/* Main Image Content */}
      <div className="aspect-[3/4] w-full relative overflow-hidden p-10"> {/* Aspect ratio for the image */}
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Circular Link Button (if link exists) - Positioned within the card itself */}
      {hasLink && (
        <motion.div
          className="absolute bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 
                     bg-brand-accent text-white
                     rounded-full flex items-center justify-center 
                     shadow-lg transform transition-all duration-300 
                     opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12"
          whileHover={{ scale: 1.2, rotate: 25 }}
          whileTap={{ scale: 0.9 }}
          title={`View ${item.title}`}
        >
          <FiArrowUpRight size={20} className="sm:w-5 sm:h-5" />
        </motion.div>
      )}
      
      {/* Optional: Minimal text at the bottom if needed for context directly on carousel card */}
      {/* <div className="p-3 text-center">
        <h3 className="font-semibold text-sm text-brand-dark-text truncate group-hover:text-primary">{item.title}</h3>
        {item.category && <p className="text-xs text-brand-subtle-text">{item.category}</p>}
      </div> */}
    </motion.div>
  );
};

export default ProjectCardV2;