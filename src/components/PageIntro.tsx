/**
 * PageIntro — full-screen intro animation shown only on the first page load.
 * A dark curtain with the JOMHA brand slides up and fades out, revealing the site.
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function PageIntro() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<'logo' | 'exit'>('logo');

  useEffect(() => {
    // Show logo for 2s, then trigger exit animation
    const logoTimer = setTimeout(() => setPhase('exit'), 2000);
    // Unmount completely after exit animation finishes (1000ms)
    const doneTimer = setTimeout(() => setVisible(false), 3000);
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-intro"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-warmwhite overflow-hidden"
          initial={{ y: 0 }}
          animate={phase === 'exit' ? { y: '-100%' } : { y: 0 }}
          transition={
            phase === 'exit'
              ? { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
              : { duration: 0 }
          }
        >
          {/* Subtle texture lines */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,0,0,0.04) 40px)',
            }}
          />

          {/* Logo block */}
          <motion.div
            className="flex flex-col items-center select-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: phase === 'exit' ? 0 : 1, scale: phase === 'exit' ? 1.05 : 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Top rule */}
            <motion.span
              className="w-full h-[1px] bg-terracotta/50 mb-6 sm:mb-8"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: phase === 'exit' ? 0 : 1, opacity: phase === 'exit' ? 0 : 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: phase === 'exit' ? 0 : 0.3 }}
            />

            {/* Brand block */}
            <motion.div 
              className="flex flex-col items-center justify-center gap-2 sm:gap-4 px-4 sm:px-8"
              initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
              animate={{ opacity: phase === 'exit' ? 0 : 1, filter: phase === 'exit' ? 'blur(8px)' : 'blur(0px)', y: phase === 'exit' ? -20 : 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: phase === 'exit' ? 0.1 : 0.5 }}
            >
              <span className="text-[9px] sm:text-xs font-medium tracking-[0.4em] sm:tracking-[0.6em] text-richblack/60 uppercase">
                Welcome To
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl font-light tracking-widest text-richblack uppercase leading-none">
                JOMHA
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.span 
              className="text-[8px] sm:text-[10px] font-bold tracking-[0.4em] sm:tracking-[0.6em] text-terracotta uppercase text-center mt-6 sm:mt-8 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: phase === 'exit' ? 0 : 1, y: phase === 'exit' ? -15 : 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: phase === 'exit' ? 0.15 : 0.6 }}
            >
              Tribal Cuisine
            </motion.span>

            {/* Bottom rule */}
            <motion.span
              className="w-full h-[1px] bg-terracotta/50"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: phase === 'exit' ? 0 : 1, opacity: phase === 'exit' ? 0 : 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: phase === 'exit' ? 0.2 : 0.7 }}
            />
          </motion.div>

          {/* Terracotta loading bar at bottom */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-terracotta"
            initial={{ width: '0%' }}
            animate={{ width: phase === 'exit' ? '100%' : '70%' }}
            transition={{ duration: phase === 'exit' ? 0.25 : 1.2, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
