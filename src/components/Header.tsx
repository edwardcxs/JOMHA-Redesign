/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onOpenReservation: () => void;
}

export default function Header({ onOpenReservation }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-150 ease-in-out ${isScrolled ? 'max-lg:!bg-warmwhite max-lg:!backdrop-blur-none lg:bg-warmwhite/90 lg:backdrop-blur-md border-b border-richblack/[0.03] py-4' : 'max-lg:!bg-warmwhite max-lg:!backdrop-blur-none lg:bg-warmwhite/70 lg:backdrop-blur-md border-b border-richblack/[0.03] py-4 lg:py-6'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 flex items-center justify-between">
        <Link to="/#home" className="group flex items-center gap-4 transition-transform duration-150" aria-label="JOMHA Home">
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold tracking-megawide text-richblack leading-none uppercase">JOMHA</span>
            <span className="text-[7px] md:text-[8px] font-medium tracking-superwide text-terracotta uppercase mt-1.5">Tribal Cuisine</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 lg:gap-12 text-[11px] lg:text-xs font-medium tracking-superwide uppercase text-richblack/60">
          <Link to="/#home" className="hover:text-richblack transition-all duration-150 py-2">Home</Link>
          <Link to="/menu" className="hover:text-richblack transition-all duration-150 py-2">Menu</Link>
          <Link to="/gallery" className="hover:text-richblack transition-all duration-150 py-2">Gallery</Link>
          <Link to="/blog" className="hover:text-richblack transition-all duration-150 py-2">Blog</Link>
          <Link to="/#contact" className="hover:text-richblack transition-all duration-150 py-2">Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-8">
          <button 
            onClick={onOpenReservation}
            className="px-7 py-3 border border-richblack/15 hover:border-richblack text-[10px] font-semibold tracking-superwide uppercase transition-all duration-150 rounded-none bg-transparent hover:bg-richblack hover:text-warmwhite"
          >
            Book A Table
          </button>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 z-50 text-richblack focus:outline-none transition-transform duration-150"
        >
          <div className={`w-5 h-[1.5px] bg-richblack transition-all duration-150 ${isMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <div className={`w-5 h-[1.5px] bg-richblack transition-all duration-150 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-[1.5px] bg-richblack transition-all duration-150 ${isMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-richblack/20 z-30"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:w-80 bg-warmwhite-pure z-40 flex flex-col justify-between p-8 sm:p-12 border-l border-richblack/5 shadow-2xl"
            >
              <div className="space-y-12 pt-16">
                <div className="border-b border-richblack/5 pb-8">
                  <span className="text-2xl font-bold tracking-megawide text-richblack block uppercase">JOMHA</span>
                  <span className="text-[8px] font-semibold tracking-superwide text-terracotta block uppercase mt-2">Tribal Cuisine</span>
                </div>
                <nav className="flex flex-col gap-8 text-sm font-medium tracking-superwide uppercase">
                  <Link to="/#home" onClick={() => setIsMenuOpen(false)} className="block w-full py-2 hover:text-terracotta transition-colors">Home</Link>
                  <Link to="/menu" onClick={() => setIsMenuOpen(false)} className="block w-full py-2 hover:text-terracotta transition-colors">Menu</Link>
                  <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className="block w-full py-2 hover:text-terracotta transition-colors">Gallery</Link>
                  <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="block w-full py-2 hover:text-terracotta transition-colors">Blog</Link>
                  <Link to="/#contact" onClick={() => setIsMenuOpen(false)} className="block w-full py-2 hover:text-terracotta transition-colors">Contact</Link>
                </nav>
              </div>

              <div className="space-y-8 pb-8">
                <button 
                  onClick={() => { setIsMenuOpen(false); onOpenReservation(); }}
                  className="block w-full text-center py-5 bg-richblack hover:bg-terracotta text-warmwhite text-[11px] font-bold uppercase tracking-superwide transition-colors duration-150 rounded-none"
                >
                  Reserve Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
