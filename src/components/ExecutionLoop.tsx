import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDown, ArrowRight, RotateCcw } from 'lucide-react';

const stages = [
  {
    number: '01',
    title: 'PRE-THINK',
    label: 'DEFINE',
    description: 'What matters? What am I trying to create? What could block it?',
  },
  {
    number: '02',
    title: 'ACT',
    label: 'EXECUTE',
    description: 'Turn the decision into action and get something into reality.',
  },
  {
    number: '03',
    title: 'POST-THINK',
    label: 'INSPECT',
    description: 'What actually happened? What did users, behavior, and results tell me?',
  },
  {
    number: '04',
    title: 'IMPROVE',
    label: 'ADAPT',
    description: 'Keep what works, change what does not, and improve the system.',
  },
  {
    number: '05',
    title: 'REPEAT',
    label: 'COMPOUND',
    description: 'Run the improved process again with better context.',
  },
];

export const ExecutionLoop: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="execute"
      className="w-full py-24 md:py-32 lg:py-40 bg-neutral-50 text-black px-6 md:px-12 lg:px-20"
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
            // How I Execute //
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-8 md:mb-12 max-w-6xl"
        >
          <span className="inline-block">PRE-THINK</span>
          <span className="inline-block mx-2 md:mx-4 text-gray-300">→</span>
          <span className="inline-block">ACT</span>
          <span className="inline-block mx-2 md:mx-4 text-gray-300">→</span>
          <span className="inline-block">POST-THINK</span>
          <span className="inline-block mx-2 md:mx-4 text-gray-300">→</span>
          <span className="inline-block">IMPROVE</span>
          <span className="inline-block mx-2 md:mx-4 text-gray-300">→</span>
          <span className="inline-block">REPEAT</span>
        </motion.h2>

        {/* Supporting Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-sans text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mb-16 md:mb-24"
        >
          Before I build, I define what matters. I act on it, inspect what actually happened, improve from evidence, and run the loop again.
        </motion.p>

        {/* Desktop: Horizontal Execution Path */}
        <div className="hidden lg:block mb-20">
          <div className="relative flex items-start justify-between gap-2">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + index * 0.12 }}
                className="group relative flex-1 min-w-0"
              >
                {/* Stage Content */}
                <div className="relative flex flex-col items-center text-center px-4">
                  {/* Number */}
                  <span className="font-sans text-[10px] tracking-[0.2em] text-gray-300 mb-3">
                    {stage.number}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl xl:text-2xl mb-1 tracking-tight">
                    {stage.title}
                  </h3>

                  {/* Label */}
                  <span className="font-sans text-[10px] tracking-[0.15em] text-gray-400 uppercase mb-4">
                    {stage.label}
                  </span>

                  {/* Description */}
                  <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-[200px]">
                    "{stage.description}"
                  </p>

                  {/* Connecting Arrow */}
                  {index < stages.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.12 }}
                      className="absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <ArrowRight className="w-4 h-4 text-gray-300" strokeWidth={1.5} />
                    </motion.div>
                  )}
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-gray-200 transition-colors duration-300 pointer-events-none rounded-sm" />
              </motion.div>
            ))}
          </div>

          {/* Loop Back Indicator - Desktop */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex items-center justify-center mt-12"
          >
            <div className="flex items-center gap-3 text-gray-300">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase">REPEAT</span>
              <div className="w-8 h-px bg-gray-200" />
              <RotateCcw className="w-4 h-4" strokeWidth={1.5} />
              <div className="w-8 h-px bg-gray-200" />
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400">PRE-THINK</span>
            </div>
          </motion.div>
        </div>

        {/* Tablet/Mobile: Vertical Execution Path */}
        <div className="lg:hidden mb-16">
          <div className="flex flex-col">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + index * 0.12 }}
                className="group relative"
              >
                {/* Stage Row */}
                <div className="flex items-start gap-6 md:gap-10 py-6 md:py-8 border-t border-gray-100 first:border-t-0">
                  {/* Number & Arrow Column */}
                  <div className="flex flex-col items-center">
                    <span className="font-sans text-[10px] tracking-[0.2em] text-gray-300 mb-2">
                      {stage.number}
                    </span>
                    {index < stages.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={isInView ? { opacity: 1, height: 40 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.12 }}
                        className="flex flex-col items-center mt-2"
                      >
                        <div className="w-px h-8 md:h-10 bg-gray-200" />
                        <ArrowDown className="w-3 h-3 text-gray-300 -mt-1" strokeWidth={1.5} />
                      </motion.div>
                    )}
                    {index === stages.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 1.1 }}
                        className="flex flex-col items-center mt-2"
                      >
                        <div className="w-px h-6 bg-gray-200" />
                        <RotateCcw className="w-3 h-3 text-gray-300 mt-1" strokeWidth={1.5} />
                      </motion.div>
                    )}
                  </div>

                  {/* Content Column */}
                  <div className="flex-1 pb-2">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-3">
                      <h3 className="font-serif text-xl md:text-2xl tracking-tight">
                        {stage.title}
                      </h3>
                      <span className="font-sans text-[10px] tracking-[0.15em] text-gray-400 uppercase">
                        {stage.label}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-md">
                      "{stage.description}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Loop Back Indicator - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center justify-center pt-4"
          >
            <div className="flex items-center gap-2 text-gray-300">
              <div className="w-6 h-px bg-gray-200" />
              <span className="font-sans text-[9px] tracking-[0.2em] uppercase">returns to PRE-THINK</span>
              <div className="w-6 h-px bg-gray-200" />
            </div>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.25 }}
          className="border-t border-gray-200 pt-8 md:pt-10"
        >
          <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed max-w-2xl italic">
            The output of one cycle becomes better input for the next. Each loop compounds learning, evidence, and execution quality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
