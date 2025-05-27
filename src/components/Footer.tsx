// src/components/Footer.tsx
import React from "react";
import { motion } from "framer-motion";
// import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG, FaYoutube } from 'react-icons/fa';
import CircularGetStartedButton from "./CircularGetStartedButton";
import { AnimatedWrapper } from "./AnimatedWrapper"; // Assuming this is in ./AnimatedWrapper.tsx
import {
  fadeInUp,
  staggerContainer,
} from "./animations/variants"; // Your animation variants

// interface FooterLink {
//   href: string;
//   label: string;
// }

// interface LinkColumn {
//   title: string;
//   links: FooterLink[];
// }

// const footerLinks: LinkColumn[] = [
//   {
//     title: 'Data Science',
//     links: [
//       { href: '#', label: 'Business Use-Case' },
//       { href: '#', label: 'Data Roles' },
//       { href: '#', label: 'Blog' },
//       { href: '#', label: 'Management' },
//       { href: '#', label: 'Privacy Policy' },
//     ],
//   },
//   {
//     title: 'About',
//     links: [
//       { href: '#', label: 'Contact Us' },
//       { href: '#', label: 'Support Us' },
//       { href: '#', label: 'Community' },
//       { href: '#', label: 'FAQ' },
//     ],
//   },
//   {
//     title: 'Programs',
//     links: [
//       { href: '#', label: 'Learning Modules' },
//       { href: '#', label: 'Partnership' },
//       { href: '#', label: 'Events' },
//       { href: '#', label: 'Data Analyst' },
//     ],
//   },
// ];

// const socialIcons = [
//   { href: '#', icon: FaInstagram, label: 'Instagram' },
//   { href: '#', icon: FaFacebookF, label: 'Facebook' },
//   { href: '#', icon: FaTwitter, label: 'Twitter' },
//   { href: '#', icon: FaLinkedinIn, label: 'LinkedIn' },
//   { href: '#', icon: FaGooglePlusG, label: 'Google Plus' }, // Note: Google+ is deprecated
//   { href: '#', icon: FaYoutube, label: 'YouTube' },
// ];

function Footer() {
  return (
    <motion.footer
    id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-brand-dark text-footer-text-secondary pt-16 md:pt-24 pb-8 rounded-t-4xl md:rounded-t-5xl" // Large top rounding
    >
      <div className="container mx-auto px-6 sm:px-8">
        {/* Top CTA Section */}
        <AnimatedWrapper
          variants={staggerContainer(0.2, 0)}
          className="pb-12 md:pb-16 border-b border-footer-divider"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
            <motion.div variants={fadeInUp(0.6)} className="lg:w-2/3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-footer-text-primary leading-tight tracking-tight mb-3 sm:mb-4">
                READY TO WORK WITH US?
              </h2>
              <p className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                Partner with our digital agency for your business with amazing
                results.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp(0.6, 0.2)}
              className="flex-shrink-0 mt-6 lg:mt-0"
            >
              <CircularGetStartedButton />
            </motion.div>
          </div>
        </AnimatedWrapper>

        {/* Main Footer Content Grid */}
        {/* <AnimatedWrapper variants={staggerContainer(0.2, 0.2)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 py-12 md:py-16">
          <motion.div variants={fadeInUp(0.6)} className="md:col-span-2 lg:col-span-2">
            <h3 className="text-xl font-semibold text-footer-text-primary mb-4">DIGIMON</h3>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              We know how important customer experience is for a business and therefore, we strive to deliver the best.
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-social-icon-bg hover:bg-social-icon-hover-bg rounded-full flex items-center justify-center text-footer-text-primary transition-colors duration-300"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((column) => (
            <motion.div variants={fadeInUp(0.6)} key={column.title}>
              <h4 className="text-md font-semibold text-footer-text-primary mb-5">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-sm hover:text-footer-accent-green hover:underline transition-colors duration-200"
                      whileHover={{ x: 3 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </AnimatedWrapper> */}

        {/* Copyright */}
        <div className="text-center text-xs pt-8 border-t border-footer-divider">
          <p>BehindTheDesks.</p>
          <p className="mt-1">
            Copyright © {new Date().getFullYear()} BehindTheDesks. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
