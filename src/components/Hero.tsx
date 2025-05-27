// src/components/Hero.tsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {  FiHeart } from "react-icons/fi";
import personSrc from "../assets/images/hero-person.png";
import avatar1 from "../assets/images/avatar1.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import { AnimatedWrapper } from "./AnimatedWrapper";
import { fadeIn, fadeInUp, myBusinessWhatsAppNumber, prefilledWhatsappMessage, scaleUp, staggerContainer } from "./animations/variants";
// Assuming AnimatedWrapper is in the same directory or imported correctly
// If AnimatedWrapper is defined in this file, you don't need to import it.
// For this example, I'll assume it's defined above or imported.




// --- NEW LETTER ANIMATION VARIANTS ---
const letterContainerVariants = {
  hidden: { opacity: 1 }, // Container can be visible, children animate
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07, // Time between each letter's animation
      delayChildren: 0.1, // Initial delay before the first letter starts (relative to its parent)
    },
  },
};

const letterEnterVariant = {
  hidden: { opacity: 0, y: 25, scale: 0.7, rotateX: -45, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { type: "spring", damping: 10, stiffness: 150, duration: 0.4 },
  },
};

// --- Sub-Components (StatCard, ClientCard, ProgressRing, ServiceTag, CircularText) ---
// (Assuming these are defined as in your provided code, ensure ProgressRing uses a unique gradient ID like "heroProgressGradient")
// For brevity, I'm keeping their definitions as you provided them.
// Ensure ProgressRing's gradient ID is unique if used elsewhere:
// e.g., in ProgressRing: <linearGradient id="heroProgressGradient" ... >

interface StatCardProps {
  title: string;
  value?: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  children,
  className,
}) => (
  <div
    className={`bg-brand-card-bg text-brand-card-text p-6 rounded-4xl shadow-2xl transform-gpu ${className}`}
  >
    <p className="text-sm text-gray-400 mb-1">{title}</p>
    {children
      ? children
      : value && <p className="text-4xl font-bold mb-2">{value}</p>}
    <p className="text-xs text-gray-400">{description}</p>
  </div>
);

const ClientCard: React.FC = () => (
  <div className="bg-brand-card-bg text-brand-card-text p-6 rounded-4xl shadow-2xl transform-gpu relative overflow-hidden">
    <p className="text-3xl font-bold mb-1">5000+</p>
    <p className="text-sm text-gray-400 mb-4">Total Clients</p>
    <div className="flex -space-x-3">
      <img
        className="w-10 h-10 rounded-full border-2 border-brand-card-bg object-cover"
        src={avatar1}
        alt="Client 1"
      />
      <img
        className="w-10 h-10 rounded-full border-2 border-brand-card-bg object-cover"
        src={avatar2}
        alt="Client 2"
      />
      <div className="w-10 h-10 rounded-full border-2 border-brand-card-bg bg-brand-accent flex items-center justify-center text-brand-card-bg font-semibold text-sm">
        {" "}
        +2{" "}
      </div>
    </div>
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white opacity-50 rounded-full transform rotate-45"></div>
  </div>
);

const ProgressRing: React.FC<{ percentage: number }> = ({ percentage }) => {
  const radius = 35;
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({
        strokeDashoffset: circumference - (percentage / 100) * circumference,
        transition: { duration: 1.5, ease: "circOut", delay: 0.3 },
      });
    }
  }, [controls, inView, circumference, percentage]);

  return (
    <div className="relative w-24 h-24 my-2">
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 80 80"
        className="-rotate-90"
      >
        <circle
          stroke="#333"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius + stroke / 2}
          cy={radius + stroke / 2}
        />
        <motion.circle
          ref={ref}
          initial={{ strokeDashoffset: circumference }}
          animate={controls}
          stroke="url(#heroProgressGradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + " " + circumference}
          r={normalizedRadius}
          cx={radius + stroke / 2}
          cy={radius + stroke / 2}
        />
        <defs>
          <linearGradient
            id="heroProgressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff5040" />
            <stop offset="100%" stopColor="#ff5040" />
          </linearGradient>
        </defs>
      </svg>
      <AnimatedWrapper variants={scaleUp(0.5, 0.8)}>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-brand-accent">
          {percentage}%
        </div>
      </AnimatedWrapper>
    </div>
  );
};

const ServiceTag: React.FC<{ text: string; active?: boolean }> = ({
  text,
  active,
}) => (
  <div
    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium cursor-pointer transition-all duration-300 ease-out transform hover:scale-105 ${
      active
        ? "bg-brand-tag-bg-active text-brand-tag-text-active shadow-md"
        : "bg-brand-tag-bg text-brand-tag-text hover:bg-gray-200"
    }`}
  >
    {text}
  </div>
);
const CircularText: React.FC = () => (
  <div className="">
    {" "}
    {/* Let parent control positioning */}
    <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48">
      <svg
        viewBox="0 0 100 100"
        className="animate-spin-slow fill-brand-dark w-full h-full"
      >
        <path
          id="circlePathHeroUnique"
          d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          fill="none"
        />
        <text fontSize="8.5" letterSpacing="1.45" fill="currentColor" dy="-1">
          {" "}
          {/* dy for slight vertical adjustment */}
          <textPath href="#circlePathHeroUnique" startOffset="0%" className="text-bran sm:text-brand-dark">
            • CHAT WITH US NOW • CHAT WITH US NOW !!!!
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-brand-dark text-3xl sm:text-5xl font-black pointer-events-none">
        *
      </div>
    </div>
  </div>
);

// Helper component for an animated word
interface AnimatedWordProps {
  text: string;
  delay?: number; // Optional delay for this word's animation start
  containerVariants?: any;
  letterVariants?: any;
  className?: string;
}
const AnimatedWord: React.FC<AnimatedWordProps> = ({
  text,
  delay = 0,
  containerVariants = letterContainerVariants,
  letterVariants = letterEnterVariant,
  className = ''
}) => {
  // Adjust delayChildren in containerVariants if a specific delay is passed
  const effectiveContainerVariants = {
    ...containerVariants,
    visible: {
      ...containerVariants.visible,
      transition: {
        ...containerVariants.visible?.transition,
        delayChildren: (containerVariants.visible?.transition?.delayChildren || 0) + delay,
      },
    },
  };

  return (
    <motion.span
      variants={effectiveContainerVariants}
      initial="hidden" // Will be triggered by parent AnimatedWrapper or Hero's main stagger
      animate="visible"
      aria-label={text}
      style={{ display: 'inline-block' }}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${text}-${char}-${index}`}
          variants={letterVariants}
          style={{ display: 'inline-block' }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};


// --- Main Hero Component ---
function Hero() {
// No need to split the full headline string in this case
  // We compose it with AnimatedWord components

  // Calculate approximate delays for sequencing
  const visionDelay = 0;
  const sparkDelay = visionDelay + "Vision".length * 0.07 + 0.1; // Base letter stagger + small gap
  const awesomeDelay = sparkDelay + "Spark".length * 0.07 + 0.1;
  const afterAwesomeTextDelay = awesomeDelay + "Awesome".length * 0.07 + 0.1;

      const cleanPhoneNumber = myBusinessWhatsAppNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(prefilledWhatsappMessage);
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;

  return (
    <section id="home" className="relative bg-[#f3f5f7] min-h-screen overflow-hidden pt-28 md:pt-32 pb-10">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center relative z-10 h-full">

          <AnimatedWrapper
          variants={staggerContainer(0.2, 0.1)} // This will stagger H1 and P
          className="w-full flex flex-col justify-center items-center px-9 sm:px-0 lg:max-w-3xl text-left mb-12 md:mb-16 mt-10 md:mt-0"
        >
          <motion.h1 // The H1 itself can have an overall entry animation if needed
            // variants={fadeInUp(0.7)} // Or let its children handle it primarily
            className="font-display text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark leading-tight mb-6"
          >
            <motion.span variants={fadeInUp(0.6, visionDelay)} style={{ display: 'inline' }}>Your </motion.span>
            <AnimatedWord text="Vision" delay={visionDelay} className="mx-1 text-brand-accent" /> {/* Example styling */}
            <motion.span variants={fadeInUp(0.6, sparkDelay)} style={{ display: 'inline' }}> + Our </motion.span>
            <AnimatedWord text="Spark" delay={sparkDelay} className="mx-1 text-brand-accent" /> {/* Example styling */}
            <motion.span variants={fadeInUp(0.6, awesomeDelay)} style={{ display: 'inline' }}><br className="inline-block sm:hidden"/> = <br className="inline-block sm:hidden"/> Something </motion.span>
            <AnimatedWord text="Awesome." delay={awesomeDelay} className="mx-1 text-green-500" /> {/* Example styling */}
          </motion.h1>

          <motion.p
            variants={fadeInUp(0.7, afterAwesomeTextDelay + 0.2)} // Delay based on H1 animation
            className="text-base text-center sm:text-2xl text-black max-w-lg"
          >
           Partner with us to launch amazing products and scale your success.
          </motion.p>
        </AnimatedWrapper>
       

        <AnimatedWrapper
          variants={scaleUp(0.8, 0.8)} // Adjusted delay
          className="relative flex justify-center items-center z-20 my-6 md:my-8" // Added margin
        >
          <a     href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={'Chat with us on WhatsApp'}>
          <CircularText />


      </a>
        </AnimatedWrapper>

        {/* <AnimatedWrapper
          variants={staggerContainer(0.3, 1.0)} // Adjusted delay
          className="relative w-full mt-0 md:mt-0" // Adjusted margin
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <motion.div
              variants={fadeInUp(0.7, 0)}
              className="md:col-span-1 self-center md:self-start mb-8 md:mb-0"
            >
              <StatCard
                title="First Round of funding"
                description="263 Contributions in the last year"
              >
                <ProgressRing percentage={75} />
                <p className="text-5xl font-bold text-brand-card-text mt-1">
                  2.5K
                </p>
              </StatCard>
            </motion.div>

            <div className="md:col-span-1 relative  hidden sm:flex flex-col items-center justify-end order-first md:order-none min-h-[300px] md:min-h-[450px] lg:min-h-[500px]">
              <AnimatedWrapper
                variants={fadeIn(1, 0.2)}
                className="h-full w-full flex justify-center items-end"
              >
                <motion.img
                  src={personSrc}
                  alt="Person looking up"
                  className="absolute bottom-0 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto z-10 pointer-events-none"
                  style={{ maxHeight: "80vh", objectFit: "contain" }}
                />
              </AnimatedWrapper>
              <AnimatedWrapper
                variants={fadeInUp(0.6, 0.5)}
                className="text-center text-brand-dark relative z-0 md:z-20 mb-4 md:mb-2"
              >
                <span className="text-4xl text-white sm:text-5xl font-bold">
                  4.875
                </span>
                <FiHeart className="inline-block text-red-500 ml-1 mb-1" />
                <p className="text-xs sm:text-sm text-white">
                  Project Views last year
                </p>
              </AnimatedWrapper>
            </div>

            <AnimatedWrapper
              variants={fadeInUp(0.7, 0.1)}
              className="md:col-span-1 flex flex-col gap-6 self-center mb-10 md:self-end"
            >
              <ClientCard />
              <motion.div
                variants={staggerContainer(0.1, 0.3)}
                // No need for initial/animate here if parent AnimatedWrapper handles it
                className="flex flex-wrap gap-2 justify-center md:justify-start"
              >
                {[
                  { text: "Mobile App Design", active: true },
                  { text: "Games" },
                  { text: "Programming", active: true },
                  { text: "Search Engine OPT" },
                  { text: "Software Development for Business" },
                ].map((tag) => (
                  <motion.div variants={scaleUp(0.4)} key={tag.text}>
                    <ServiceTag text={tag.text} active={tag.active} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedWrapper>
          </div>
        </AnimatedWrapper> */}
      </div>

      <AnimatedWrapper
        variants={scaleUp(0.7, 1.2)}
        className="absolute top-1/4 left-1/4 w-32 h-32 -z-0"
      >
        {" "}
        {/* Ensure z-index if needed */}
        <div className="w-full h-full bg-brand-accent opacity-10 rounded-full filter blur-xl animate-float-subtle"></div>
      </AnimatedWrapper>
      <AnimatedWrapper
        variants={scaleUp(0.7, 1.4)}
        className="absolute bottom-1/4 right-1/4 w-24 h-24 -z-0"
      >
        {" "}
        {/* Ensure z-index if needed */}
        <div className="w-full h-full bg-secondary opacity-10 rounded-full filter blur-xl animate-float-subtle animation-delay-3000"></div>
      </AnimatedWrapper>
    </section>
  );
}

export default Hero;
