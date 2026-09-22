import React from 'react';
import { motion } from 'framer-motion';
import { useResumeModal } from './ResumePreviewModal';

export const ContactFooter: React.FC = () => {
  const { openResume } = useResumeModal();
  return (
    <section id="contact-footer" className="w-full min-h-[60vh] md:min-h-[80vh] bg-white text-black flex flex-col justify-center items-center relative overflow-hidden px-4">
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="font-serif text-[12vw] md:text-[10vw] leading-[0.9] tracking-tight mb-8">
          <span className="block text-gray-300">DROP ME</span>
          <span className="block text-black">AN EMAIL</span>
        </h2>
        
        <a 
          href="mailto:yashclient.flow@gmail.com" 
          className="group relative inline-block"
        >
          <span className="font-sans text-sm md:text-base tracking-widest uppercase transition-colors duration-300 group-hover:text-gray-500">
            yashclient.flow@gmail.com
          </span>
          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black transform scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 origin-left" />
        </a>
      </div>

      <div className="absolute bottom-12 flex flex-wrap justify-center items-center gap-6 md:gap-8 font-sans text-xs tracking-widest uppercase text-gray-400">
        <a href="https://x.com/yash0to1" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" aria-label="Open X">X</a>
        <a href="https://www.linkedin.com/in/yash-tyagi-089a49345/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" aria-label="Open LinkedIn">LinkedIn</a>
        <a href="https://www.youtube.com/@ZerotoSaaS" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" aria-label="Open YouTube">YouTube</a>
        <button 
          type="button" 
          onClick={openResume} 
          className="hover:text-black transition-colors uppercase cursor-pointer"
          aria-label="Download and preview resume"
        >
          Resume
        </button>
        <a 
          href="https://yash-live-lilac.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-black transition-colors"
          aria-label="Open Founder Page"
        >
          Founder Page
        </a>
      </div>
    </section>
  );
};
