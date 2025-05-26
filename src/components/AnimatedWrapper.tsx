import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// --- Reusable Animated Wrapper Component ---
interface AnimatedWrapperProps {
  children: React.ReactNode;
  variants?: any; // Framer Motion Variants (optional, can be applied directly to motion.div)
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
  // Allow passing motion props directly
  [key: string]: any; // For other motion props like initial, animate, whileHover etc.
}
export const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  variants,
  className,
  threshold = 0.15, // Lower threshold for earlier trigger
  triggerOnce = true,
  ...motionProps // Collect other motion props
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: triggerOnce,
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!triggerOnce) {
      controls.start("hidden");
    }
  }, [controls, inView, triggerOnce]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      {...motionProps} // Spread other motion props
    >
      {children}
    </motion.div>
  );
};
