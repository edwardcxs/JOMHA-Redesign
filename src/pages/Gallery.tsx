import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FullGalleryModal from '../components/FullGalleryModal';

const galleryItems = [
  { image: '/images/gallery/bamboo.jpg', label: 'Bamboo Biryani' },
  { image: '/images/gallery/chef.JPG', label: 'Our Chef' },
  { image: '/images/gallery/IMG_0349.webp', label: 'Culinary Art' },
  { image: '/images/gallery/IMG_0366.webp', label: 'Tribal Essence' },
  { image: '/images/gallery/IMG_0464.webp', label: 'Authentic Flavors' },
  { image: '/images/gallery/IMG_0699.JPG', label: 'Heritage' },
  { image: '/images/gallery/IMG_0700.JPG', label: 'Craftsmanship' },
  { image: '/images/gallery/IMG_0701.JPG', label: 'Tradition' },
  { image: '/images/gallery/IMG_0707.JPG', label: 'Fire & Smoke' },
  { image: '/images/gallery/IMG_0709.JPG', label: 'Earthy' },
  { image: '/images/gallery/IMG_0717.JPG', label: 'Rustic Charm' },
  { image: '/images/gallery/IMG_9663.webp', label: 'Plating Arts' },
  { image: '/images/gallery/IMG_9880.JPG', label: 'Gathering' },
  { image: '/images/gallery/birthday.WEBP', label: 'Celebration' },
  { image: '/images/gallery/culin.jpeg', label: 'Culinary' },
  { image: '/images/gallery/cult.jpeg', label: 'Culture' },
  { image: '/images/gallery/img-0458.webp', label: 'Details' },
  { image: '/images/gallery/img-0778.webp', label: 'Ambience' },
  { image: '/images/gallery/img-0905.webp', label: 'Warmth' },
  { image: '/images/gallery/img-3537.webp', label: 'Spices' },
  { image: '/images/gallery/img-3538.webp', label: 'Fresh Ingredients' },
  { image: '/images/gallery/img-3539.webp', label: 'Preparation' },
  { image: '/images/gallery/img-3542.webp', label: 'Local Produce' },
  { image: '/images/gallery/img-9056.webp', label: 'Dining Experience' },
  { image: '/images/gallery/img-9103.webp', label: 'Tribal Art' },
  { image: '/images/gallery/leaf.jpg', label: 'Nature\'s Touch' },
  { image: '/images/gallery/music.WEBP', label: 'Acoustic Evenings' },
  { image: '/images/gallery/rest.webp', label: 'Restaurant' },
  { image: '/images/gallery/sdm.WEBP', label: 'Community' },
  { image: '/images/gallery/smvad.jpg', label: 'Engagement' },
  { image: '/images/gallery/smvad1.jpg', label: 'Interactions' },
  { image: '/images/gallery/union.jpg', label: 'Togetherness' },
  { image: '/images/gallery/IHM-3.jpg', label: 'IHM Workshop' },
  { image: '/images/gallery/IHM2.jpg', label: 'IHM Event' },
  { image: '/images/gallery/IMH.jpg', label: 'Workshop' },
];

export default function Gallery() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [initialGalleryIndex, setInitialGalleryIndex] = useState(0);

  const openGallery = (index: number) => {
    setInitialGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <main className="flex-grow bg-warmwhite pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 mb-12 sm:mb-16 md:mb-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[10px] font-bold tracking-superwide uppercase text-terracotta hover:text-richblack transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full lg:w-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-terracotta/60"></span>
              <span className="text-[8px] sm:text-[9px] font-bold tracking-superwide text-terracotta uppercase">Visual Archives</span>
              <span className="w-6 sm:w-8 h-[1px] bg-terracotta/60 lg:hidden"></span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-richblack uppercase leading-none">
              Full Gallery<span className="text-terracotta font-normal">.</span>
            </h1>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => openGallery(idx)}
              className="group relative aspect-[4/3] bg-warmwhite-pure border border-richblack/[0.04] p-2 sm:p-2.5 transition-all duration-300 hover:border-terracotta/20 overflow-hidden cursor-pointer"
            >
              <div className="w-full h-full overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <FullGalleryModal 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
        items={galleryItems}
        initialIndex={initialGalleryIndex}
      />
    </main>
  );
}
