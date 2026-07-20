import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface GalleryItem {
  image: string;
  label: string;
}

interface FullGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  initialIndex?: number;
}

export default function FullGalleryModal({ isOpen, onClose, items, initialIndex = 0 }: FullGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-richblack flex flex-col items-center justify-center p-4 sm:p-8"
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-megawide text-warmwhite uppercase">Visual Archives</span>
              <span className="text-[10px] font-bold tracking-superwide text-terracotta uppercase mt-1">
                {currentIndex + 1} / {items.length}
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center border border-warmwhite/20 text-warmwhite hover:bg-terracotta hover:border-terracotta transition-all rounded-sm group"
              aria-label="Close Gallery"
            >
              <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Navigation Controls - Left */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center border border-warmwhite/20 text-warmwhite hover:bg-terracotta hover:border-terracotta transition-all rounded-sm z-10 group"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Main Image */}
          <div className="relative w-full max-w-6xl max-h-[75vh] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={currentItem.image}
                alt={currentItem.label}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-[75vh] object-contain border border-warmwhite/10"
              />
            </AnimatePresence>
          </div>

          {/* Navigation Controls - Right */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center border border-warmwhite/20 text-warmwhite hover:bg-terracotta hover:border-terracotta transition-all rounded-sm z-10 group"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Bottom Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-full overflow-x-auto hidden md:flex items-center gap-2 px-8 pb-2 scrollbar-hide">
            {items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-16 h-12 flex-shrink-0 border transition-all ${
                  idx === currentIndex 
                    ? 'border-terracotta opacity-100' 
                    : 'border-warmwhite/20 opacity-40 hover:opacity-100 hover:border-warmwhite/50'
                }`}
              >
                <img src={item.image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
