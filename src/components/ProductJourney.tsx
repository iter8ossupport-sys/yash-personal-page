import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudiesData } from '../data/caseStudies';

export interface Project {
  id: string;
  name: string;
  date: string;
  year: number;
  description: string;
  signal: string;
  category: string;
  isCurrent?: boolean;
}

export const projects: Project[] = caseStudiesData.map(c => {
  const is2025 = c.timeline.includes('2025');
  const signalText = c.evidenceMetrics.length > 0
    ? `${c.evidenceMetrics[0].value} ${c.evidenceMetrics[0].label}${c.evidenceMetrics[1] ? ` · ${c.evidenceMetrics[1].value} ${c.evidenceMetrics[1].label}` : ''}`
    : c.status;

  return {
    id: c.id,
    name: c.title,
    date: c.timeline,
    year: is2025 ? 2025 : 2026,
    description: c.thesis,
    signal: signalText,
    category: c.category,
    isCurrent: c.id === 'iter8os'
  };
});

const distinctYears = Array.from(new Set(projects.map(p => p.year))).sort((a, b) => a - b);
const yearGroups = distinctYears.map(year => ({
  year,
  projects: projects.filter(p => p.year === year)
}));

export const ProductJourney: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="journey"
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
            // Product Journey //
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-6 md:mb-10 max-w-5xl"
        >
          FROM BUILDING PRODUCTS
          <br />
          <span className="text-gray-400">TO BUILDING PRODUCT SYSTEMS.</span>
        </motion.h2>

        {/* Supporting Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-sans text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mb-16 md:mb-24"
        >
          Each product changed how I understood problems, users, distribution, evidence, and the next decision.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {yearGroups.map((yearGroup, yearIndex) => (
            <div key={yearGroup.year} className="mb-12 last:mb-0">
              {/* Year Marker */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + yearIndex * 0.1 }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="font-serif text-4xl md:text-5xl text-gray-200">{yearGroup.year}</span>
                <div className="flex-1 h-px bg-gray-100" />
              </motion.div>

              {/* Projects for this year */}
              <div className="relative pl-4 md:pl-8 border-l border-gray-100">
                {yearGroup.projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.45 + (yearIndex * 0.1) + (index * 0.08) }}
                    className="group relative mb-8 last:mb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[21px] md:-left-[33px] top-3 w-2 h-2 rounded-full bg-gray-300 group-hover:bg-black transition-colors duration-300" />

                    {/* Project Card */}
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-4 px-4 md:px-6 -mx-4 md:-mx-6 hover:bg-gray-50/50 transition-colors duration-300">
                      {/* Left: Number & Name */}
                      <div className="w-full md:w-1/3">
                        <div className="flex items-baseline gap-3 mb-2">
                          <span className="font-sans text-[10px] tracking-[0.2em] text-gray-300">
                            {String(yearGroup.projects.indexOf(project) + 1).padStart(2, '0')}
                          </span>
                          <h3 className="font-serif text-lg md:text-xl lg:text-2xl tracking-tight group-hover:text-gray-600 transition-colors">
                            {project.name}
                          </h3>
                        </div>
                        <span className="font-sans text-[10px] md:text-xs text-gray-400 tracking-[0.1em]">
                          {project.date}
                        </span>
                      </div>

                      {/* Middle: Description */}
                      <div className="w-full md:w-1/3">
                        <p className="font-sans text-sm text-gray-600 leading-relaxed mb-2">
                          {project.description}
                        </p>
                        <span className="font-sans text-[10px] md:text-xs text-gray-400 italic">
                          {project.signal}
                        </span>
                      </div>

                      {/* Right: View Case Study */}
                      <div className="w-full md:w-1/3 flex md:justify-end items-center">
                        <Link
                          to={`/case-study/${project.id}`}
                          className="group/link inline-flex items-center gap-2 font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-black transition-colors duration-300"
                        >
                          View Case Study
                          <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
