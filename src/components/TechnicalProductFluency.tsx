import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TechnicalLayer {
  number: string;
  title: string;
  items: string[];
}

const quadrants: TechnicalLayer[] = [
  {
    number: '01',
    title: 'PRODUCT',
    items: [
      'Problem definition',
      'Requirements',
      'Prioritization',
      'Product workflows',
      'User flows',
    ],
  },
  {
    number: '02',
    title: 'AI',
    items: [
      'LLMs',
      'AI integrations',
      'Agent workflows',
      'Prompt/system design',
      'AI automation',
    ],
  },
  {
    number: '03',
    title: 'APPLICATION',
    items: [
      'Frontend concepts',
      'Backend concepts',
      'APIs',
      'Authentication',
      'Database concepts',
    ],
  },
  {
    number: '04',
    title: 'SYSTEMS',
    items: [
      'Automation',
      'Deployment',
      'Scalability concepts',
      'System trade-offs',
      'Technical constraints',
    ],
  },
];

export const TechnicalProductFluency: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="technical-fluency"
      className="w-full py-20 md:py-28 lg:py-32 bg-neutral-50 text-black px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0 }}
          className="mb-8 md:mb-12"
        >
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase">
            // Technical Product Fluency //
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-5 md:mb-8 max-w-4xl"
        >
          <span className="inline-block">PRODUCT</span>
          <span className="inline-block mx-2 md:mx-3 text-gray-300">×</span>
          <span className="inline-block">TECHNOLOGY</span>
        </motion.h2>

        {/* Supporting Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="font-sans text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mb-12 md:mb-16"
        >
          I understand enough of the technical stack to shape requirements, communicate with technical teams, evaluate trade-offs, and move products from idea to implementation.
        </motion.p>

        {/* 2 × 2 Editorial Grid:
            Row 1: PRODUCT (01) | AI (02)
            Row 2: APPLICATION (03) | SYSTEMS (04)
        */}
        <div className="border-t border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {quadrants.map((quadrant, index) => {
              const isLeft = index % 2 === 0;
              const isTop = index < 2;

              return (
                <motion.div
                  key={quadrant.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.32 + index * 0.08 }}
                  className={`group flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 ${
                    isTop ? 'border-b border-gray-200' : ''
                  } ${
                    isLeft ? 'md:border-r border-gray-200' : ''
                  } ${
                    !isTop && isLeft ? 'border-b md:border-b-0 border-gray-200' : ''
                  }`}
                >
                  <div>
                    {/* Number */}
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400">
                        {quadrant.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-3xl lg:text-4xl tracking-tight text-neutral-900 mb-6 md:mb-8">
                      {quadrant.title}
                    </h3>
                  </div>

                  {/* Compact Supporting Items */}
                  <div className="flex flex-wrap gap-2 md:gap-2.5 pt-2">
                    {quadrant.items.map((item, i) => (
                      <span
                        key={i}
                        className="font-sans text-[10px] md:text-xs text-gray-500 bg-white px-3 py-1.5 border border-gray-100 group-hover:border-gray-200 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Positioning Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="pt-8 md:pt-10"
        >
          <p className="font-sans text-sm md:text-base text-gray-500 italic">
            Product × technology — not software engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
