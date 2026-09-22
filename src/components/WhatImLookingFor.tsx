import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const criteria = [
  {
    tag: 'ROLE FOCUS',
    title: 'AI Product / 0→1 Product & Growth',
    description: 'High ownership positions where problem discovery, prototyping, and user distribution intersect directly.',
  },
  {
    tag: 'STAGE & CULTURE',
    title: 'High-Pace, High-Agency Environments',
    description: 'Founders and teams that value speed-of-iteration, intellectual honesty, transparent evidence, and shipping over politics.',
  },
  {
    tag: 'PROBLEM DOMAIN',
    title: 'Workflows Where AI Solves Real Friction',
    description: 'B2B workflows, decision intelligence, automation systems, or high-value productivity tools where evidence leads to clear customer ROI.',
  },
];

export const WhatImLookingFor: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="looking-for"
      className="w-full py-24 md:py-32 lg:py-40 bg-neutral-50 text-black px-6 md:px-12 lg:px-20 border-t border-gray-100"
    >
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase">
            // Ideal Engagement //
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-16 md:mb-24 max-w-5xl"
        >
          WHAT I AM
          <br />
          <span className="text-gray-400">LOOKING TO CONTRIBUTE TO.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {criteria.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="p-8 md:p-10 bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300"
            >
              <span className="font-sans text-[10px] tracking-[0.2em] text-gray-400 uppercase block mb-3">
                {item.tag}
              </span>
              <h3 className="font-serif text-xl md:text-2xl tracking-tight mb-4">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
