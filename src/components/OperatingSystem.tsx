import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

const blocks = [
  {
    number: '01',
    title: 'PRODUCT',
    subtitle: 'Build',
    description: 'Turn a real problem into a usable product, workflow, or experiment.',
    microFlow: 'Problem → Product → Ship',
  },
  {
    number: '02',
    title: 'DISTRIBUTION',
    subtitle: 'Reach',
    description: 'Put the product in front of the right people, talk to users, and create the conditions for real adoption.',
    microFlow: 'Users → Conversations → Revenue',
  },
  {
    number: '03',
    title: 'ANALYZE',
    subtitle: 'Improve',
    description: 'Measure what actually happened, identify the strongest signal, and use it to make the next decision.',
    microFlow: 'Evidence → Decision → Improvement',
  },
];

export const OperatingSystem: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="operate"
      className="w-full py-24 md:py-32 lg:py-40 bg-white text-black px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0 }}
          className="mb-12 md:mb-16"
        >
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase">
            // How I Operate //
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-10 md:mb-14 max-w-5xl"
        >
          <span className="inline-block">PRODUCT</span>
          <span className="inline-block mx-3 md:mx-5 text-gray-300">→</span>
          <span className="inline-block">DISTRIBUTION</span>
          <span className="inline-block mx-3 md:mx-5 text-gray-300">→</span>
          <span className="inline-block">ANALYZE</span>
        </motion.h2>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-sans text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mb-16 md:mb-24"
        >
          I run every product through one continuous loop: build something useful, get it in front of real people, then use evidence to decide what changes next.
        </motion.p>

        {/* Three Operating Blocks */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 mb-16 md:mb-20">
          {blocks.map((block, index) => (
            <motion.div
              key={block.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 + index * 0.15 }}
              className="group relative flex-1 min-w-0"
            >
              {/* Block Content */}
              <div className="relative p-6 md:p-8 h-full flex flex-col transition-all duration-300 hover:bg-gray-50/50">
                {/* Number */}
                <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-gray-300 mb-4 md:mb-6">
                  {block.number}
                </span>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-2 tracking-tight">
                  {block.title}
                </h3>
                <span className="font-sans text-xs tracking-[0.15em] text-gray-400 uppercase mb-4 md:mb-6">
                  {block.subtitle}
                </span>

                {/* Description */}
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8 flex-grow">
                  "{block.description}"
                </p>

                {/* Micro Flow */}
                <div className="pt-4 border-t border-gray-100">
                  <span className="font-sans text-[10px] md:text-xs tracking-[0.1em] text-gray-400">
                    {block.microFlow}
                  </span>
                </div>

                {/* Hover Border Accent */}
                <div className="absolute inset-0 border border-transparent group-hover:border-gray-200 transition-colors duration-300 pointer-events-none" />
              </div>

              {/* Connecting Arrow - Desktop */}
              {index < blocks.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.75 + index * 0.15 }}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <ArrowRight className="w-5 h-5 text-gray-300" strokeWidth={1.5} />
                  </motion.div>
                </div>
              )}

              {/* Connecting Arrow - Mobile/Tablet */}
              {index < blocks.length - 1 && (
                <div className="flex lg:hidden justify-center my-4">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.75 + index * 0.15 }}
                  >
                    <ArrowDown className="w-4 h-4 text-gray-300" strokeWidth={1.5} />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Loop Visualization */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="hidden lg:flex items-center justify-center mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 text-gray-300">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase">PRODUCT</span>
            <div className="w-16 h-px bg-gray-200" />
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            <div className="w-16 h-px bg-gray-200" />
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase">DISTRIBUTION</span>
            <div className="w-16 h-px bg-gray-200" />
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            <div className="w-16 h-px bg-gray-200" />
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase">ANALYZE</span>
            <div className="w-16 h-px bg-gray-200" />
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            <div className="w-8 h-px bg-gray-200" />
            <span className="font-sans text-[10px] tracking-[0.1em] text-gray-400">↺</span>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="border-t border-gray-100 pt-8 md:pt-10"
        >
          <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed max-w-2xl italic">
            Build without distribution creates unused products. Distribution without analysis creates noise. The loop needs all three.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
