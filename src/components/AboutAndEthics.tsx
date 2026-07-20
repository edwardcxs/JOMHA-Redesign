/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import Section from './Section';
import RotatingText from './RotatingText';

export function Heritage() {
  const animatedTitle = (
    <span className="inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start">
      About
      <RotatingText
        texts={['US', 'JOMHA']}
        mainClassName="text-terracotta overflow-hidden justify-center"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
        splitBy="characters"
        auto
        loop
      />
    </span>
  );

  return (
    <Section id="heritage" title={animatedTitle} subtitle="Ancestral Roots" index="01">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-start">
        <div className="lg:col-span-5 space-y-6 max-w-[400px] mx-auto w-full lg:max-w-none">
          <div className="relative w-full aspect-[3/4] bg-warmwhite-pure border border-richblack/[0.06] p-2 sm:p-3 shadow-sm rounded-none overflow-hidden group">
            <div className="w-full h-full overflow-hidden relative">
              <img
                src="/images/JOMHA.jpeg"
                alt="Traditional woodfire"
                className="w-full h-full object-cover select-none rounded-none transition-transform duration-150 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-terracotta/15 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:-right-8 bg-warmwhite-pure border border-richblack/[0.05] p-3 sm:p-4 shadow-sm rounded-none z-10 transition-transform duration-150  ">
              <span className="text-[7px] sm:text-[8px] font-bold tracking-widest text-richblack/40 uppercase block mb-1">Earth & Timber</span>
              <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-terracotta uppercase block">Clay Pot Baking</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center space-y-12 sm:space-y-16 mt-6 lg:mt-0">
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <span className="text-[9px] font-bold tracking-widest text-terracotta uppercase flex items-center justify-center lg:justify-start gap-2">
              <i className="fa-solid fa-fire-flame-simple text-xs"></i>
              <span>Our Story</span>
            </span>
            <p className="text-base sm:text-lg text-richblack/60 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              JOMHA is more than just a tribal cuisine restaurant-it’s Rourkela’s premium gateway into the soulful world of India’s indigenous heritage. Inspired by the HO tribe’s word for “food,” JOMHA brings together old traditional recipes, earthy aesthetics, and the warmth of a true village-style ambience. Every flavour is a story, every aroma a memory, and every dish a heartfelt tribute to traditions passed down through generations.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 pt-10 sm:pt-12 border-t border-richblack/5 text-center lg:text-left">
            <span className="text-[9px] font-bold tracking-widest text-terracotta uppercase flex items-center justify-center lg:justify-start gap-2">
              <i className="fa-solid fa-compass text-xs"></i>
              <span>Our Aim</span>
            </span>
            <p className="text-base sm:text-lg text-richblack/60 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              The aim of JOMHA is to preserve and promote the essence of India's tribal heritage through authentic cuisine, art, and ambience. We strive to create a meaningful bridge between tradition and modern dining, offering guests a soulful experience rooted in culture and community. Every dish, every detail at JOMHA reflects our purpose — to celebrate, empower, and honor the beauty of tribal life.
            </p>

          </div>
        </div>
      </div>
    </Section>
  );
}

export function Contributions() {
  return (
    <Section id="contributions" title="Our Contributions" subtitle="Ethical Impact" index="06">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <Link to="/blog/indigenous-sourcing" className="group relative bg-warmwhite-pure border border-richblack/[0.04] shadow-sm hover:shadow-xl hover:border-terracotta/20 transition-all duration-150 flex flex-col ">
          <div className="aspect-video sm:aspect-[21/9] lg:aspect-video w-full overflow-hidden relative bg-richblack/5 p-2 pb-0">
            <img src="/images/contribution/local-vendor.webp" alt="Local Vendors" className="w-full h-full object-cover transition-transform duration-150 " />
          </div>
          <div className="p-6 sm:p-8 flex flex-col flex-grow">
            <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-terracotta uppercase mb-3 flex items-center gap-2">
              <i className="fa-solid fa-leaf text-xs"></i> Indigenous Sourcing
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-richblack uppercase tracking-widest mb-4">We Support Local Vendors</h3>
            <p className="text-base text-richblack/60 font-light leading-relaxed mb-6">
              Our culinary ecosystem relies intimately on the hard work of indigenous foragers, rural farmers, and master clay potters. By sourcing our wild ingredients, heritage grains, and unglazed cooking vessels directly from local artisans, we ensure fair trade, preserve ancient agricultural practices, and maintain the purest possible connection to the regional soil.
            </p>
            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-terracotta transition-colors group-hover:text-richblack group/link">
                Read Full Article <i className="fa-solid fa-arrow-right-long text-[9px] transition-transform group-hover/link:translate-x-1"></i>
              </span>
            </div>
          </div>
        </Link>

        <Link to="/blog/compassionate-action" className="group relative bg-warmwhite-pure border border-richblack/[0.04] shadow-sm hover:shadow-xl hover:border-terracotta/20 transition-all duration-150 flex flex-col ">
          <div className="aspect-video sm:aspect-[21/9] lg:aspect-video w-full overflow-hidden relative bg-richblack/5 p-2 pb-0">
            <img src="/images/contribution/street-animal.jpg" alt="Street Animals" className="w-full h-full object-cover transition-transform duration-150 " />
          </div>
          <div className="p-6 sm:p-8 flex flex-col flex-grow">
            <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-terracotta uppercase mb-3 flex items-center gap-2">
              <i className="fa-solid fa-paw text-xs"></i> Compassionate Action
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-richblack uppercase tracking-widest mb-4">We Feed Street Animals</h3>
            <p className="text-base text-richblack/60 font-light leading-relaxed mb-6">
              We believe deeply in extending our hospitality beyond the dining room. Every day, a dedicated portion of our organic kitchen surplus and specifically sourced grains is mindfully prepared to nourish the stray dogs and street animals in our surrounding community. It is our way of fostering a circle of care and respect for all life connected to our environment.
            </p>
            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-terracotta transition-colors group-hover:text-richblack group/link">
                Read Full Article <i className="fa-solid fa-arrow-right-long text-[9px] transition-transform group-hover/link:translate-x-1"></i>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </Section>
  );
}
