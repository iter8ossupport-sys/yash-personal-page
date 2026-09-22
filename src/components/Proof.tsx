import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const proofMetrics = [
  {
    value: '5+',
    label: 'SHIPPED PRODUCTS',
    detail: 'From local commerce to AI workflows, tested with real users.',
  },
  {
    value: '500+',
    label: 'FOUNDERS & USERS ENGAGED',
    detail: 'Across user interviews, direct outreach, sales, and active testing.',
  },
  {
    value: '100%',
    label: 'EVIDENCE-ANCHORED',
    detail: 'Zero speculation. Every decision backed by behavioral signals.',
  },
  {
    value: '24h',
    label: 'DECISION CYCLE SPEED',
    detail: 'Disciplined rapid turnaround from feedback to concrete next action.',
  },
];

export const Proof: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="proof"
      className="w-full py-24 md:py-32 lg:py-40 bg-neutral-900 text-white px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-neutral-400 uppercase">
            // Track Record & Evidence //
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-16 md:mb-24 max-w-5xl"
        >
          REAL ARTIFACTS.
          <br />
          <span className="text-neutral-500">MEASURABLE OUTCOMES.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {proofMetrics.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="border-t border-neutral-800 pt-8"
            >
              <div className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight mb-3 text-white">
                {item.value}
              </div>
              <div className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-neutral-300 mb-3">
                {item.label}
              </div>
              <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
