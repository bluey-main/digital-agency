// src/components/PortfolioCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { scaleUp, hoverEffect } from './animations/variants';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string; // Path to image in public folder or a URL
  link?: string; // Optional link to live project
}

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <motion.div
      variants={scaleUp(0.7, 1.2)}
      whileHover={hoverEffect}
      className="bg-white bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
      onClick={() => item.link && window.open(item.link, '_blank')}
    >
      <div className="relative h-60">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-1">{item.title}</h3>
        <p className="text-sm text-accent font-medium ">{item.category}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;