import React from 'react';
import { Linkedin, Twitter, Youtube, Mail, FileText } from 'lucide-react';
import { useResumeModal } from './ResumePreviewModal';

export const SocialLinks: React.FC = () => {
  const { openResume } = useResumeModal();

  return (
    <div className="flex flex-wrap items-center gap-6 text-gray-500 font-sans text-xs tracking-[0.18em] uppercase">
      <a
        href="https://www.linkedin.com/in/yash-tyagi-089a49345/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 hover:text-black transition-colors duration-200"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={13} />
        <span>LinkedIn</span>
      </a>

      <a
        href="https://x.com/yash0to1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 hover:text-black transition-colors duration-200"
        aria-label="X (Twitter) Profile"
      >
        <Twitter size={13} />
        <span>X</span>
      </a>

      <a
        href="https://www.youtube.com/@ZerotoSaaS"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 hover:text-black transition-colors duration-200"
        aria-label="YouTube Channel"
      >
        <Youtube size={13} />
        <span>YouTube</span>
      </a>

      <a
        href="mailto:yashclient.flow@gmail.com"
        className="flex items-center gap-1.5 hover:text-black transition-colors duration-200"
        aria-label="Send Email"
      >
        <Mail size={13} />
        <span>Email</span>
      </a>

      <button
        type="button"
        onClick={openResume}
        className="flex items-center gap-1.5 hover:text-black transition-colors duration-200 cursor-pointer uppercase"
        aria-label="Preview and Download Resume"
      >
        <FileText size={13} />
        <span>Resume</span>
      </button>
    </div>
  );
};
