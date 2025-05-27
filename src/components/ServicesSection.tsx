// src/components/ServicesSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { AnimatedWrapper } from './AnimatedWrapper'; // Your scroll animation wrapper
import { fadeIn, fadeInUp, staggerContainer,  } from './animations/variants'; // Your animation variants
import mockup1 from "../assets/images/mock1.jpg"
import mockup2 from "../assets/images/mock2.jpg"
import mockup3 from "../assets/images/mock3.jpg"



// Mockup images - replace with your actual paths
const mockupImg1 = mockup1; // Place in public/services/
const mockupImg2 = mockup2;
const mockupImg3 = mockup3;


interface ServiceListItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

const servicesList: ServiceListItem[] = [
  { id: 'web', number: '01', title: 'Web Design', description: 'We craft stunning, user-friendly websites that captivate your audience and convert visitors into loyal customers, seamlessly on any device.' },
  { id: 'uiux', number: '02',  title:" UI/UX Design", description: "We design experiences so smooth, your users won't just like your product, they will love it. Happy users, happy you!"},
  { id: 'brand', number: '03', title: 'Brand Design', description: "Your brand's first impression, supercharged. We create identities that aren't just seen, they're felt and remembered." },
  { id: 'graphic', number: '04', title: 'Graphic Design', description: 'Need visuals that pop? We design everything from snazzy logos to share-worthy social graphics that tell your story, beautifully.' },
  // Add more if needed
];

const ServiceItem: React.FC<{ item: ServiceListItem; isActive: boolean; onHover: () => void }> = ({ item, isActive, onHover }) => {
  return (
    <motion.div
      variants={fadeIn(0.5, 0.1)} // Each item fades in from right
      className="py-6 border-b border-brand-border last:border-b-0 cursor-pointer group"
      onMouseEnter={onHover}
    //   onMouseLeave={onMouseLeave} // if you want to reset active state on leave
    >
      <div className="flex justify-between items-center">
        <div className="flex items-start">
          <span className="text-sm font-semibold text-brand-light-text mr-4 pt-1">{item.number}</span>
          <div>
            <h3 className={`text-xl sm:text-2xl font-semibold text-brand-dark-text group-hover:text-primary transition-colors duration-300 ${isActive ? 'text-primary' : ''}`}>
              {item.title}
            </h3>
            <p className="text-sm text-brand-light-text mt-1 max-w-md">{item.description}</p>
          </div>
        </div>
        <motion.div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-out
                        ${isActive 
                            ? 'bg-brand-accent text-brand-dark-text scale-110 shadow-lg' 
                            : 'bg-transparent text-brand-dark-text group-hover:bg-gray-100'
                        }`}
          whileHover={{ scale: isActive ? 1.1 : 1.05 }} // Keep scale if active, else slight scale
        >
          <FiArrowUpRight size={20} className="sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
};


function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(servicesList[1]?.id || null); // Default to UI/UX or first

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedWrapper variants={fadeInUp(0.6)} className="mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark-text tracking-tight mb-2 sm:mb-0">
                OUR SERVICES
              </h2>
              <p className="text-md text-brand-light-text">
                This is part of our service that can give you satisfaction.
              </p>
            </div>
            {/* <motion.button
              whileHover={{ scale: 1.05, y: -1, boxShadow: "0px 4px 12px rgba(175,255,173,0.5)"}}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-lime-green text-brand-dark-text font-semibold py-2.5 px-6 rounded-button-pill shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base flex items-center whitespace-nowrap"
            >
              View more <FiArrowRight className="ml-2 w-4 h-4" />
            </motion.button> */}
          </div>
        </AnimatedWrapper>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column: Image Mockups */}
          <AnimatedWrapper variants={fadeInUp(0.8, 0.2)} className="relative h-[400px] sm:h-[500px] md:h-[600px]">
            {/* Base Image (furthest back) */}
            <motion.div
              className="absolute w-[70%] rounded-2xl h-[70%] top-[15%] left-0 bg-brand-card-mockup-bg rounded-2.5xl shadow-xl overflow-hidden transform -rotate-6"
              initial={{ x: -30, opacity: 0, rotate: -10 }}
              animate={{ x: 0, opacity: 1, rotate: -6 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              <img src={mockupImg3} alt="Service Mockup 3" className="w-full h-full object-cover object-top" />
            </motion.div>
            {/* Middle Image */}
            <motion.div
              className="absolute w-[75%] rounded-2xl h-[75%] top-[5%] left-[15%] bg-brand-card-mockup-bg rounded-2.5xl shadow-2xl overflow-hidden transform rotate-3 z-10"
              initial={{ y: 30, opacity: 0, rotate: 8 }}
              animate={{ y: 0, opacity: 1, rotate: 3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <img src={mockupImg2} alt="Service Mockup 2" className="w-full h-full object-cover object-top" />
            </motion.div>
            {/* Top Image (most prominent) */}
            <motion.div
              className="absolute w-[80%] rounded-2xl h-[80%] top-[10%] left-[10%] bg-brand-card-mockup-bg rounded-2.5xl shadow-2xl overflow-hidden transform -rotate-2 z-20 group"
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: -2 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0 }}
              whileHover={{ scale: 1.02, rotate: -1, y: -5 }}
            >
              <img src={mockupImg1} alt="Service Mockup 1" className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102" />
              {/* Optional overlay text on image hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">View All Cases</p>
              </div>
            </motion.div>
          </AnimatedWrapper>

          {/* Right Column: Services List */}
          <AnimatedWrapper variants={staggerContainer(0.15, 0.3)} className="flex flex-col">
            {servicesList.map((service) => (
              <ServiceItem
                key={service.id}
                item={service}
                isActive={activeServiceId === service.id}
                onHover={() => setActiveServiceId(service.id)}
              />
            ))}
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;