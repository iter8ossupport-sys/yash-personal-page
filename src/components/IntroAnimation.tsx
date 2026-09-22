import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  // Total duration: 1.50s across 3 compressed, ultra-precise 0.5s scenes
  // Phase 1: 'build'   (0.00s → 0.50s) Rocket builds cleanly and settles
  // Phase 2: 'text'    (0.50s → 1.00s) "2K26 AI ERA" typography reveals and holds
  // Phase 3: 'launch'  (1.00s → 1.50s) Anticipation, rocket ignition, upward launch, and handover
  const [phase, setPhase] = useState<'build' | 'text' | 'launch'>('build');
  const [isIgnited, setIsIgnited] = useState(false);

  useEffect(() => {
    // 0.50s: Transition from Rocket Build to "2K26 AI ERA" (Part 02)
    const textTimer = setTimeout(() => {
      setPhase('text');
    }, 500);

    // 1.00s: Enter Launch Phase (Part 03)
    const launchTimer = setTimeout(() => {
      setPhase('launch');
    }, 1000);

    // 1.08s: Rocket ignition & upward acceleration begins after brief anticipation
    const ignitionTimer = setTimeout(() => {
      setIsIgnited(true);
    }, 1080);

    // 1.50s: Total duration complete (1.50s), transition seamlessly into Hero
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(launchTimer);
      clearTimeout(ignitionTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden select-none"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full px-4">
        
        {/* Subtle Ambient Particles during Stage 1 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const radius = 50 + (i % 3) * 12;
            return (
              <motion.div
                key={i}
                className="absolute w-[2px] h-[2px] bg-gray-300 rounded-full"
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ 
                  opacity: [0, 0.4, 0],
                  x: Math.cos(angle) * radius,
                  y: Math.sin(angle) * radius,
                  scale: [0, 1.2, 0],
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.08 + i * 0.03,
                  ease: 'easeOut',
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: '-1px',
                  marginTop: '-1px',
                }}
              />
            );
          })}
        </div>

        {/* Central Orchestration: Rocket + Typography in balanced vertical lockup */}
        <div className="relative flex flex-col items-center justify-center">
          
          {/* Rocket */}
          <motion.div
            className="relative z-20"
            initial={{ opacity: 0, y: 32, scale: 0.9 }}
            animate={
              phase === 'build'
                ? {
                    opacity: 1,
                    y: 22, // Centered before text appears
                    scale: 1,
                  }
                : phase === 'text'
                ? {
                    opacity: 1,
                    y: -14, // Settles smoothly upward to frame "2K26 AI ERA"
                    scale: 0.96,
                  }
                : isIgnited
                ? {
                    opacity: [1, 1, 0.8, 0],
                    y: -680, // Controlled ascent exiting top of screen
                    scale: 1.05,
                  }
                : {
                    opacity: 1,
                    y: -8, // 1.00s–1.08s brief anticipation dip
                    scale: 0.95,
                  }
            }
            transition={
              phase === 'build'
                ? {
                    opacity: { duration: 0.25, delay: 0.06, ease: 'easeOut' },
                    y: { duration: 0.35, delay: 0.06, ease: [0.22, 1, 0.36, 1] },
                    scale: { duration: 0.32, delay: 0.06, ease: 'easeOut' },
                  }
                : phase === 'text'
                ? {
                    // 0.50s–0.72s: Rocket settles upward swiftly and smoothly
                    y: { duration: 0.24, ease: [0.25, 1, 0.5, 1] },
                    scale: { duration: 0.24, ease: [0.25, 1, 0.5, 1] },
                  }
                : isIgnited
                ? {
                    // 1.08s–1.48s: Controlled, premium upward launch acceleration
                    y: { duration: 0.40, ease: [0.35, 0, 0.15, 1] },
                    opacity: { duration: 0.38, ease: 'easeInOut' },
                    scale: { duration: 0.25, ease: 'easeOut' },
                  }
                : {
                    // 1.00s–1.08s: Anticipation moment
                    y: { duration: 0.08, ease: 'easeInOut' },
                    scale: { duration: 0.08, ease: 'easeInOut' },
                  }
            }
          >
            <svg 
              width="50" 
              height="102" 
              viewBox="0 0 48 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-xs"
            >
              {/* Nose cone - draws and reveals quickly and cleanly */}
              <motion.path
                d="M24 2 C24 2 36 20 36 40 L12 40 C12 20 24 2 24 2Z"
                fill="#111"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.06, ease: 'easeOut' }}
              />
              
              {/* Body - reveals downward cleanly */}
              <motion.rect
                x="12" y="40" width="24" height="35"
                fill="#1a1a1a"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ delay: 0.12, duration: 0.2, ease: 'easeOut' }}
                style={{ transformOrigin: '24px 40px' }}
              />
              
              {/* Window - double concentric circle */}
              <motion.circle
                cx="24" cy="32" r="5"
                fill="#f0f0f0"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.18, duration: 0.15, ease: 'easeOut' }}
              />
              <motion.circle
                cx="24" cy="32" r="3"
                fill="#d4d4d4"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.22, duration: 0.12, ease: 'easeOut' }}
              />
              
              {/* Left fin */}
              <motion.path
                d="M12 60 L4 78 L12 72 Z"
                fill="#222"
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.16, duration: 0.18, ease: 'easeOut' }}
              />
              
              {/* Right fin */}
              <motion.path
                d="M36 60 L44 78 L36 72 Z"
                fill="#222"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.16, duration: 0.18, ease: 'easeOut' }}
              />
              
              {/* Nozzle */}
              <motion.path
                d="M18 75 L16 82 L32 82 L30 75 Z"
                fill="#333"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ delay: 0.22, duration: 0.14, ease: 'easeOut' }}
                style={{ transformOrigin: '24px 75px' }}
              />
              
              {/* Flame - ignites at Part 03 launch */}
              <AnimatePresence>
                {isIgnited && (
                  <motion.g
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1, ease: 'easeOut' }}
                    style={{ transformOrigin: '24px 82px' }}
                  >
                    <motion.ellipse
                      cx="24" cy="94" rx="7" ry="13"
                      fill="#1a1a1a"
                      animate={{ ry: [13, 17, 12], rx: [7, 5, 7] }}
                      transition={{ duration: 0.11, repeat: Infinity, repeatType: 'reverse' }}
                    />
                    <motion.ellipse
                      cx="24" cy="92" rx="4" ry="7"
                      fill="#666"
                      animate={{ ry: [7, 11, 6], rx: [4, 3, 4] }}
                      transition={{ duration: 0.09, repeat: Infinity, repeatType: 'reverse' }}
                    />
                  </motion.g>
                )}
              </AnimatePresence>
            </svg>
          </motion.div>

          {/* Typography: "2K26 AI ERA" - Part 02 (0.50s → 1.00s) through Part 03 launch exit */}
          <div className="relative z-10 flex flex-col items-center justify-center mt-4">
            <AnimatePresence>
              {phase !== 'build' && (
                <motion.div
                  className="flex flex-col items-center justify-center"
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={
                    phase === 'launch' && isIgnited
                      ? { opacity: 0, y: -14, scale: 0.98 } // Fades cleanly as rocket ascends
                      : { opacity: 1, y: 0, scale: 1 } // Crisp, stable hold for reading
                  }
                  exit={{ opacity: 0, y: -10 }}
                  transition={
                    phase === 'launch' && isIgnited
                      ? { duration: 0.25, delay: 0.14, ease: [0.25, 1, 0.5, 1] }
                      : { duration: 0.24, delay: 0.08, ease: [0.16, 1, 0.3, 1] } // 0.58s reveal, solid hold to 1.00s+
                  }
                >
                  <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-black leading-none">
                    2K26
                  </h2>
                  <p className="font-sans text-[10px] md:text-xs tracking-[0.35em] text-gray-400 mt-2.5 uppercase font-medium">
                    AI ERA
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Launch Trail - Minimal editorial vertical hairline during launch */}
          <AnimatePresence>
            {isIgnited && (
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-10 pointer-events-none"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: [0, 0.25, 0], height: [0, 260, 380] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-[1px] h-full bg-gradient-to-b from-gray-400 via-gray-200 to-transparent" />
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </motion.div>
  );
};
