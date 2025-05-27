// src/components/animations/variants.ts

import type { Variants } from "framer-motion";

export const staggerContainer = (staggerVal = 0.15, delayChildrenVal = 0.2) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerVal,
      delayChildren: delayChildrenVal,
    },
  },
});

export const fadeInUp = (durationVal = 0.6, delayVal = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durationVal, delay: delayVal, ease: "easeOut" },
  },
});

export const fadeIn = (durationVal = 0.8, delayVal = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durationVal, delay: delayVal, ease: "easeOut" },
  },
});

export const scaleUp = (durationVal = 0.5, delayVal = 0) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durationVal,
      delay: delayVal,
      type: "spring",
      stiffness: 120,
    },
  },
});


export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};



export const hoverEffect = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 300, damping: 15 }
};

export const tapEffect = {
  scale: 0.95
};

export const myBusinessWhatsAppNumber = "+2348076131828"

export const prefilledWhatsappMessage = "Hello! I'm interested in your digital agency services.";