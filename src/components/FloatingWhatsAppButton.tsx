// src/components/FloatingWhatsAppButton.tsx
import React from 'react';
import { motion, type AnimationProps, type TargetAndTransition, type Transition,} from 'framer-motion'; // Added Transition
import { FaWhatsapp } from 'react-icons/fa';
import { myBusinessWhatsAppNumber, prefilledWhatsappMessage } from './animations/variants';

// More specific type for hover/tap states if not using variants
type HoverTapProps = TargetAndTransition; // Can also be VariantLabels if using variants

interface FloatingWhatsAppButtonProps {

  message?: string;
  className?: string;
  ariaLabel?: string;
  initial?: AnimationProps['initial'];
  animate?: AnimationProps['animate'];
  transition?: Transition; // Use the specific Transition type
  whileHover?: HoverTapProps;
  whileTap?: HoverTapProps;
}

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({

  message = prefilledWhatsappMessage,
  className = '',
  ariaLabel = 'Chat with us on WhatsApp',
  initial = { opacity: 0, y: 20, scale: 0.8 },
  animate = { opacity: 1, y: 0, scale: 1 },
  transition = { duration: 0.5, ease: 'easeOut', delay: 1 },
  whileHover = { scale: 1.1, boxShadow: "0px 0px 15px rgba(37, 211, 102, 0.5)" }, // This is TargetAndTransition
  whileTap = { scale: 0.95 }, // This is TargetAndTransition
}) => {
  const cleanPhoneNumber = myBusinessWhatsAppNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`fixed bottom-6 animate-subtle-pulse  right-6 sm:bottom-8 sm:right-8 z-40 
                  p-3 sm:p-4 bg-green-500 hover:bg-green-600 
                  text-white rounded-full shadow-lg
                  flex items-center justify-center
                  transition-all duration-300 ease-in-out
                  ${className}`}
      initial={initial}
      animate={animate}
      transition={transition} // Pass the transition prop separately
      whileHover={whileHover}
      whileTap={whileTap}
    >
      <FaWhatsapp size={28} className="sm:w-8 sm:h-8" />
    </motion.a>
  );
};

export default FloatingWhatsAppButton;