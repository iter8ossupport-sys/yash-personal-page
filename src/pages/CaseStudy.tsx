import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, ChevronDown, ListFilter, CheckCircle2 } from 'lucide-react';
import { getCaseStudyById, caseStudiesData, CaseStudyData } from '../data/caseStudies';
import { useResumeModal } from '../components/ResumePreviewModal';

const BADGE_DESCRIPTIONS: Record<string, { label: string; tooltip: string; style: string }> = {
  OBSERVATION: {
    label: 'OBSERVATION',
    tooltip: 'What I directly saw in reality',
    style: 'bg-neutral-100 text-neutral-700 border-neutral-300'
  },
  HYPOTHESIS: {
    label: 'HYPOTHESIS',
    tooltip: 'What I believed before testing',
    style: 'bg-amber-50 text-amber-800 border-amber-300'
  },
  EVIDENCE: {
    label: 'EVIDENCE',
    tooltip: 'What actually happened in reality',
    style: 'bg-emerald-50 text-emerald-800 border-emerald-300'
  },
  'PRODUCT DIRECTION': {
    label: 'PRODUCT DIRECTION',
    tooltip: 'Designed architecture / planned direction',
    style: 'bg-blue-50 text-blue-800 border-blue-200'
  },
  FUTURE: {
    label: 'FUTURE CONCEPT',
    tooltip: 'Future direction; not claimed as shipped',
    style: 'bg-purple-50 text-purple-800 border-purple-200'
  }
};

const SectionBadge: React.FC<{ type: keyof typeof BADGE_DESCRIPTIONS }> = ({ type }) => {
  const meta = BADGE_DESCRIPTIONS[type] || BADGE_DESCRIPTIONS.OBSERVATION;
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-sans uppercase tracking-[0.15em] border ${meta.style} rounded-sm`}
      title={meta.tooltip}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
      {meta.label}
    </span>
  );
};

export const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { openResume } = useResumeModal();
  const [activeSection, setActiveSection] = useState<string>('context');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const study = useMemo(() => (id ? getCaseStudyById(id) : undefined), [id]);

  const sections = useMemo(() => {
    if (!study) return [];
    return [
      { id: 'context', number: '01', title: 'Context' },
      { id: 'problem', number: '02', title: 'Problem' },
      { id: 'problem-discovery', number: '03', title: 'Discovery' },
      { id: 'alternatives', number: '04', title: 'Alternatives' },
      { id: 'hypothesis', number: '05', title: 'Hypothesis' },
      { id: 'research', number: '06', title: 'Research' },
      { id: 'product-decision', number: '07', title: 'Product Decision' },
      { id: 'workflow', number: '08', title: 'Workflow' },
      { id: 'build', number: '09', title: 'Build' },
      { id: 'distribution', number: '10', title: 'Distribution' },
      { id: 'evidence', number: '11', title: 'Evidence' },
      { id: 'reality-check', number: '12', title: 'Reality Check' },
      { id: 'decision', number: '13', title: 'The Decision' },
      { id: 'learning', number: '14', title: 'What I Learned' },
      { id: 'capabilities', number: '15', title: 'Capabilities' },
      { id: 'what-changed-next', number: '16', title: 'What Changed Next' }
    ];
  }, [study]);

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveSection('context');
  }, [id]);

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i].id);
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const nextProject = useMemo(() => {
    if (!study || !study.nextProjectId) return null;
    return getCaseStudyById(study.nextProjectId);
  }, [study]);

  const prevProject = useMemo(() => {
    if (!study || !study.prevProjectId) return null;
    return getCaseStudyById(study.prevProjectId);
  }, [study]);

  if (!study) {
    return (
      <div className="w-full min-h-screen bg-white text-black flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif text-3xl md:text-5xl mb-4">Case Study Not Found</h1>
        <p className="font-sans text-gray-500 mb-8 max-w-md">
          The requested case study could not be loaded. Please return to the portfolio index.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-sans tracking-[0.2em] uppercase hover:bg-neutral-800 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  const activeSectionObj = sections.find(s => s.id === activeSection) || sections[0];

  return (
    <div className="w-full min-h-screen bg-white text-black selection:bg-black selection:text-white">
      
      {/* TOP STICKY BAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link
            to="/#journey"
            className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-gray-500 hover:text-black transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Work</span>
          </Link>

          <div className="hidden sm:flex items-center gap-4 text-xs font-sans tracking-[0.2em] text-gray-400 uppercase">
            <span>Yash Tyagi</span>
            <span>·</span>
            <span className="text-black font-medium">{study.number} / {study.title}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={openResume}
              className="text-xs font-sans tracking-[0.15em] uppercase text-gray-600 hover:text-black transition-colors px-3 py-1.5 border border-gray-200 hover:border-black rounded-sm"
            >
              Resume
            </button>
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-sans tracking-[0.15em] uppercase text-white bg-black hover:bg-neutral-800 px-3.5 py-1.5 rounded-sm transition-colors"
              >
                <span>{study.liveUrlLabel || 'Live Product'}</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* MOBILE STICKY SECTION PROGRESS BAR */}
      <div className="lg:hidden sticky top-[57px] z-30 bg-neutral-50 border-b border-gray-200 px-6 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-sans tracking-[0.15em] uppercase text-gray-600 truncate">
          <span className="text-gray-400 font-mono">{activeSectionObj.number}</span>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-black truncate">{activeSectionObj.title}</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center gap-1 text-[11px] font-sans tracking-[0.15em] uppercase text-gray-500 hover:text-black bg-white px-2.5 py-1 border border-gray-200 rounded-sm"
        >
          <span>Sections</span>
          <ChevronDown size={12} className={`transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* MOBILE SECTIONS DROPDOWN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed top-[102px] left-0 right-0 z-30 bg-white border-b border-gray-200 p-4 shadow-xl max-h-[60vh] overflow-y-auto"
          >
            <div className="grid grid-cols-2 gap-2 text-xs font-sans">
              {sections.map(s => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`text-left px-3 py-2 rounded-sm tracking-[0.1em] uppercase transition-colors ${
                    activeSection === s.id
                      ? 'bg-black text-white font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-[10px] opacity-60 mr-1.5 font-mono">{s.number}</span>
                  {s.title}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTAINER */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        
        {/* EDITORIAL HERO */}
        <section className="border-b border-gray-200 pb-16 md:pb-24 mb-16 md:mb-24">
          <div className="max-w-4xl">
            {/* Meta Strip */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs font-sans tracking-[0.2em] text-gray-400 uppercase mb-6">
              <span className="font-mono text-black font-medium">{study.number}</span>
              <span>·</span>
              <span>{study.category}</span>
              <span>·</span>
              <span>{study.timeline}</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.92] text-black mb-6">
              {study.title}
            </h1>

            {/* Subtitle / Thesis */}
            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-gray-600 leading-snug mb-8 max-w-3xl">
              "{study.thesis}"
            </p>

            {/* Key Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-gray-100 text-xs font-sans">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block mb-1">
                  Primary Users
                </span>
                <span className="text-gray-800 leading-relaxed block">
                  {study.primaryUsers}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block mb-1">
                  Status
                </span>
                <span className="text-gray-800 font-medium leading-relaxed block">
                  {study.status}
                </span>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block mb-1">
                  Build Approach
                </span>
                <span className="text-gray-800 leading-relaxed block">
                  {study.buildApproach}
                </span>
              </div>
            </div>

            {/* Core Lesson Callout */}
            <div className="mt-8 p-5 md:p-6 bg-neutral-50 border-l-2 border-black">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block mb-1">
                Core Lesson
              </span>
              <p className="font-sans font-medium text-sm md:text-base text-gray-900">
                {study.coreLesson}
              </p>
            </div>

            {/* Verified Evidence Strip */}
            {study.evidenceMetrics.length > 0 && (
              <div className="mt-10 pt-8 border-t border-gray-100">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 block mb-4">
                  // Verified Portfolio Signals //
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                  {study.evidenceMetrics.map((m, idx) => (
                    <div key={idx} className="p-4 bg-white border border-gray-200">
                      <div className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight text-black mb-1">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-sans tracking-[0.15em] uppercase text-gray-500">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Extensible Project Artifacts & Links */}
            {(study.liveUrl || study.videoUrl || study.githubUrl || (study.links && study.links.length > 0)) && (
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 block w-full sm:w-auto mr-2">
                  Artifacts &amp; Access:
                </span>
                {study.liveUrl && (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black text-white text-xs font-sans tracking-[0.15em] uppercase hover:bg-neutral-800 transition-colors rounded-sm"
                  >
                    <span>{study.liveUrlLabel || 'Live Product'}</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                {study.videoUrl && (
                  <a
                    href={study.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-neutral-300 text-neutral-800 hover:border-black text-xs font-sans tracking-[0.15em] uppercase transition-colors rounded-sm"
                  >
                    <span>{study.videoTitle || 'Watch Walkthrough'}</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                {study.githubUrl && (
                  <a
                    href={study.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-neutral-300 text-neutral-800 hover:border-black text-xs font-sans tracking-[0.15em] uppercase transition-colors rounded-sm"
                  >
                    <span>Source Code</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                {study.links?.map((lnk, idx) => (
                  <a
                    key={idx}
                    href={lnk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-neutral-300 text-neutral-800 hover:border-black text-xs font-sans tracking-[0.15em] uppercase transition-colors rounded-sm"
                  >
                    <span>{lnk.label}</span>
                    <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* TWO-COLUMN CASE STUDY READING LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 relative">
          
          {/* DESKTOP STICKY LEFT NAVIGATION */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-28 max-h-[calc(100vh-140px)] overflow-y-auto pr-4 scrollbar-thin">
              <div className="text-[10px] font-sans tracking-[0.25em] text-gray-400 uppercase mb-4 pl-2">
                Index // {study.number}
              </div>
              <nav className="space-y-1">
                {sections.map(s => {
                  const isActive = activeSection === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className={`w-full text-left py-1.5 px-2.5 text-xs font-sans tracking-[0.1em] uppercase transition-all duration-200 flex items-center justify-between rounded-sm ${
                        isActive
                          ? 'bg-black text-white font-medium pl-3'
                          : 'text-gray-500 hover:text-black hover:bg-gray-50'
                      }`}
                    >
                      <span className="truncate">{s.title}</span>
                      <span className="font-mono text-[10px] opacity-60 ml-2">{s.number}</span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-100 pl-2">
                <Link
                  to="/#journey"
                  className="text-xs font-sans tracking-[0.15em] uppercase text-gray-400 hover:text-black transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowLeft size={12} /> All Case Studies
                </Link>
              </div>
            </div>
          </aside>

          {/* MAIN CASE STUDY READING COLUMN */}
          <main className="flex-1 max-w-3xl space-y-16 md:space-y-24">
            
            {/* 01 — CONTEXT */}
            <section id="context" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">01 — Context</span>
                <SectionBadge type={study.context.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6">
                Why This Project Existed
              </h2>
              <div className="space-y-4 font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                {study.context.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            {/* 02 — PROBLEM */}
            <section id="problem" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">02 — Problem</span>
                <SectionBadge type={study.problem.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6">
                What Real Problem Was Observed
              </h2>
              <div className="space-y-4 font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                {study.problem.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            {/* 03 — PROBLEM DISCOVERY */}
            <section id="problem-discovery" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">03 — Problem Discovery</span>
                <SectionBadge type={study.problemDiscovery.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6">
                Discovery &amp; The Existing Workflow
              </h2>
              <div className="space-y-4 font-sans text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                {study.problemDiscovery.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              {study.problemDiscovery.bulletPoints && (
                <div className="bg-neutral-50 p-6 md:p-8 border border-gray-100 space-y-3">
                  {study.problemDiscovery.bulletPoints.map((bp, idx) => (
                    <div key={idx} className="flex items-start gap-3 font-sans text-sm md:text-base text-gray-800">
                      <span className="font-mono text-xs text-gray-400 mt-1">[{idx + 1}]</span>
                      <p className="leading-relaxed">{bp}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* 04 — EXISTING ALTERNATIVES / CONSTRAINT */}
            <section id="alternatives" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">04 — Alternatives</span>
                <SectionBadge type={study.existingAlternatives.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6">
                Existing Alternatives &amp; The Real Constraint
              </h2>
              <div className="space-y-4 font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                {study.existingAlternatives.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            {/* 05 — INITIAL HYPOTHESIS */}
            <section id="hypothesis" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">05 — Initial Hypothesis</span>
                <SectionBadge type={study.hypothesis.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6">
                What I Initially Believed
              </h2>
              <div className="p-6 md:p-8 bg-amber-50/50 border border-amber-200/60 mb-6">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-amber-800 block mb-2 font-medium">
                  The Core Hypothesis
                </span>
                <p className="font-serif text-lg md:text-xl text-neutral-900 leading-relaxed italic">
                  "{study.hypothesis.statement}"
                </p>
              </div>
              <div className="space-y-4 font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                {study.hypothesis.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            {/* 06 — RESEARCH / VALIDATION */}
            <section id="research" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">06 — Research &amp; Validation</span>
                <SectionBadge type={study.researchValidation.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6">
                How I Investigated Reality
              </h2>
              <div className="space-y-4 font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                {study.researchValidation.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            {/* 07 — PRODUCT DECISION */}
            <section id="product-decision" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">07 — Product Decision</span>
                <SectionBadge type={study.productDecision.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6">
                What I Decided to Build &amp; What to Avoid
              </h2>
              <div className="space-y-4 font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                {study.productDecision.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            {/* 08 — PRODUCT WORKFLOW VISUALIZATION */}
            <section id="workflow" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">08 — Product Workflow</span>
                <SectionBadge type={study.productWorkflow.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4">
                How The Product Actually Worked
              </h2>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">
                // {study.productWorkflow.flowDescription} //
              </p>

              {/* Step Sequence Flow */}
              <div className="space-y-3">
                {study.productWorkflow.steps.map((st, idx, arr) => (
                  <div key={st.step}>
                    <div className="p-5 md:p-6 bg-white border border-gray-200 hover:border-black transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs px-2 py-0.5 bg-neutral-100 text-black font-medium">
                          STEP {st.step}
                        </span>
                        <h3 className="font-serif text-lg text-black font-normal">
                          {st.title}
                        </h3>
                      </div>
                      <p className="font-sans text-sm text-gray-600 leading-relaxed pl-1">
                        {st.detail}
                      </p>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="py-1 text-center text-gray-300 font-mono text-xs">
                        ↓
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 09 — BUILD / EXECUTION */}
            <section id="build" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">09 — Build &amp; Execution</span>
                <SectionBadge type={study.buildExecution.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6">
                Translating Strategy Into Software
              </h2>
              <div className="space-y-4 font-sans text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                {study.buildExecution.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              {study.buildExecution.stack && (
                <div className="p-5 bg-neutral-50 border border-gray-100">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 block mb-3">
                    Technical Stack &amp; Implementation Tools
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {study.buildExecution.stack.map((item, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-white border border-gray-200 text-xs font-sans text-neutral-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* 10 — DISTRIBUTION / GTM */}
            <section id="distribution" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">10 — Distribution / GTM</span>
                <SectionBadge type={study.distributionGtm.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6">
                How I Reached Users &amp; Customers
              </h2>
              <div className="space-y-4 font-sans text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                {study.distributionGtm.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              {study.distributionGtm.channels && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {study.distributionGtm.channels.map((ch, idx) => (
                    <div key={idx} className="p-3 bg-white border border-gray-200 text-xs font-sans text-gray-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-black" />
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* 11 — EVIDENCE */}
            <section id="evidence" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">11 — Evidence</span>
                <SectionBadge type={study.evidence.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6">
                What Actually Happened
              </h2>
              <div className="space-y-4 font-sans text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                {study.evidence.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {study.evidence.metrics.map((m, idx) => (
                  <div key={idx} className="p-6 bg-neutral-50 border border-gray-200 text-center">
                    <div className="font-serif text-3xl md:text-4xl text-black mb-1">
                      {m.value}
                    </div>
                    <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-gray-500">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 12 — REALITY CHECK */}
            <section id="reality-check" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">12 — Reality Check</span>
                <SectionBadge type={study.realityCheck.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6">
                Where Assumptions Collided With Reality
              </h2>
              <div className="space-y-4 font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                {study.realityCheck.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </section>

            {/* 13 — THE DECISION BLOCK */}
            <section id="decision" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">13 — The Decision</span>
                <SectionBadge type={study.decision.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6">
                The Decision
              </h2>

              <div className="border-2 border-black p-6 md:p-8 space-y-6">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 block mb-1">
                    Decision Outcome
                  </span>
                  <span className="font-serif text-2xl md:text-3xl text-black block">
                    {study.decision.outcome}
                  </span>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 block mb-1">
                    Why
                  </span>
                  <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed">
                    {study.decision.why}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 block mb-1">
                    What Changed
                  </span>
                  <p className="font-sans text-sm md:text-base text-gray-700 leading-relaxed">
                    {study.decision.whatChanged}
                  </p>
                </div>
              </div>
            </section>

            {/* 14 — LEARNING BLOCK */}
            <section id="learning" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">14 — What I Learned</span>
                <SectionBadge type={study.learning.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-8">
                What I Learned
              </h2>

              <div className="space-y-4">
                {study.learning.learnings.map((l, idx) => (
                  <div key={idx} className="p-5 md:p-6 bg-neutral-50 border border-gray-200">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-black text-white uppercase tracking-widest mb-3 inline-block">
                      {l.area}
                    </span>
                    <p className="font-sans text-sm md:text-base text-gray-800 leading-relaxed">
                      {l.insight}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 15 — CAPABILITY DEVELOPED */}
            <section id="capabilities" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">15 — Capability Developed</span>
                <SectionBadge type={study.capabilityDeveloped.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6">
                Capabilities Compounded
              </h2>

              <div className="p-6 md:p-8 bg-white border border-gray-200 space-y-3">
                {study.capabilityDeveloped.capabilities.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-3 font-sans text-sm md:text-base text-gray-800">
                    <CheckCircle2 size={16} className="text-black shrink-0 mt-1" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 16 — WHAT CHANGED NEXT */}
            <section id="what-changed-next" className="scroll-mt-28 border-t border-gray-100 pt-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">16 — Evolution</span>
                <SectionBadge type={study.whatChangedNext.badge} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6">
                How This Influenced The Next Project
              </h2>

              <div className="p-6 md:p-8 bg-neutral-900 text-white">
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gray-400 block mb-2 font-mono">
                  THE EVOLUTION STEP
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-white mb-4">
                  {study.whatChangedNext.headline}
                </h3>
                <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                  {study.whatChangedNext.description}
                </p>

                {study.whatChangedNext.nextProjectId && (
                  <Link
                    to={`/case-study/${study.whatChangedNext.nextProjectId}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-sans tracking-[0.15em] uppercase font-medium hover:bg-neutral-200 transition-colors"
                  >
                    <span>Read Next: {study.whatChangedNext.nextProjectTitle}</span>
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </section>

            {/* PREVIOUS / NEXT CASE STUDY FOOTER */}
            <div className="pt-16 border-t border-gray-200 flex flex-col sm:flex-row items-stretch justify-between gap-6">
              {prevProject ? (
                <Link
                  to={`/case-study/${prevProject.id}`}
                  className="flex-1 p-6 border border-gray-200 hover:border-black transition-colors group"
                >
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 block mb-1">
                    ← Previous Case Study
                  </span>
                  <div className="font-serif text-xl text-black group-hover:text-gray-600 transition-colors">
                    {prevProject.number} · {prevProject.title}
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {nextProject ? (
                <Link
                  to={`/case-study/${nextProject.id}`}
                  className="flex-1 p-6 border border-gray-200 hover:border-black transition-colors text-right group"
                >
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 block mb-1">
                    Next Case Study →
                  </span>
                  <div className="font-serif text-xl text-black group-hover:text-gray-600 transition-colors">
                    {nextProject.number} · {nextProject.title}
                  </div>
                </Link>
              ) : (
                <Link
                  to="/#evolution"
                  className="flex-1 p-6 border border-gray-200 hover:border-black transition-colors text-right group"
                >
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 block mb-1">
                    Evolution Overview →
                  </span>
                  <div className="font-serif text-xl text-black group-hover:text-gray-600 transition-colors">
                    View Complete 9-Project Evolution
                  </div>
                </Link>
              )}
            </div>

          </main>
        </div>
      </div>

    </div>
  );
};
