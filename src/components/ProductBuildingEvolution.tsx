import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EvolutionStage {
  stage: string;
  stageNumber: string;
  question: string;
  project: string;
  projectId: string;
  context: string;
  learning: string;
}

const evolutionStages: EvolutionStage[] = [
  {
    stage: 'STAGE 01',
    stageNumber: '01',
    question: 'CAN I BUILD SOMETHING?',
    project: 'Kirana X',
    projectId: 'kirana-x',
    context: 'I started with a real problem I could directly observe in my father\'s shop.',
    learning: 'Building is easy compared with getting meaningful market evidence. Usage ≠ willingness to pay.'
  },
  {
    stage: 'STAGE 02',
    stageNumber: '02',
    question: 'WILL SOMEONE PAY?',
    project: 'ResumeAI',
    projectId: 'resumeai',
    context: 'I started with a manual concierge service and tested payment from day one.',
    learning: 'Payment is stronger evidence than attention, but the first paid problem may not be the deepest job-to-be-done.'
  },
  {
    stage: 'STAGE 03',
    stageNumber: '03',
    question: 'CAN AI TURN RESEARCH INTO DECISIONS?',
    project: 'Killarity Engine',
    projectId: 'killarity',
    context: 'Built automated adversarial research to stress-test early founder ideas.',
    learning: 'A strong promise requires a product experience capable of delivering that promise. An AI report is not a product.'
  },
  {
    stage: 'STAGE 04',
    stageNumber: '04',
    question: 'CAN A PRODUCT CHANGE BEHAVIOR?',
    project: 'LBES',
    projectId: 'lbes',
    context: 'Gating live financial trade execution with emotional discipline rules.',
    learning: 'The best product becomes part of an existing workflow rather than another passive reflection dashboard.'
  },
  {
    stage: 'STAGE 05',
    stageNumber: '05',
    question: 'CAN SOFTWARE SOLVE A REAL BUSINESS WORKFLOW?',
    project: 'B2B AI Automation',
    projectId: 'b2b-automation',
    context: 'Designed real-estate lead qualification and site-visit confirmation.',
    learning: 'B2B product value must connect clearly to workflow, unit economics, fail-safe implementation, and the buyer.'
  },
  {
    stage: 'STAGE 06',
    stageNumber: '06',
    question: 'CAN CAPABILITY BECOME REVENUE?',
    project: 'LBES Productized Service',
    projectId: 'lbes-service',
    context: 'Monetized specialized algorithmic trading engineering directly.',
    learning: 'A complete SaaS product is not always required to monetize technical capability. Start with high-ticket delivery.'
  },
  {
    stage: 'STAGE 07',
    stageNumber: '07',
    question: 'CAN PREVIOUS FAILURES BECOME PRODUCT INTELLIGENCE?',
    project: 'Vector AI',
    projectId: 'vector-ai',
    context: 'Evolved from resume document generation to continuous career trajectory alignment.',
    learning: 'A product limitation can contain the exact roadmap for the next generation of software.'
  },
  {
    stage: 'STAGE 08',
    stageNumber: '08',
    question: 'CAN AI HELP PEOPLE MAKE BETTER DECISIONS?',
    project: 'Iter8OS',
    projectId: 'iter8os',
    context: 'Live founder decision OS isolating the single highest-leverage bottleneck.',
    learning: 'The highest-value output is identifying the right next decision and experiment, not generating more information.'
  },
  {
    stage: 'STAGE 09',
    stageNumber: '09',
    question: 'CAN HUMAN INTENT BECOME PRECISE SOFTWARE?',
    project: 'LBES Strategy Translation / Mirror',
    projectId: 'lbes-mirror',
    context: 'Closed-loop architecture translating mental models into code with live adherence observation.',
    learning: 'The deeper AI product opportunity exists between human intent, structured specifications, software execution, and real-world feedback.'
  }
];

export const ProductBuildingEvolution: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="evolution"
      className="w-full py-24 md:py-32 lg:py-40 bg-neutral-900 text-white px-6 md:px-12 lg:px-20 selection:bg-white selection:text-black"
    >
      <div className="max-w-screen-2xl mx-auto">
        
        {/* SECTION 1: GLOBAL PRODUCT-BUILDING EVOLUTION */}
        <div className="mb-24 md:mb-32">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-12"
          >
            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase">
              // 01 — Evolution //
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] mb-6 max-w-4xl"
          >
            PRODUCT-BUILDING EVOLUTION.
            <br />
            <span className="text-gray-400 font-normal">NINE PROBLEMS. NINE HYPOTHESES. ONE TRAJECTORY.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed max-w-3xl mb-16 md:mb-20"
          >
            I didn't build nine random projects. Each project's friction point revealed the exact question that forced the creation of the next system.
          </motion.p>

          {/* 9-Stage Linear Progression */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {evolutionStages.map((item, idx) => (
              <motion.div
                key={item.stage}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.06 }}
                className="bg-neutral-800/60 border border-neutral-700/60 p-6 md:p-8 flex flex-col justify-between hover:border-neutral-500 transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-sans tracking-[0.2em] text-gray-400 uppercase mb-4">
                    <span>{item.stage}</span>
                    <span className="text-gray-500">#{item.stageNumber}</span>
                  </div>

                  <h3 className="font-serif text-lg md:text-xl tracking-tight text-white mb-2 leading-snug">
                    {item.question}
                  </h3>

                  <div className="text-xs font-sans tracking-wider text-purple-300 uppercase mb-4">
                    {item.project}
                  </div>

                  <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed mb-4">
                    {item.context}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-700/60">
                  <div className="font-sans text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                    Core Learning
                  </div>
                  <p className="font-sans text-xs md:text-sm text-gray-300 italic leading-relaxed mb-4">
                    "{item.learning}"
                  </p>

                  <Link
                    to={`/case-study/${item.projectId}`}
                    className="inline-flex items-center gap-1.5 text-xs font-sans tracking-[0.15em] uppercase text-white hover:text-purple-300 transition-colors"
                  >
                    Read Case Study
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: THE THROUGH-LINE */}
        <div className="mb-24 md:mb-32 pt-20 border-t border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase">
              // 02 — The Synthesis //
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] mb-8"
          >
            THE THROUGH-LINE.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl space-y-4 mb-14"
          >
            <p>
              The common thread is not a specific industry.
            </p>
            <p>
              I have worked across local commerce, career technology, founder tools, trading, B2B sales automation, and AI services.
            </p>
            <p className="text-white font-medium">
              The common capability is taking an ambiguous real-world problem, understanding the workflow behind it, turning it into a structured product hypothesis, building the smallest useful implementation, putting it in front of users, and using evidence to decide what happens next.
            </p>
          </motion.div>

          {/* Structured Horizontal Chain */}
          <div className="p-4 sm:p-5 md:p-6 bg-neutral-800/40 border border-neutral-700/60 mb-8">
            <div className="flex flex-wrap items-center justify-start md:justify-between gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] md:text-xs font-sans tracking-[0.06em] sm:tracking-[0.08em] md:tracking-[0.1em] uppercase text-gray-200">
              {['PROBLEM', 'USER', 'WORKFLOW', 'HYPOTHESIS', 'PRODUCT', 'DISTRIBUTION', 'EVIDENCE', 'DECISION', 'SYSTEM'].map((step, idx, arr) => (
                <div key={step} className="flex items-center gap-1.5 sm:gap-2">
                  <span className="px-2 py-1 bg-neutral-900 border border-neutral-700 text-white font-medium whitespace-nowrap rounded-[2px]">
                    {step}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-purple-400 font-sans text-xs sm:text-sm select-none">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="font-serif italic text-lg md:text-xl text-gray-400">
            "That is the capability I am continuing to develop."
          </p>
        </div>

        {/* SECTION 3: CURRENT PRODUCT PHILOSOPHY */}
        <div className="pt-20 border-t border-neutral-800">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] text-gray-400 uppercase">
              // 03 — Operating Philosophy //
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-6"
          >
            UNDERSTAND → VALIDATE → BUILD → DISTRIBUTE → MEASURE → ITERATE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-w-3xl mb-12"
          >
            Understand the problem deeply → build the smallest thing that can produce evidence → take it to the market → measure reality → improve or kill → define the next milestone → repeat.
          </motion.p>

          {/* Feedback Cycle Diagram */}
          <div className="max-w-xl bg-neutral-800/40 border border-neutral-700/60 p-6 md:p-8 space-y-4 font-sans text-sm md:text-base">
            {[
              { text: 'Research changes the product.', highlight: false },
              { text: 'Product creates user behavior.', highlight: false },
              { text: 'User behavior creates evidence.', highlight: true },
              { text: 'Evidence changes strategy.', highlight: false },
              { text: 'Strategy determines the next product decision.', highlight: false },
              { text: 'Repeat.', highlight: true }
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div className={`flex items-center gap-3 ${step.highlight ? 'text-purple-300 font-medium' : 'text-gray-300'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>{step.text}</span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="pl-0.5 text-gray-600 font-mono text-xs leading-none">
                    ↓
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
