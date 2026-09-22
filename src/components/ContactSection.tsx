import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, FileText, ExternalLink } from 'lucide-react';
import { useResumeModal } from './ResumePreviewModal';

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const { openResume } = useResumeModal();

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full min-h-[70vh] md:min-h-[80vh] bg-neutral-50 text-black flex flex-col justify-center items-center px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-screen-2xl mx-auto w-full text-center">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0 }}
          className="mb-8 md:mb-10"
        >
          <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase">
            // Contact //
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight mb-6 md:mb-10"
        >
          LET'S BUILD
          <br />
          <span className="text-gray-400">SOMETHING USEFUL.</span>
        </motion.h2>

        {/* Supporting Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-sans text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12 md:mb-16"
        >
          For AI Product, 0→1 product, product & growth, or relevant early-stage opportunities.
        </motion.p>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <a
            href="https://www.linkedin.com/in/yash-tyagi-089a49345/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-sans text-xs tracking-[0.2em] uppercase hover:bg-neutral-900 transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <a
            href="mailto:yashclient.flow@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-sans text-xs tracking-[0.2em] uppercase border border-gray-200 hover:border-black transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Email
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            onClick={openResume}
            aria-label="Download and preview resume"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-sans text-xs tracking-[0.2em] uppercase border border-gray-200 hover:border-black transition-all duration-300 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            Resume
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </motion.div>

        {/* View Work */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-12 md:mt-16"
        >
          <a
            href="#journey"
            className="group inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-black transition-colors duration-300"
          >
            View Work
            <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
