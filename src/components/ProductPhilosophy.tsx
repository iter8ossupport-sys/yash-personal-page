import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const principles = [
  {
    number: '01',
    title: 'PROBLEM OVER CODE',
    statement: 'Technology is an implementation detail.',
    detail: 'Users never buy your architecture; they buy relief from friction. Always anchor decisions in the raw, messy reality of the user rather than what is intellectually fun to engineer.',
  },
  {
    number: '02',
    title: 'RAPID PROTOTYPE, SLOW ABANDON',
    statement: 'Fast cycles to truth, sustained conviction on signal.',
    detail: 'Ship minimal loops in days to get authentic user behavior. Once real pull or pain is validated, commit deeply and compound iterations instead of chasing novelty.',
  },
  {
    number: '03',
    title: 'EVIDENCE-DRIVEN DECISIONS',
    statement: 'Zero tolerance for vanity metrics or speculative roadmap decks.',
    detail: 'Every feature, pivot, or kill decision must be backed by observed usage, retained actions, or willingness to pay. Trust empirical data over internal consensus.',
  },
  {
    number: '04',
    title: 'WORKFLOW IS THE PRODUCT',
    statement: 'AI models alone are commodities; the friction-free loop is the asset.',
    detail: 'An LLM raw output is not a business. The real moat lives in context curation, human feedback loops, error resilience, and embedding effortlessly into the existing daily routine.',
  },
];

export const ProductPhilosophy: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="philosophy"
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
            // Product Philosophy //
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-16 md:mb-24 max-w-5xl"
        >
          HOW I THINK ABOUT
          <br />
          <span className="text-gray-400">BUILDING SOFTWARE THAT MATTERS.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {principles.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="p-8 md:p-10 border border-gray-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors duration-300"
            >
              <span className="font-sans text-[10px] tracking-[0.25em] text-gray-300 uppercase block mb-4">
                {item.number}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-xs md:text-sm font-medium text-gray-900 tracking-wide uppercase mb-4">
                {item.statement}
              </p>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
