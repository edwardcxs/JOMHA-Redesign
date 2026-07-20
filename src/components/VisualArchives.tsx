/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import FullGalleryModal from './FullGalleryModal';
import RotatingText from './RotatingText';

const galleryRow1 = [
  { image: '/images/gallery/bamboo.jpg', label: 'Bamboo Biryani' },
  { image: '/images/gallery/chef.JPG', label: 'Our Chef' },
  { image: '/images/gallery/IMG_0349.webp', label: 'Culinary Art' },
  { image: '/images/gallery/IMG_0366.webp', label: 'Tribal Essence' },
];

const galleryRow2 = [
  { image: '/images/gallery/IMG_0464.webp', label: 'Authentic Flavors' },
  { image: '/images/gallery/birthday.WEBP', label: 'Celebration' },
  { image: '/images/gallery/music.WEBP', label: 'Acoustic Evenings' },
  { image: '/images/gallery/rest.webp', label: 'Restaurant' },
];

const allGalleryItems = [...galleryRow1, ...galleryRow2];

export default function VisualArchives() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [initialGalleryIndex, setInitialGalleryIndex] = useState(0);

  const openGallery = (index: number = 0) => {
    setInitialGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <section id="gallery" className="relative z-10 py-16 sm:py-24 md:py-32 border-t border-richblack/5 w-full bg-warmwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 mb-12 sm:mb-16 md:mb-20 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full lg:w-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 sm:w-8 h-[1px] bg-terracotta/60"></span>
            <span className="text-[8px] sm:text-[9px] font-bold tracking-superwide text-terracotta uppercase">03 // Sensory Canvas</span>
            <span className="w-6 sm:w-8 h-[1px] bg-terracotta/60 lg:hidden"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-richblack uppercase leading-none">
            <span className="inline-flex items-center gap-3 flex-wrap justify-center lg:justify-start">
              OUR 
              <RotatingText
                texts={['GALLERY', 'MEMORIES']}
                mainClassName="text-terracotta overflow-hidden justify-center pt-2 pb-12 -mt-2 -mb-12"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                splitBy="characters"
              />
              <span className="text-terracotta font-normal">.</span>
            </span>
          </h2>
        </div>
        
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <Link 
            to="/gallery" 
            className="group w-full sm:w-auto px-8 py-4 bg-richblack hover:bg-terracotta text-warmwhite text-[10px] font-bold tracking-superwide uppercase transition-all duration-150 rounded-none flex items-center justify-center gap-3 relative z-20 shadow-lg hover:shadow-terracotta/20 cursor-pointer"
          >
            <span>View Full Gallery</span>
            <i className="fa-solid fa-arrow-right-long text-[9px] transition-transform group-hover:translate-x-1"></i>
          </Link>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6 md:space-y-8 marquee-group cursor-pointer">
        <div className="relative flex overflow-hidden w-full">
          <div className="animate-marquee-left flex w-max" style={{ animationDuration: '130s' }}>
            <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
              {[...allGalleryItems, ...allGalleryItems].map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => openGallery(idx % allGalleryItems.length)}
                  className="group/item relative w-[75vw] sm:w-[300px] md:w-[400px] aspect-[4/3] bg-warmwhite-pure border border-richblack/[0.04] p-2 sm:p-2.5 flex-shrink-0 transition-all duration-150 hover:border-terracotta/20"
                >
                  <div className="w-full h-full overflow-hidden relative">
                    <img src={item.image} alt={item.label} className="w-full h-full object-cover rounded-none select-none transition-transform duration-150 " />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
              {[...allGalleryItems, ...allGalleryItems].map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => openGallery(idx % allGalleryItems.length)}
                  className="group/item relative w-[75vw] sm:w-[300px] md:w-[400px] aspect-[4/3] bg-warmwhite-pure border border-richblack/[0.04] p-2 sm:p-2.5 flex-shrink-0 transition-all duration-150 hover:border-terracotta/20"
                >
                  <div className="w-full h-full overflow-hidden relative">
                    <img src={item.image} alt={item.label} className="w-full h-full object-cover rounded-none select-none transition-transform duration-150 " />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FullGalleryModal 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
        items={allGalleryItems}
        initialIndex={initialGalleryIndex}
      />
    </section>
  );
}
