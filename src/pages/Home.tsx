import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SocialLinks } from '../components/SocialLinks';
import { ContactSection } from '../components/ContactSection';
import { SiteFooter } from '../components/SiteFooter';
import { OperatingSystem } from '../components/OperatingSystem';
import { ExecutionLoop } from '../components/ExecutionLoop';
import { ProductPhilosophy } from '../components/ProductPhilosophy';
import { Capabilities } from '../components/Capabilities';
import { Proof } from '../components/Proof';
import { ProductJourney } from '../components/ProductJourney';
import { FlagshipCaseStudies } from '../components/FlagshipCaseStudies';
import { ProductBuildingEvolution } from '../components/ProductBuildingEvolution';
import { CurrentWork } from '../components/CurrentWork';
import { EvidenceLibrary } from '../components/EvidenceLibrary';
import { AIProductApproach } from '../components/AIProductApproach';
import { TechnicalProductFluency } from '../components/TechnicalProductFluency';
import { WhatIBring } from '../components/WhatIBring';
import { WhatImLookingFor } from '../components/WhatImLookingFor';
import { CurrentStatus } from '../components/CurrentStatus';
import { FounderNavigation } from '../components/FounderNavigation';
import { smoothScrollTo } from '../utils/scroll';
import { IntroAnimation } from '../components/IntroAnimation';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useResumeModal } from '../components/ResumePreviewModal';

const YASH_IMG = "https://images.dualite.app/f56662a0-5d53-48a6-9ba7-b1cec6c0d9a1/asset-f7023700-4a52-46c6-8ab2-0557ca754243.webp";

let hasViewedIntroInApp = false;

export const Home: React.FC = () => {
  const [showIntro, setShowIntro] = useState(!hasViewedIntroInApp);
  const [contentReady, setContentReady] = useState(hasViewedIntroInApp);
  const { openResume } = useResumeModal();

  const handleIntroComplete = () => {
    hasViewedIntroInApp = true;
    setShowIntro(false);
    setTimeout(() => setContentReady(true), 100);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollTo(targetId, 1200);
  };

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="w-full bg-white overflow-x-hidden selection:bg-black selection:text-white">
      
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroAnimation onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <header className="relative w-full min-h-screen flex flex-col">
        
        {/* Navigation */}
        <motion.nav 
          className="relative w-full flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 px-6 md:px-12 lg:px-20 pt-8 md:pt-10 z-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: contentReady ? 1 : 0, y: contentReady ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase">
            YASH TYAGI / 2k26
          </span>
          <div className="flex flex-row items-center gap-6 md:gap-8 mx-auto sm:mx-0">
            {['About', 'Work', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-xs font-sans tracking-[0.2em] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-200 uppercase"
              >
                {item}
              </a>
            ))}
            <a
              href="https://yash-live-lilac.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans tracking-[0.2em] font-medium text-gray-500 hover:text-black transition-colors duration-200 uppercase flex items-center gap-1"
            >
              Founder Page
              <ExternalLink size={11} />
            </a>
          </div>
        </motion.nav>

        {/* Hero Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-end px-6 md:px-12 lg:px-20 pb-10 md:pb-16 lg:pb-20">
          
          {/* Left Column: Text */}
          <motion.div 
            className="w-full lg:w-[55%] xl:w-1/2 flex flex-col justify-end pt-10 md:pt-16 lg:pt-0 lg:pb-8 order-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: contentReady ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Name */}
            <motion.h1 
              className="font-serif text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[7.5vw] xl:text-[6.5vw] leading-[0.88] tracking-tight text-black text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: contentReady ? 1 : 0, y: contentReady ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <span className="block">YASH</span>
              <span className="block">TYAGI</span>
            </motion.h1>
            
            {/* Role Label */}
            <motion.p 
              className="mt-5 md:mt-6 font-sans text-[10px] md:text-xs tracking-[0.2em] text-gray-500 uppercase text-center lg:text-left"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: contentReady ? 1 : 0, y: contentReady ? 0 : 15 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AI Product / 0&#8594;1 Product &amp; Growth
            </motion.p>

            {/* Supporting Statement */}
            <motion.p 
              className="mt-5 md:mt-6 font-sans text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-md text-center lg:text-left mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: contentReady ? 1 : 0, y: contentReady ? 0 : 15 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              I turn real problems into AI products, take them to users, and use evidence to decide what to build next.
            </motion.p>

            {/* Status Line */}
            <motion.p 
              className="mt-3 font-sans text-[10px] md:text-xs tracking-[0.12em] text-gray-400 uppercase text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: contentReady ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              BBA · Independent AI Product &amp; Growth Operator
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="mt-8 md:mt-10 flex flex-row gap-4 items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: contentReady ? 1 : 0, y: contentReady ? 0 : 15 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <a 
                href="#journey"
                onClick={(e) => handleNavClick(e, 'journey')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-black text-white font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-neutral-900 transition-all duration-300"
              >
                View Work
                <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <button 
                type="button"
                onClick={openResume}
                aria-label="Download and preview resume"
                className="group inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 text-black font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase hover:border-black transition-all duration-300 cursor-pointer"
              >
                Resume
                <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </motion.div>

            {/* Social Links - Desktop */}
            <motion.div 
              className="mt-12 hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: contentReady ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right Column: Portrait */}
          <motion.div 
            className="w-full lg:w-[45%] xl:w-1/2 flex justify-center lg:justify-end items-end order-2 mt-10 lg:mt-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: contentReady ? 1 : 0, y: contentReady ? 0 : 40 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Subtle decorative border */}
              <div className="absolute -inset-3 md:-inset-4 border border-gray-100 pointer-events-none opacity-0 lg:opacity-100" />
              
              <img 
                src={YASH_IMG}
                alt="Yash Tyagi"
                fetchPriority="high"
                className="w-full h-auto object-cover object-top"
                draggable={false}
              />
              
              {/* Subtle label under image */}
              <motion.span 
                className="block mt-3 md:mt-4 font-sans text-[9px] md:text-[10px] tracking-[0.25em] text-gray-300 uppercase text-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: contentReady ? 1 : 0 }}
                transition={{ delay: 0.5 }}
              >
                AI Product &amp; Growth Operator
              </motion.span>
            </div>
          </motion.div>

          {/* Social Links - Mobile/Tablet */}
          <motion.div 
            className="w-full flex justify-center lg:hidden order-3 mt-8 pb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: contentReady ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <SocialLinks />
          </motion.div>
        </div>

        {/* Scroll indicator - Desktop only */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: contentReady ? 0.4 : 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="font-sans text-[9px] tracking-[0.3em] text-gray-400 uppercase">Scroll</span>
          <motion.div 
            className="w-px h-8 bg-gray-300"
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: 'top' }}
          />
        </motion.div>
      </header>

      {/* SECTION 2: OPERATING SYSTEM */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <OperatingSystem />
      </motion.div>

      {/* SECTION 3: EXECUTION LOOP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ExecutionLoop />
      </motion.div>

      {/* SECTION 4: PRODUCT PHILOSOPHY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ProductPhilosophy />
      </motion.div>

      {/* SECTION 5: CAPABILITIES */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Capabilities />
      </motion.div>

      {/* SECTION 6: PROOF */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Proof />
      </motion.div>

      {/* SECTION 7: PRODUCT JOURNEY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ProductJourney />
      </motion.div>

      {/* SECTION 8: FLAGSHIP CASE STUDIES */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <FlagshipCaseStudies />
      </motion.div>

      {/* SECTION 8.5: PRODUCT-BUILDING EVOLUTION & THROUGH-LINE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ProductBuildingEvolution />
      </motion.div>

      {/* SECTION 9: CURRENT WORK */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <CurrentWork />
      </motion.div>

      {/* SECTION 10: EVIDENCE LIBRARY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <EvidenceLibrary />
      </motion.div>

      {/* SECTION 11: AI PRODUCT APPROACH */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <AIProductApproach />
      </motion.div>

      {/* SECTION 12: TECHNICAL PRODUCT FLUENCY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <TechnicalProductFluency />
      </motion.div>

      {/* SECTION 13: WHAT I BRING */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <WhatIBring />
      </motion.div>

      {/* SECTION 14: WHAT I'M LOOKING FOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <WhatImLookingFor />
      </motion.div>

      {/* SECTION 15: CURRENT STATUS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <CurrentStatus />
      </motion.div>

      {/* SECTION 16: CONTACT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ContactSection />
      </motion.div>

      {/* SECTION 17: FOUNDER NAVIGATION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <FounderNavigation />
      </motion.div>

      {/* SITE FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contentReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SiteFooter />
      </motion.div>

    </div>
  );
};
