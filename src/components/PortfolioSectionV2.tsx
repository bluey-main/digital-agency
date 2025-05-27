// src/components/PortfolioSectionV2.tsx
import React, { useRef } from "react";
import { AnimatedWrapper } from "./AnimatedWrapper"; // Assuming this is in ./AnimatedWrapper.tsx
import { fadeInUp, staggerContainer } from "./animations/variants"; // Your animation variants
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import type { PortfolioItemV2 } from "./ProjectCardV2";
import ProjectCardV2 from "./ProjectCardV2";
import mabketImage from "../assets/images/mabket.png";
import foundImage from "../assets/images/found.png";
import vipvendorImage from "../assets/images/vipvendor.png";

// --- Placeholder Data (Replace with your actual data or fetch from a source) ---
const portfolioItemsV2: PortfolioItemV2[] = [
  {
    id: "proj1",
    title: "Mabket",
    imageUrl: mabketImage,
    projectUrl: "https://www.mabket.com/",
    category: "Web Platform",
    theme: "dark",
  },
  {
    id: "proj2",
    title: "Found",
    imageUrl: foundImage,
    projectUrl: "https://www.foundng.com/",
    category: "Mobile App",
    theme: "dark",
  },
  {
    id: "proj3",
    title: "VipVendor",
    imageUrl: vipvendorImage,
    projectUrl: "https://vipvendor.ng/",
    category: "Web Application",
    theme: "dark",
  },
];

function PortfolioSectionV2() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstChild
        ? (scrollContainerRef.current.firstChild as HTMLElement).offsetWidth
        : 320; // Estimate card width
      const scrollAmount = cardWidth * 1.5; // Scroll by approx 1.5 cards
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 bg-[#F5F5F1] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper variants={fadeInUp(0.6)} className="mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark-text tracking-tight">
                BEST PROJECT
              </h2>
              <p className="text-md sm:text-lg text-brand-subtle-text mt-1 sm:mt-2">
                Explore more of our best projects.
              </p>
            </div>
            {/* <motion.button
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 5px 15px rgba(175,255,0,0.4)"}}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-lime-green text-brand-dark-text font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-button-pill shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base flex items-center whitespace-nowrap"
            >
              View more <FiArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button> */}
          </div>
        </AnimatedWrapper>

        {/* Horizontal Scroll Container / Carousel */}
        <div className="relative group">
          {" "}
          {/* Group for showing nav buttons on hover */}
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/80 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-lime-green"
          >
            <FiChevronLeft size={24} className="text-brand-dark-text" />
          </button>
          <AnimatedWrapper // Animates the entry of the entire carousel
            variants={staggerContainer(0.1, 0.1)} // Stagger the cards slightly as they load
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }} // Trigger when a bit of carousel is visible
          >
            <div
              ref={scrollContainerRef}
              className="flex  pb-8 pt-2 space-x-5 sm:space-x-6 md:space-x-8 scrollbar-hide snap-x snap-mandatory"
              // Add custom scrollbar styling via CSS if scrollbar-hide is not available
              // style={{ scrollSnapType: 'x mandatory' }} // For CSS scroll snapping
              style={{
                overflowX: "auto",
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE 10+
              }}
            >
              {portfolioItemsV2.map((item) => (
                <div
                  key={item.id}
                  className="snap-center first:pl-1 last:pr-1 sm:first:pl-0 sm:last:pr-0"
                >
                  {" "}
                  {/* Snap alignment */}
                  <ProjectCardV2 item={item} />
                </div>
              ))}
              {/* Optional: Add a "View All" card at the end */}
              {/* <motion.div
                 variants={fadeInUp(0.6)} // Ensure this variant is defined
                 className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] aspect-[3/4] flex items-center justify-center bg-brand-light-gray rounded-card shadow-card-portfolio p-6 snap-center group"
               >
                 <button className="text-brand-dark-text hover:text-primary font-semibold text-lg flex flex-col items-center transition-colors">
                   <FiSearch size={40} className="mb-3 opacity-70 group-hover:opacity-100"/>
                   View All Projects
                 </button>
               </motion.div> */}
            </div>
          </AnimatedWrapper>
          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/80 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent"
          >
            <FiChevronRight size={24} className="text-brand-dark-text" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSectionV2;
