import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, FileText, ExternalLink, Twitter, Youtube } from 'lucide-react';
import { useResumeModal } from './ResumePreviewModal';

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { openResume } = useResumeModal();

  return (
    <footer className="w-full py-12 md:py-16 bg-white text-black border-t border-gray-100 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
          {/* Left: Identity */}
          <div>
            <h4 className="font-serif text-xl md:text-2xl tracking-tight mb-2">
              YASH TYAGI
            </h4>
            <p className="font-sans text-xs tracking-[0.15em] text-gray-400 uppercase">
              AI Product / 0→1 Product & Growth
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-6 md:gap-8">
            <a
              href="https://www.linkedin.com/in/yash-tyagi-089a49345/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-sans text-xs tracking-[0.15em] text-gray-500 hover:text-black transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>

            <a
              href="https://x.com/yash0to1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-sans text-xs tracking-[0.15em] text-gray-500 hover:text-black transition-colors duration-300"
            >
              <Twitter className="w-4 h-4" />
              X
            </a>

            <a
              href="https://www.youtube.com/@ZerotoSaaS"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-sans text-xs tracking-[0.15em] text-gray-500 hover:text-black transition-colors duration-300"
            >
              <Youtube className="w-4 h-4" />
              YouTube
            </a>

            <a
              href="mailto:yashclient.flow@gmail.com"
              className="group flex items-center gap-2 font-sans text-xs tracking-[0.15em] text-gray-500 hover:text-black transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>

            <button
              type="button"
              onClick={openResume}
              aria-label="Download and preview resume"
              className="group flex items-center gap-2 font-sans text-xs tracking-[0.15em] text-gray-500 hover:text-black transition-colors duration-300 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              Resume
            </button>

            <a
              href="https://yash-live-lilac.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-sans text-xs tracking-[0.15em] text-gray-500 hover:text-black transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Founder Page
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="font-sans text-[10px] tracking-[0.2em] text-gray-300 uppercase">
            © {currentYear} Yash Tyagi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
