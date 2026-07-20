/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-richblack/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-lg bg-warmwhite-pure shadow-2xl border border-richblack/10 flex flex-col max-h-[90vh] overflow-y-auto overflow-x-hidden"
          >
            <button 
              onClick={onClose} 
              className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 flex items-center justify-center text-richblack/40 hover:text-richblack hover:rotate-90 transition-all duration-150 z-10"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
            
            <div className="p-8 sm:p-12 flex flex-col items-center text-center w-full">
              <div className="w-16 h-16 rounded-full border border-terracotta/30 flex items-center justify-center mb-8 animate-pulse bg-terracotta/5">
                <i className="fa-solid fa-phone text-terracotta text-2xl"></i>
              </div>
              <span className="text-[9px] font-bold tracking-superwide text-terracotta uppercase block mb-3">Book A Table</span>
              <h2 className="text-3xl font-light tracking-tight text-richblack uppercase leading-none mb-4">
                Call Us<span className="text-terracotta font-normal">.</span>
              </h2>
              <p className="text-sm sm:text-base text-richblack/50 leading-relaxed font-light mb-8 max-w-sm">
                Our dining experience is intimately tied to the daily harvest. Please call us directly to secure your place at our table.
              </p>
              
              <a 
                href="tel:+918260372068" 
                className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-richblack hover:bg-terracotta text-warmwhite text-[11px] font-bold tracking-superwide uppercase transition-all duration-150 rounded-none shadow-lg hover:shadow-terracotta/20 group"
              >
                <i className="fa-solid fa-phone-volume group-hover:animate-bounce"></i>
                +91 82603 72068
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
