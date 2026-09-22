import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const competencies = [
  {
    category: '01 / DISCOVERY & STRATEGY',
    title: 'PROBLEM CLARITY',
    points: [
      'Customer & user interview synthesis without cognitive bias',
      'Uncovering genuine user friction versus polite praise',
      'ICP definition, prioritization matrices, and kill/pivot criteria',
      'Rapid prototype scoping (days, not quarters)',
    ],
  },
  {
    category: '02 / AI PRODUCT ARCHITECTURE',
    title: 'WORKFLOW & SYSTEMS DESIGN',
    points: [
      'LLM integration and prompt system reliability engineering',
      'Designing human-in-the-loop validation safeguards',
      'Translating ambiguous user requests into deterministic task structures',
      'Evaluating token economics, latency trade-offs, and failure recovery',
    ],
  },
  {
    category: '03 / GTM & DISTRIBUTION',
    title: 'FOUNDER-LED GROWTH',
    points: [
      'Direct outreach, customer conversations, and inbound funnel setup',
      'High-conversion positioning and editorial clarity',
      'Product analytics tracking real retention actions over vanity visits',
      'Building momentum through public build loops and rapid shipping',
    ],
  },
];

export const WhatIBring: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="what-i-bring"
      className="w-full py-24 md:py-32 lg:py-40 bg-white text-black px-6 md:px-12 lg:px-20 border-t border-gray-100"
    >
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase">
            // Core Competencies //
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-16 md:mb-24 max-w-5xl"
        >
          WHAT I BRING TO
          <br />
          <span className="text-gray-400">AN EARLY-STAGE TEAM.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {competencies.map((comp, idx) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="p-8 md:p-10 border border-gray-100 bg-neutral-50/40 hover:bg-neutral-50 transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-sans text-[10px] tracking-[0.2em] text-gray-400 uppercase block mb-4">
                  {comp.category}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-6">
                  {comp.title}
                </h3>
                <ul className="space-y-3">
                  {comp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
