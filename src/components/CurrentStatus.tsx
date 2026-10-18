import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const focusAreas = [
  'AI Product',
  '0→1 Product',
  'Product & Growth',
  'AI Execution',
  'GTM',
];

export const CurrentStatus: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="current-status"
      className="w-full py-20 md:py-28 lg:py-32 bg-white text-black px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0 }}
          className="mb-8 md:mb-10"
        >
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase">
            // Current Status //
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-12 md:mb-16 max-w-4xl"
        >
          BUILDING WHILE LEARNING
          <br />
          <span className="text-gray-400">IN THE REAL WORLD.</span>
        </motion.h2>

        {/* Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <span className="font-sans text-[10px] tracking-[0.2em] text-gray-300 uppercase block mb-2">
              EDUCATION
            </span>
            <p className="font-serif text-xl md:text-2xl">BBA AI</p>
            <p className="font-sans text-sm text-gray-500 mt-1">Galgotias University</p>
          </motion.div>

          {/* Independent Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <span className="font-sans text-[10px] tracking-[0.2em] text-gray-300 uppercase block mb-2">
              INDEPENDENT WORK
            </span>
            <p className="font-serif text-xl md:text-2xl">AI Product & Growth Operator</p>
            <p className="font-sans text-sm text-gray-500 mt-1">Independent</p>
          </motion.div>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <span className="font-sans text-[10px] tracking-[0.2em] text-gray-300 uppercase block mb-2">
              CURRENT FOCUS
            </span>
            <div className="flex flex-wrap gap-2 mt-1">
              {focusAreas.map((area, index) => (
                <span
                  key={index}
                  className="font-sans text-xs text-gray-500 bg-neutral-50 px-2 py-1"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Current Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <span className="font-sans text-[10px] tracking-[0.2em] text-gray-300 uppercase block mb-2">
              CURRENT PRODUCT
            </span>
            <p className="font-serif text-xl md:text-2xl">ITER8OS</p>
            <p className="font-sans text-sm text-gray-500 mt-1">Founder Decision OS</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
