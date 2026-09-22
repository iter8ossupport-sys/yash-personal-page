import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type EvidenceCategory = 'ALL' | 'PRODUCT' | 'RESEARCH' | 'SYSTEMS' | 'GTM' | 'DECISIONS' | 'TECHNICAL';

interface EvidenceItem {
  id: string;
  category: Exclude<EvidenceCategory, 'ALL'>;
  title: string;
  context: string;
  link?: string;
  ctaLabel?: string;
}

// PUBLIC PRODUCTS & DEMOS - Have real URLs
const publicProducts: EvidenceItem[] = [
  {
    id: 'kirana-x-demo',
    category: 'PRODUCT',
    title: 'KIRANA X',
    context: 'Multilingual mobile workflow for local kirana stores to manage udhaar and customer records.',
    link: 'https://youtu.be/H0yVj1wDuvI',
    ctaLabel: 'VIEW DEMO',
  },
  {
    id: 'resumeai-product',
    category: 'PRODUCT',
    title: 'RESUMEAI',
    context: 'AI-assisted resume generation and career execution platform.',
    link: 'https://ai-resume-pi-sand.vercel.app/',
    ctaLabel: 'OPEN PRODUCT',
  },
  {
    id: 'killarity-product',
    category: 'PRODUCT',
    title: 'KILLARITY ENGINE',
    context: 'AI startup validation and decision support system.',
    link: 'https://killarity-engine-v0-1.vercel.app/',
    ctaLabel: 'OPEN PRODUCT',
  },
  {
    id: 'lbes-product',
    category: 'PRODUCT',
    title: 'LBES',
    context: 'AI trading execution workflow and decision support system.',
    link: 'https://lbes-web-32nd-page-restore-j5ga.vercel.app/',
    ctaLabel: 'OPEN PRODUCT',
  },
  {
    id: 'b2b-automation-demo',
    category: 'PRODUCT',
    title: 'B2B AI AUTOMATION & SALES SYSTEMS',
    context: 'Business workflow automation and lead qualification system.',
    link: 'https://money-tree-ai-10x-agent.vercel.app/',
    ctaLabel: 'OPEN DEMO',
  },
  {
    id: 'lbes-service',
    category: 'PRODUCT',
    title: 'LBES PRODUCTIZED AI SERVICE',
    context: 'Technical capability turned into paid execution service.',
    link: 'https://lbes.space/',
    ctaLabel: 'OPEN SERVICE',
  },
  {
    id: 'vector-ai-product',
    category: 'PRODUCT',
    title: 'VECTOR AI',
    context: 'Continuous resume–job alignment and career trajectory platform.',
    link: 'https://vector-student.ai.studio/',
    ctaLabel: 'OPEN PRODUCT',
  },
  {
    id: 'iter8os-product',
    category: 'PRODUCT',
    title: 'ITER8OS',
    context: 'Founder Decision OS — helping founders make better decisions.',
    link: 'https://iter8os-final-page-one.vercel.app/',
    ctaLabel: 'OPEN PRODUCT',
  },
];

// WORKING EVIDENCE - No public URLs
const workingEvidence: EvidenceItem[] = [
  {
    id: 'local-commerce-research',
    category: 'RESEARCH',
    title: 'Local Commerce User Research',
    context: 'Interview notes and behavioral observations from the Kirana X validation process.',
  },
  {
    id: 'trading-workflow-research',
    category: 'RESEARCH',
    title: 'Trading Workflow Analysis',
    context: 'Research on trader behavior, decision patterns, and execution gaps.',
  },
  {
    id: 'lbes-system',
    category: 'SYSTEMS',
    title: 'LBES — AI Execution Workflow',
    context: 'Personalized trading execution system with context-aware filtering.',
  },
  {
    id: 'automation-pipeline',
    category: 'SYSTEMS',
    title: 'n8n Automation Pipeline',
    context: 'Business workflow automation for lead qualification and follow-up.',
  },
  {
    id: 'cold-outreach-system',
    category: 'GTM',
    title: 'Cold Outreach System',
    context: 'Structured outreach framework for B2B lead generation.',
  },
  {
    id: 'positioning-framework',
    category: 'GTM',
    title: 'Product Positioning Framework',
    context: 'Differentiation and positioning strategy for AI products.',
  },
  {
    id: 'kirana-x-pivot',
    category: 'DECISIONS',
    title: 'Kirana X — Pivot Decision',
    context: 'Post-mortem on closing public product direction despite user traction.',
  },
  {
    id: 'lbes-scope-refinement',
    category: 'DECISIONS',
    title: 'LBES — Scope Refinement',
    context: 'Decision log on pausing original direction due to regulatory constraints.',
  },
  {
    id: 'llm-architecture',
    category: 'TECHNICAL',
    title: 'LLM Integration Architecture',
    context: 'System design for AI workflow integration and context management.',
  },
  {
    id: 'auth-flow',
    category: 'TECHNICAL',
    title: 'Authentication Flow Design',
    context: 'User authentication and session management for multi-product system.',
  },
];

const categories: EvidenceCategory[] = ['ALL', 'PRODUCT', 'RESEARCH', 'SYSTEMS', 'GTM', 'DECISIONS', 'TECHNICAL'];

export const EvidenceLibrary: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState<EvidenceCategory>('ALL');

  const filterItems = (items: EvidenceItem[]) => {
    if (activeCategory === 'ALL') return items;
    return items.filter(item => item.category === activeCategory);
  };

  const filteredPublicProducts = filterItems(publicProducts);
  const filteredWorkingEvidence = filterItems(workingEvidence);

  return (
    <section
      ref={sectionRef}
      id="evidence"
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
            // Evidence Library //
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight mb-6 md:mb-10 max-w-4xl"
        >
          DON'T JUST TAKE
          <br />
          MY WORD FOR IT.
        </motion.h2>

        {/* Supporting Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-sans text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mb-12 md:mb-16"
        >
          Selected artifacts from the products, experiments, research, systems, and decisions behind the work.
        </motion.p>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap gap-2 md:gap-3 mb-12 md:mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-sans text-[10px] md:text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-black border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* PUBLIC PRODUCTS & DEMOS */}
        {(activeCategory === 'ALL' || activeCategory === 'PRODUCT') && filteredPublicProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-16 md:mb-20"
          >
            <h3 className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase mb-8">
              PUBLIC PRODUCTS & DEMOS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <AnimatePresence mode="wait">
                {filteredPublicProducts.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 p-5 md:p-6"
                  >
                    {/* Category */}
                    <span className="font-sans text-[9px] tracking-[0.2em] text-gray-300 uppercase block mb-3">
                      {item.category}
                    </span>

                    {/* Title */}
                    <h4 className="font-serif text-base md:text-lg tracking-tight mb-2 group-hover:text-gray-600 transition-colors">
                      {item.title}
                    </h4>

                    {/* Context */}
                    <p className="font-sans text-xs md:text-sm text-gray-500 leading-relaxed mb-4">
                      "{item.context}"
                    </p>

                    {/* CTA Button - Only for items with links */}
                    {item.link && item.ctaLabel && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-black transition-colors duration-300"
                      >
                        {item.ctaLabel}
                        <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* WORKING EVIDENCE */}
        {filteredWorkingEvidence.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <h3 className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase mb-8">
              WORKING EVIDENCE
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <AnimatePresence mode="wait">
                {filteredWorkingEvidence.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 p-5 md:p-6"
                  >
                    {/* Category */}
                    <span className="font-sans text-[9px] tracking-[0.2em] text-gray-300 uppercase block mb-3">
                      {item.category}
                    </span>

                    {/* Title */}
                    <h4 className="font-serif text-base md:text-lg tracking-tight mb-2 group-hover:text-gray-600 transition-colors">
                      {item.title}
                    </h4>

                    {/* Context */}
                    <p className="font-sans text-xs md:text-sm text-gray-500 leading-relaxed">
                      "{item.context}"
                    </p>

                    {/* NO CTA BUTTON - This is intentional */}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* Context Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 md:mt-20 pt-8 md:pt-10 border-t border-gray-200"
        >
          <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed max-w-2xl italic">
            Public products have clickable links. Working evidence represents internal research, decisions, and systems that support the work but are not publicly accessible.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
