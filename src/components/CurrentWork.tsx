import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const workflowSteps = [
  { label: 'FOUNDER CONTEXT', description: 'Understand the real situation' },
  { label: 'ADAPTIVE QUESTIONS', description: 'Ask based on context & stage' },
  { label: 'ACTUAL SITUATION', description: 'Surface the real bottleneck' },
  { label: 'BOTTLENECK', description: 'Identify what matters most' },
  { label: 'EVIDENCE-DRIVEN EXPERIMENT', description: 'Define measurable action' },
  { label: 'SUCCESS CRITERIA', description: 'Clear outcome definition' },
  { label: 'NEXT DECISION', description: 'Evidence → Decision → Action' },
];

const evolutionSteps = [
  { stage: 'IDEA', description: 'Founder decision problem' },
  { stage: 'EARLY PRODUCT', description: 'Initial workflow design' },
  { stage: 'USER FEEDBACK', description: 'Real founder conversations' },
  { stage: 'REPEATABLE FRAMEWORK', description: 'Decision quality system' },
  { stage: 'CURRENT EXPERIMENTS', description: 'Pre-validation → 100 users' },
];

export const CurrentWork: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="current-work"
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
            // Current Work //
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6 md:mb-10"
        >
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight">
            ITER8OS
          </h2>
          <p className="font-sans text-xs md:text-sm tracking-[0.2em] text-gray-400 uppercase mt-4">
            FOUNDER DECISION OS
          </p>
        </motion.div>

        {/* Core Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <p className="font-sans text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            "Founders can collect advice, research, and ideas endlessly — but still struggle to identify the one bottleneck that matters most right now."
          </p>
        </motion.div>

        {/* Product Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-16 md:mb-24"
        >
          <h3 className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase mb-8">
            PRODUCT WORKFLOW
          </h3>
          
          {/* Desktop: Horizontal Flow */}
          <div className="hidden lg:flex items-start justify-between gap-2 overflow-x-auto pb-4">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.45 + index * 0.08 }}
                className="flex-1 min-w-[120px] group"
              >
                <div className="flex flex-col items-center text-center px-2">
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mb-3 group-hover:border-black transition-colors">
                    <ArrowDown className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                  </div>
                  <span className="font-sans text-[10px] md:text-xs tracking-[0.1em] text-black uppercase mb-1">
                    {step.label}
                  </span>
                  <span className="font-sans text-[9px] text-gray-400">
                    {step.description}
                  </span>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <ArrowRight className="w-4 h-4 text-gray-200" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet: Vertical Flow */}
          <div className="lg:hidden flex flex-col gap-4">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.45 + index * 0.06 }}
                className="flex items-start gap-4 py-3 border-t border-gray-100 first:border-t-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                    <ArrowDown className="w-3 h-3 text-gray-400" />
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="w-px h-8 bg-gray-100 mt-2" />
                  )}
                </div>
                <div className="flex-1">
                  <span className="font-sans text-xs tracking-[0.1em] text-black uppercase block mb-1">
                    {step.label}
                  </span>
                  <span className="font-sans text-[10px] text-gray-400">
                    {step.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Stage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mb-16 md:mb-24"
        >
          <h3 className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase mb-6">
            CURRENT STAGE
          </h3>
          <div className="flex items-center gap-4">
            <span className="font-serif text-2xl md:text-3xl lg:text-4xl">Pre-validation</span>
            <ArrowRight className="w-5 h-5 text-gray-300" />
            <span className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-400">100 users</span>
          </div>
          <p className="font-sans text-sm md:text-base text-gray-600 mt-4 max-w-2xl">
            Current focus: Turn founder situations into structured, evidence-driven decisions rather than generic AI advice.
          </p>
        </motion.div>

        {/* Evolution Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mb-16 md:mb-24"
        >
          <h3 className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase mb-8">
            EVOLUTION
          </h3>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-2">
            {evolutionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.75 + index * 0.08 }}
                className="flex-1 group"
              >
                <div className="border-t border-gray-200 pt-4 group-hover:border-black transition-colors">
                  <span className="font-sans text-xs tracking-[0.1em] text-black uppercase block mb-1">
                    {step.stage}
                  </span>
                  <span className="font-sans text-[10px] text-gray-400 block">
                    {step.description}
                  </span>
                </div>
                {index < evolutionSteps.length - 1 && (
                  <div className="hidden md:flex justify-center mt-4">
                    <ArrowRight className="w-4 h-4 text-gray-200" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Product Risk */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mb-16 md:mb-20 p-6 md:p-8 bg-gray-50 border-l-2 border-gray-200"
        >
          <h4 className="font-sans text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-3">
            PRODUCT RISK
          </h4>
          <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
            Generic advice is not enough. The product must earn value through context, adaptive questioning, evidence, measurable experiments, and repeatable decision quality.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://iter8os-final-page-one.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-sans text-xs tracking-[0.2em] uppercase hover:bg-neutral-900 transition-all duration-300"
          >
            View Iter8OS
            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          
          <Link
            to="/case-study/iter8os"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-sans text-xs tracking-[0.2em] uppercase border border-gray-200 hover:border-black transition-all duration-300"
          >
            View Case Study
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
