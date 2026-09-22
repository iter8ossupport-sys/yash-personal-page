import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const flowSteps = [
  { number: '01', title: 'HUMAN PROBLEM', description: 'Identify the real problem the user is trying to solve.' },
  { number: '02', title: 'CONTEXT', description: 'Understand situation, constraints, goals, environment.' },
  { number: '03', title: 'AI CAPABILITY', description: 'Find where AI can meaningfully improve the workflow.' },
  { number: '04', title: 'PRODUCT WORKFLOW', description: 'Turn the capability into a usable product flow.' },
  { number: '05', title: 'USER INTERACTION', description: 'Design how users provide context and receive output.' },
  { number: '06', title: 'REAL-WORLD BEHAVIOR', description: 'Observe what users actually do after using the product.' },
  { number: '07', title: 'FEEDBACK', description: 'Capture outcomes, feedback, and failure points.' },
  { number: '08', title: 'IMPROVEMENT', description: 'Use evidence to change the product or workflow.' },
];

export const AIProductApproach: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="ai-approach"
      className="w-full py-24 md:py-32 lg:py-40 bg-white text-black px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0 }}
          className="mb-10 md:mb-14"
        >
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase">
            // How I Build With AI //
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-6 md:mb-10 max-w-5xl"
        >
          <span className="inline-block">HUMAN PROBLEM</span>
          <span className="inline-block mx-2 md:mx-4 text-gray-300">→</span>
          <span className="inline-block">AI PRODUCT SYSTEM</span>
        </motion.h2>

        {/* Supporting Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-sans text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mb-16 md:mb-24"
        >
          AI is not the product by itself. The product is the workflow created around a real human problem.
        </motion.p>

        {/* Desktop: Horizontal Flow - Compact */}
        <div className="hidden lg:block mb-16">
          <div className="flex items-start justify-between gap-1">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + index * 0.05 }}
                className="group relative flex-1 min-w-0"
              >
                <div className="relative flex flex-col items-center text-center px-1">
                  {/* Number */}
                  <span className="font-sans text-[9px] tracking-[0.15em] text-gray-300 mb-1">
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-[11px] lg:text-xs xl:text-sm mb-1 tracking-tight leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[9px] lg:text-[10px] text-gray-500 leading-relaxed max-w-[100px] xl:max-w-[120px]">
                    {step.description}
                  </p>

                  {/* Connecting Arrow */}
                  {index < flowSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      className="absolute top-1/2 -right-1 transform -translate-y-1/2 z-10"
                    >
                      <ArrowRight className="w-3 h-3 text-gray-300" strokeWidth={1.5} />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Loop Back Indicator */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center mt-10"
          >
            <div className="flex items-center gap-2 text-gray-300">
              <span className="font-sans text-[9px] tracking-[0.15em] uppercase">IMPROVEMENT</span>
              <div className="w-4 h-px bg-gray-200" />
              <span className="font-sans text-sm">↺</span>
              <div className="w-4 h-px bg-gray-200" />
              <span className="font-sans text-[9px] tracking-[0.15em] uppercase text-gray-400">HUMAN PROBLEM</span>
            </div>
          </motion.div>
        </div>

        {/* Tablet: 4x2 Grid */}
        <div className="hidden md:block lg:hidden mb-16">
          <div className="grid grid-cols-4 gap-4">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + index * 0.05 }}
                className="group relative"
              >
                <div className="relative flex flex-col items-center text-center p-3 bg-neutral-50">
                  <span className="font-sans text-[9px] tracking-[0.15em] text-gray-300 mb-1">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-xs mb-1 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[9px] text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Flow */}
        <div className="md:hidden mb-16">
          <div className="flex flex-col">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + index * 0.05 }}
                className="group relative"
              >
                <div className="flex items-start gap-3 py-3 border-t border-gray-100 first:border-t-0">
                  {/* Number & Arrow Column */}
                  <div className="flex flex-col items-center">
                    <span className="font-sans text-[10px] tracking-[0.2em] text-gray-300 mb-1">
                      {step.number}
                    </span>
                    {index < flowSteps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={isInView ? { opacity: 1, height: 20 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                        className="flex flex-col items-center mt-1"
                      >
                        <div className="w-px h-4 bg-gray-200" />
                        <ArrowDown className="w-3 h-3 text-gray-300 -mt-1" strokeWidth={1.5} />
                      </motion.div>
                    )}
                    {index === flowSteps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 1 }}
                        className="flex flex-col items-center mt-1"
                      >
                        <div className="w-px h-4 bg-gray-200" />
                        <span className="font-sans text-sm text-gray-300 mt-1">↺</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Content Column */}
                  <div className="flex-1 pb-1">
                    <h3 className="font-serif text-sm tracking-tight mb-0.5">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[10px] text-gray-500 leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
