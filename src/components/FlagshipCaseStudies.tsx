import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudiesData } from '../data/caseStudies';

// Featured flagship projects representing distinct pivot/learning moments
const flagshipIds = ['kirana-x', 'resumeai', 'killarity', 'lbes', 'b2b-automation', 'iter8os'];

export const FlagshipCaseStudies: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const flagshipData = caseStudiesData.filter(p => flagshipIds.includes(p.id));

  return (
    <section
      ref={sectionRef}
      id="selected-work"
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
            // Selected Work &amp; Case Studies //
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-6 md:mb-10 max-w-5xl"
        >
          DEEP CASE STUDIES.
          <br />
          <span className="text-gray-400">EVIDENCE, REASONING, &amp; PRODUCT DECISIONS.</span>
        </motion.h2>

        {/* Supporting Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-sans text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mb-16 md:mb-24"
        >
          Not shallow summaries or landing page mockups. Deep investigations showing how I uncovered problems, framed falsifiable hypotheses, built implementations, observed reality, and made strategic decisions.
        </motion.p>

        {/* Structured Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {flagshipData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
              className="group flex flex-col justify-between bg-white border border-gray-200 hover:border-black transition-all duration-300 p-6 md:p-8"
            >
              <div>
                {/* Number & Category */}
                <div className="flex items-center justify-between text-xs font-sans tracking-[0.2em] text-gray-400 uppercase mb-4">
                  <span className="font-mono text-black font-semibold">{project.number}</span>
                  <span className="text-[10px] truncate max-w-[180px]">{project.category}</span>
                </div>

                {/* Project Name */}
                <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-black mb-2 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>

                {/* Timeline & Status */}
                <div className="flex items-center gap-3 text-[11px] font-sans text-gray-400 mb-6">
                  <span>{project.timeline}</span>
                  <span>·</span>
                  <span className="text-gray-600 font-medium">{project.status}</span>
                </div>

                {/* One-Line Thesis */}
                <p className="font-serif italic text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                  "{project.thesis}"
                </p>

                {/* Core Lesson */}
                <div className="pt-4 border-t border-gray-100 mb-6">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 block mb-1">
                    Core Lesson
                  </span>
                  <p className="font-sans text-xs md:text-sm text-gray-900 font-medium leading-relaxed">
                    {project.coreLesson}
                  </p>
                </div>
              </div>

              {/* Bottom: Key Evidence & CTA */}
              <div className="pt-6 border-t border-gray-100">
                {project.evidenceMetrics.length > 0 && (
                  <div className="flex items-baseline justify-between mb-6">
                    <div>
                      <span className="font-serif text-xl md:text-2xl text-black font-normal block">
                        {project.evidenceMetrics[0].value}
                      </span>
                      <span className="text-[9px] font-sans uppercase tracking-[0.15em] text-gray-400">
                        {project.evidenceMetrics[0].label}
                      </span>
                    </div>
                    {project.evidenceMetrics[1] && (
                      <div className="text-right">
                        <span className="font-serif text-lg md:text-xl text-black font-normal block">
                          {project.evidenceMetrics[1].value}
                        </span>
                        <span className="text-[9px] font-sans uppercase tracking-[0.15em] text-gray-400">
                          {project.evidenceMetrics[1].label}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                <Link
                  to={`/case-study/${project.id}`}
                  className="inline-flex items-center justify-between w-full font-sans text-xs tracking-[0.2em] uppercase text-black font-medium group-hover:text-gray-600 transition-colors pt-2"
                >
                  <span>View Deep Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all 9 projects prompt */}
        <div className="mt-16 text-center">
          <p className="font-sans text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-4">
            Explore the complete 9-project trajectory below in the Product Journey
          </p>
        </div>
      </div>
    </section>
  );
};
