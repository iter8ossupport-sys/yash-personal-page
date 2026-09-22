import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

export const FounderNavigation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="founder-nav"
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
            // More From Yash //
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-16 md:mb-24 max-w-5xl"
        >
          PROFESSIONAL WORK
          <span className="text-gray-300 mx-3">↔</span>
          <br className="md:hidden" />
          FOUNDER JOURNEY
        </motion.h2>

        {/* Two Column Bridge */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
          {/* Left: Professional Portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex-1 group relative bg-neutral-50 p-8 md:p-12 lg:p-16 hover:bg-neutral-100 transition-colors duration-300"
          >
            <span className="font-sans text-[10px] tracking-[0.2em] text-gray-300 uppercase block mb-4">
              PROFESSIONAL PORTFOLIO
            </span>

            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4">
              AI Product / 0→1 Product & Growth
            </h3>

            <p className="font-sans text-sm text-gray-600 leading-relaxed mb-8 max-w-md">
              Current focus: Product, AI, Growth, Execution.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Product', 'AI', 'Growth', 'Execution'].map((item, index) => (
                <span
                  key={index}
                  className="font-sans text-xs text-gray-500 bg-white px-3 py-1.5 border border-gray-100"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Hover Border */}
            <div className="absolute inset-0 border border-transparent group-hover:border-gray-200 transition-colors duration-300 pointer-events-none" />
          </motion.div>

          {/* Center: Connecting Line */}
          <div className="hidden lg:flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-px bg-gray-200" />
              <ArrowRight className="w-4 h-4 text-gray-300" />
              <div className="w-8 h-px bg-gray-200" />
            </motion.div>
          </div>

          {/* Mobile: Arrow */}
          <div className="flex lg:hidden justify-center py-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <ArrowRight className="w-5 h-5 text-gray-300 rotate-90" />
            </motion.div>
          </div>

          {/* Right: Founder/Builder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex-1 group relative bg-black text-white p-8 md:p-12 lg:p-16 hover:bg-neutral-900 transition-colors duration-300"
          >
            <span className="font-sans text-[10px] tracking-[0.2em] text-gray-500 uppercase block mb-4">
              FOUNDER / BUILDER
            </span>

            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4">
              Explore the broader journey
            </h3>

            <p className="font-sans text-sm text-gray-400 leading-relaxed mb-8 max-w-md">
              Explore the broader products, experiments, systems, and long-term direction behind the work.
            </p>

            <a
              href="https://yash-live-lilac.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-gray-300 hover:text-white transition-colors duration-300"
            >
              View Founder Page
              <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>

            {/* Hover Border */}
            <div className="absolute inset-0 border border-transparent group-hover:border-gray-700 transition-colors duration-300 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
