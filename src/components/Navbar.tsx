// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom'; // If using for internal page nav
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi'; // Example icons

// Helper for smooth scrolling to sections
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const navLinks = [
  { name: 'Home', to: '/', isSection: false },
  { name: 'Services', to: 'services', isSection: true },
  { name: 'Portfolio', to: 'portfolio', isSection: true },
  { name: 'Contact', to: 'contact', isSection: true },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkVariants = {
    hover: { scale: 1.1, color: '#6A0DAD' /* primary color */ },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isOpen ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <RouterLink to="/" className="text-3xl font-bold text-primary">
          Agency<span className="text-accent">.</span> {/* Your Logo */}
        </RouterLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            link.isSection ? (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.to)}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                className={`text-text-main hover:text-primary transition-colors duration-200 font-medium ${isScrolled || isOpen ? 'text-base' : 'text-lg'}`}
              >
                {link.name}
              </motion.button>
            ) : (
              <RouterLink key={link.name} to={link.to}>
                 <motion.span
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className={`text-text-main hover:text-primary transition-colors duration-200 font-medium ${isScrolled || isOpen ? 'text-base' : 'text-lg'}`}
                  >
                    {link.name}
                  </motion.span>
              </RouterLink>
            )
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary focus:outline-none">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden ${isScrolled || isOpen ? 'bg-white' : 'bg-transparent'}`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
             link.isSection ? (
              <button
                key={link.name}
                onClick={() => { scrollToSection(link.to); setIsOpen(false); }}
                className="text-text-main hover:text-primary transition-colors duration-200 font-medium text-lg"
              >
                {link.name}
              </button>
            ) : (
              <RouterLink key={link.name} to={link.to} onClick={() => setIsOpen(false)}>
                 <span className="text-text-main hover:text-primary transition-colors duration-200 font-medium text-lg">
                    {link.name}
                  </span>
              </RouterLink>
            )
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;