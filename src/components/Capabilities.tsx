import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const capabilities = [
  {
    number: '01',
    title: 'PRODUCT',
    items: [
      'Problem Discovery',
      'Customer Research',
      'ICP Definition',
      'Product Validation',
      'Product Strategy',
      'Build–Measure–Learn',
    ],
    description: 'Turn ambiguous problems into clear product decisions, experiments, and priorities.',
  },
  {
    number: '02',
    title: 'AI',
    items: [
      'AI Product Strategy',
      'LLM / Agent Workflows',
      'AI-assisted Prototyping',
      'AI Automation',
      'AI Product Workflows',
    ],
    description: 'Translate real user problems into practical AI-powered product workflows.',
  },
  {
    number: '03',
    title: 'TECHNICAL PRODUCT',
    items: [
      'APIs',
      'Frontend / Backend Concepts',
      'Authentication',
      'Databases',
      'LLM Integration',
      'Automation',
      'Deployment',
      'Technical Requirements',
    ],
    description: 'Enough technical fluency to define requirements, understand system trade-offs, and work effectively with technical teams.',
  },
  {
    number: '04',
    title: 'GROWTH',
    items: [
      'GTM Strategy',
      'Positioning',
      'Lead Generation',
      'Cold Outreach',
      'Founder-led Sales',
      'User Acquisition',
      'PMF Testing',
    ],
    description: 'Take products beyond building through direct user conversations, distribution, sales, and market feedback.',
  },
  {
    number: '05',
    title: 'ANALYSIS',
    items: [
      'User Behavior',
      'Market Research',
      'Competitive Research',
      'Experiment Design',
      'Metrics',
      'Evidence-based Decisions',
    ],
    description: 'Turn user behavior and market signals into the next product decision.',
  },
];

export const Capabilities: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="capabilities"
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
            // What I Can Do //
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-6 md:mb-10 max-w-5xl"
        >
          <span className="inline-block">PRODUCT</span>
          <span className="inline-block mx-2 md:mx-3 text-gray-300">×</span>
          <span className="inline-block">AI</span>
          <span className="inline-block mx-2 md:mx-3 text-gray-300">×</span>
          <span className="inline-block">TECHNOLOGY</span>
          <span className="inline-block mx-2 md:mx-3 text-gray-300">×</span>
          <span className="inline-block">GROWTH</span>
        </motion.h2>

        {/* Supporting Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-sans text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mb-16 md:mb-24"
        >
          I operate across the product loop — from understanding the problem to shaping the solution, communicating with technical teams, taking it to users, and learning from the result.
        </motion.p>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + index * 0.08 }}
              className={`group relative bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 ${
                index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-sans text-[10px] tracking-[0.2em] text-gray-300 block mb-2">
                      {capability.number}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl tracking-tight">
                      {capability.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="p-1 hover:bg-gray-50 rounded transition-colors"
                    aria-label="Toggle details"
                  >
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                    </motion.div>
                  </button>
                </div>

                {/* Description - Always visible */}
                <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4">
                  {capability.description}
                </p>

                {/* Expandable Items */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-100">
                        <ul className="grid grid-cols-1 gap-2">
                          {capability.items.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.03 }}
                              className="font-sans text-xs text-gray-500 flex items-center gap-2"
                            >
                              <span className="w-1 h-1 bg-gray-300 rounded-full" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Items Preview (when collapsed) */}
                {expandedIndex !== index && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {capability.items.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="font-sans text-[10px] text-gray-400 bg-gray-50 px-2 py-1"
                      >
                        {item}
                      </span>
                    ))}
                    {capability.items.length > 3 && (
                      <span className="font-sans text-[10px] text-gray-400">
                        +{capability.items.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
