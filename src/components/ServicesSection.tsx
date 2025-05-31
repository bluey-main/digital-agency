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
  { id: 'web', number: '01', title: 'Web Design & Development', description: 'We craft stunning, user-friendly websites that captivate your audience and convert visitors into loyal customers, seamlessly on any device.' },
  { id: 'uiux', number: '02',  title:" UI/UX Design", description: "We design experiences so smooth, your users won't just like your product, they will love it. Happy users, happy you!"},
  { id: 'brand', number: '03', title: 'Brand Design', description: "Your brand's first impression, supercharged. We create identities that aren't just seen, they're felt and remembered." },
  { id: 'graphic', number: '04', title: 'Graphic Design', description: 'Need visuals that pop? We design everything from snazzy logos to share-worthy social graphics that tell your story, beautifully.' },
  { id: 'IT', number: '05', title: 'IT Consultation', description: 'Think of us as your IT whisperers. We listen to your tech troubles and conjure up solutions that just work.' },
  { id: 'SecurityAudits', number: '06', title: 'Security Audits', description: 'Know where you stand. Our security audits give you a clear picture of your defenses and how to make them even stronger.' },
  { id: 'ITtranings', number: '07', title: 'IT Tranings', description: "IT training that doesn't feel like homework! We make learning new tech skills engaging, understandable, and actually enjoyable." },
  // Add more if neede
];

const ServiceItem: React.FC<{ item: ServiceListItem; isActive: boolean; onHover: () => void }> = ({ item, isActive, onHover }) => {
  return (
    <AnimatedWrapper variants={fadeInUp(0.6)} className=''>
    <motion.div
      variants={fadeIn(0.5, 0.1)} // Each item fades in from right
      className="py-6 border-b flex-1  border-brand-border last:border-b-0 cursor-pointer group"
      onMouseEnter={onHover}
    //   onMouseLeave={onMouseLeave} // if you want to reset active state on leave
    >
      <div className="flex flex-1 bg-red-5 justify-between items-center">
        <div className="flex items-start">
          <span className="text-sm font-semibold text-brand-accent mr-4 pt-1">{item.number}</span>
          <div>
            <h3 className={`text-xl sm:text-2xl font-bold text-brand-dark-text group-hover:text-primary transition-colors duration-300 ${isActive ? 'text-primary' : ''}`}>
              {item.title}
            </h3>
            <p className="text-sm text-brand-dark-text mt-1 max-w-md">{item.description}</p>
          </div>
        </div>
        {/* <motion.div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-out
                        ${isActive 
                            ? 'bg-brand-accent text-brand-dark-text scale-110 shadow-lg' 
                            : 'bg-transparent text-brand-dark-text group-hover:bg-gray-100'
                        }`}
          whileHover={{ scale: isActive ? 1.1 : 1.05 }} // Keep scale if active, else slight scale
        >
          <FiArrowUpRight size={20} className="sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:text-white" />
        </motion.div> */}
      </div>
    </motion.div>
    </AnimatedWrapper>
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
        <div className=" gap-12 md:gap-16 items-center">
          {/* Left Column: Image Mockups */}
  
          {/* Right Column: Services List */}
          <AnimatedWrapper variants={staggerContainer(0.15, 0.3)} className="flex flex-row gap-x-12 flex-wrap">
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