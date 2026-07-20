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
    // Show logo for 1.4s, then trigger exit animation
    const logoTimer = setTimeout(() => setPhase('exit'), 1400);
    // Unmount completely after exit animation finishes (~700ms)
    const doneTimer = setTimeout(() => setVisible(false), 2100);
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
              ? { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
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
            className="flex flex-col items-center gap-3 select-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: phase === 'exit' ? 0 : 1, y: phase === 'exit' ? -16 : 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: phase === 'logo' ? 0.15 : 0 }}
          >
            {/* Top rule */}
            <motion.span
              className="w-8 h-[1px] bg-richblack/60"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            />

            {/* Brand name */}
            <span className="text-xl sm:text-3xl md:text-5xl font-bold tracking-widest sm:tracking-megawide text-richblack leading-tight sm:leading-none uppercase text-center px-4">
              Welcome To JOMHA
            </span>

            {/* Tagline */}
            <span className="text-[8px] sm:text-[10px] font-bold tracking-widest sm:tracking-superwide text-richblack/40 uppercase text-center px-4 mt-1 sm:mt-0">
              Tribal Cuisine
            </span>

            {/* Bottom rule */}
            <motion.span
              className="w-8 h-[1px] bg-richblack/60"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
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
