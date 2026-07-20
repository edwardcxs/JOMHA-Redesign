/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import RotatingText from './RotatingText';

const slides = [
  {
    image: '/images/menu/bamboo.jpg',
    number: 'Item\nNo. 01',
    title: 'Bamboo\nBiryani'
  },
  {
    image: '/images/menu/handi.jpeg',
    number: 'Item\nNo. 02',
    title: 'Handi\nMansa'
  },
  {
    image: '/images/menu/poda2.jpeg',
    number: 'Item\nNo. 03',
    title: 'Patra\nPoda'
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-10 flex-grow flex items-center max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 pt-32 pb-16 sm:pt-40 sm:pb-24 lg:py-24 w-full min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-center w-full">

        {/* Left Side Content */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8 sm:space-y-10 text-center lg:text-left items-center lg:items-start">

          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-terracotta/60"></span>
            <span className="text-[8px] sm:text-[9px] font-bold tracking-superwide text-terracotta uppercase">Inspired by Nature, Crafted with Tradition.</span>
            <span className="w-6 h-[1px] bg-terracotta/60 lg:hidden"></span>
          </div>

          <div className="space-y-4 w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-richblack uppercase leading-[1.05]">
              Experience The Tribal Cuisine<br className="hidden sm:block" />
              <span className="font-geist font-light normal-case tracking-normal inline-flex items-center gap-2 flex-wrap">
                With
                <RotatingText
                  texts={['JOMHA', 'जोम्हा', '𑢮𑢩𑢶𑢡𑢤𑢡', { text: 'ଜୋମ୍ହା', className: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-4' }]}
                  mainClassName="text-terracotta overflow-hidden justify-center py-2 -my-2"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pt-4 pb-20 -mt-4 -mb-20"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  splitBy="characters"
                  auto
                  loop
                />
              </span><span className="text-terracotta font-normal">.</span>
            </h1>
          </div>

          <p className="text-base md:text-lg text-richblack/60 font-light leading-relaxed max-w-md">
            Authentic Tribal Cuisine Restaurant. Experience the rich heritage, earthy flavors, and the warmth of traditional cooking methods passed down through generations.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-6 sm:gap-8 pt-2 w-full sm:w-auto">
            <Link to="/menu" className="w-full sm:w-auto px-8 py-4 bg-terracotta hover:bg-richblack text-warmwhite text-[10px] font-bold tracking-superwide uppercase transition-all duration-150 rounded-none text-center shadow-lg hover:shadow-terracotta/20  ">
              Explore the menu
            </Link>
            <Link to="/blog" className="group w-full sm:w-auto text-[10px] font-bold tracking-superwide uppercase text-richblack/80 hover:text-richblack transition-all duration-150 flex items-center justify-center sm:justify-start gap-2 py-3 ">
              <span>Read Story</span>
              <i className="fa-solid fa-arrow-right-long text-[9px]  transition-transform" />
            </Link>
          </div>

          <div className="space-y-4 pt-8 border-t border-richblack/5 max-w-md w-full">
            <span className="text-[9px] font-bold tracking-widest text-richblack/40 uppercase block text-center lg:text-left">Experience JOMHA at Home</span>
            <div className="flex flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start w-full">
              <a href="https://www.zomato.com/rourkela/jomha-tribal-cuisine-restaurant-1-udit-nagar/order" target="_blank" rel="noopener noreferrer" className="relative flex flex-1 items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 border border-richblack/10 hover:border-[#cb202d] hover:text-[#cb202d] text-richblack/80 transition-all duration-150 rounded-none group h-[36px] sm:h-[46px]" aria-label="Order on Zomato">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 sm:w-14 sm:h-14 absolute text-[#cb202d] transition-transform duration-150 group-hover:scale-110"><path d="M19.615 9.45l-1.258.473-.167.71-.446.021-.115.978h.408l-.211 1.51c-.131.939.036 1.381.865 1.381.488 0 .91-.175 1.135-.297l.145-.9c-.167.083-.436.19-.618.19-.247 0-.276-.13-.225-.488l.189-1.396h.843c.03-.206.131-.877.16-1h-.865zm-3.779 1.002c-.115.002-.236.01-.361.026a3.592 3.592 0 0 0-1.347.432l.26.789c.269-.15.615-.28.978-.326.538-.066.757.1.79.375.014.109.004.199-.005.289l-.014.056a3.46 3.46 0 0 0-1.097-.036c-.518.063-.943.273-1.204.6a1.324 1.324 0 0 0-.225 1.034c.127.583.553.84 1.199.76.45-.055.812-.27 1.076-.63a2.665 2.665 0 0 1-.03.304 1.74 1.74 0 0 1-.072.29l1.244.001a3.657 3.657 0 0 1-.001-.365c.036-.459.118-1.143.247-2.051a2.397 2.397 0 0 0-.002-.59c-.08-.644-.628-.969-1.436-.958zm6.536.063c-1.194 0-2.107 1.067-2.107 2.342 0 .959.552 1.693 1.628 1.693 1.2 0 2.107-1.067 2.107-2.35 0-.95-.538-1.685-1.628-1.685zm-11.777.041c-.538 0-1.12.465-1.52 1.236.102-.504.08-1.076.051-1.198a8.964 8.964 0 0 1-1.287.122 6.9 6.9 0 0 1-.073 1.243l-.167 1.145c-.066.45-.138.969-.211 1.297h1.353c.007-.199.058-.511.094-.786l.116-.786c.095-.511.502-1.114.815-1.114.182 0 .175.176.124.504l-.131.885c-.066.45-.138.969-.211 1.297h1.367c.008-.199.051-.512.088-.786l.116-.786c.094-.512.502-1.114.814-1.114.182 0 .175.168.146.396l-.327 2.29H13l.438-2.609c.095-.649.044-1.236-.676-1.236-.523 0-1.09.443-1.49 1.182.087-.61.036-1.182-.677-1.182zm-4.88.008c-1.177 0-2.08 1.053-2.08 2.312 0 .946.546 1.67 1.608 1.67 1.185 0 2.08-1.052 2.08-2.319 0-.938-.531-1.663-1.607-1.663zm-5.126.091c-.05.39-.102.778-.175 1.13.328-.008.619-.016 1.411-.016l-1.81 1.96-.015.703c.444-.03.997-.039 1.63-.039.566 0 1.134.008 1.497.039.065-.458.13-.763.21-1.137-.275.015-.755.023-1.512.023l1.81-1.969.023-.694c-.437.023-.83.03-1.52.03-.749 0-.975-.007-1.549-.03zm4.988.927c.255 0 .408.228.408.701 0 .687-.276 1.251-.626 1.251-.261 0-.414-.236-.414-.702 0-.694.283-1.25.632-1.25zm16.629 0c.254 0 .407.228.407.701 0 .687-.276 1.251-.625 1.251-.262 0-.415-.236-.415-.702 0-.694.284-1.25.633-1.25zM15.51 12.64c.206-.003.403.024.55.058l-.013.118c-.075.44-.39.881-.848.938-.31.037-.578-.148-.608-.39a.538.538 0 0 1 .114-.41c.117-.159.336-.268.599-.3.069-.009.138-.013.206-.014Z" fill="currentColor"></path></svg>
              </a>

              <a href="https://www.swiggy.com/city/rourkela/jomha-tribal-cuisine-restaurant-civil-township-rest1193823" target="_blank" rel="noopener noreferrer" className="relative flex flex-1 items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 border border-richblack/10 hover:border-[#fc8019] hover:text-[#fc8019] text-richblack/80 transition-all duration-150 rounded-none group h-[36px] sm:h-[46px]" aria-label="Order on Swiggy">
                <svg viewBox="-1.5 -1.1 2501.5 730" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-14 sm:h-14 absolute text-[#fc8019] transition-transform duration-150 group-hover:scale-110"><path d="M246.7 728.9c-.5-.3-1-.8-1.5-1.3-8.8-10.9-63-79-118.2-166.4-16.6-27.8-27.3-49.6-25.3-55.2 5.4-14.6 101.7-22.6 131.4-9.4 9 4 8.8 9.3 8.8 12.4 0 13.4-.7 49.2-.7 49.2 0 7.4 6 13.4 13.4 13.4s13.4-6 13.4-13.5l-.1-89.4c0-7.8-8.4-9.7-10-10-15.5-.1-46.9-.2-80.7-.2-74.5 0-91.1 3.1-103.8-5.2C45.9 435.5 1.1 314.3 0 246.1-1.5 149.9 55.4 66.6 135.4 25.3 168.8 8.4 206.6-1.1 246.5-1.1c126.7 0 231 95.9 244.9 219.3v.3c2.5 29.8-161.4 36.2-193.8 27.5-5-1.3-6.2-6.4-6.2-8.6 0-22.7-.2-86.5-.2-86.5 0-7.4-6-13.4-13.4-13.4s-13.4 6-13.4 13.5l.3 117.6c.2 7.4 6.4 9.4 8.1 9.7h101.7c54.3 0 77.1 6.3 92.2 17.9 10.1 7.7 14 22.5 10.6 41.7C446.9 508.5 254 720 246.7 728.9zm523-398.5c48.7 20.9 78.8 44.1 78.8 95.1 0 52-39.3 85.6-100.1 85.6-49.3 0-88.8-22.4-108.5-61.4l-3.2-6.3 57.9-33.7 3.8 6.2c13 21.4 27.6 30.5 48.8 30.5 18.2 0 30.5-8.1 30.5-20.2 0-13.4-8.9-18.4-36.3-30.4l-13.9-6c-37.2-15.9-71.6-38-71.6-91.5 0-48.1 36.7-81.6 89.3-81.6 39.8 0 67.2 15.5 86 48.7l3.5 6.2-56.1 36.2-3.9-6.9c-9.4-16.8-18.2-20.2-29.4-20.2-11.7 0-19.3 6.5-19.3 16.6 0 11.6 5.6 16.7 29.9 27.2zm410.1 9.8l40.9-114.4h70.2l-104 290h-15.6L1108.2 380c-2.9-6.2-6-13.9-8.6-21-2.7 7.1-5.8 14.8-8.7 21.1l-65.6 135.8h-15.5l-105.7-290h75l41.3 114.4c2.6 7.3 5.3 16.2 7.7 24.4 2.8-8.5 6.2-17.7 9.7-25.1l54.3-116.1h15l55.1 116.1c3.5 7.4 6.9 16.6 9.7 25.1 2.5-8.3 5.3-17.2 7.9-24.5zm192.9 167.3V219.9h70.8v287.6zm303.1-96.7v-64.3h131.5v128.9l-2.7 2.2c-15 12.4-54.9 33.4-109 33.4-91.2 0-154.8-60.6-154.8-147.4 0-85.2 61.4-147 146.1-147 46.5 0 80.7 13.2 104.3 40.2l4.6 5.3-48.3 48-5.2-5.4c-13.5-13.9-27.5-22.6-55.3-22.6-43.3 0-73.6 33.5-73.6 81.5 0 50 32.3 82.3 82.4 82.3 16.6 0 33.9-2.9 45.7-7.5v-27.7zm359 0v-64.3h131.5v128.9l-2.7 2.2c-15.1 12.4-54.9 33.4-109 33.4-91.2 0-154.8-60.6-154.8-147.4 0-85.2 61.4-147 146-147 46.6 0 80.7 13.2 104.3 40.2l4.6 5.3-48.3 48-5.3-5.4c-13.5-13.9-27.5-22.6-55.4-22.6-43.3 0-73.6 33.5-73.6 81.5 0 50 32.3 82.3 82.4 82.3 16.6 0 33.9-2.9 45.7-7.5v-27.7zM2426 219.9h74l-101.6 191.4v96.2h-71.2v-92.1L2218.9 220h79l50 91.7c5.4 10 11 23.2 15.3 33.9 4.1-10.6 9.4-23.7 14.8-33.8z" fill="currentColor" /></svg>
              </a>
            </div>
          </div>
        </div>


        {/* Right Side Visual Presentation */}
        <div className="hidden lg:flex lg:col-span-6 relative flex-col items-center justify-center mt-6 lg:mt-0">
          <div className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] aspect-square flex items-center justify-center">

            <div className="relative w-full aspect-square bg-warmwhite-pure border border-richblack/[0.06] p-2 sm:p-3 shadow-sm rounded-none">
              <div className="w-full h-full rounded-none overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    src={slides[currentIndex].image}
                    alt={slides[currentIndex].title.replace('\n', ' ')}
                    className="absolute inset-0 w-full h-full object-cover rounded-none"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-richblack/90 via-richblack/20 to-transparent pointer-events-none z-20" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`overlay-${currentIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-30"
                  >
                    <span className="text-warmwhite text-lg sm:text-2xl font-bold tracking-widest uppercase block leading-tight mb-2">
                      {slides[currentIndex].title.replace('\n', ' ')}
                    </span>
                    <div className="flex gap-1 text-[#fc8019]">
                      <i className="fa-solid fa-star text-[10px] sm:text-xs"></i>
                      <i className="fa-solid fa-star text-[10px] sm:text-xs"></i>
                      <i className="fa-solid fa-star text-[10px] sm:text-xs"></i>
                      <i className="fa-solid fa-star text-[10px] sm:text-xs"></i>
                      <i className="fa-solid fa-star text-[10px] sm:text-xs"></i>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <motion.div
              key={`label-${currentIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-warmwhite-pure border border-richblack/[0.05] w-20 h-20 sm:w-24 sm:h-24 flex flex-col justify-center items-center text-center p-2 sm:p-3 shadow-sm rounded-none z-30"
            >
              <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-richblack uppercase block leading-tight whitespace-pre-line">
                {slides[currentIndex].number}
              </span>
              <div className="w-4 sm:w-6 h-[1px] bg-terracotta/30 my-1.5 sm:my-2" />
              <span className="text-[7px] sm:text-[8px] font-medium tracking-wide text-terracotta uppercase block leading-tight whitespace-pre-line">
                Signature
              </span>
            </motion.div>
          </div>

          <div className="flex items-center gap-3 mt-8 sm:mt-6 z-30">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-6 sm:w-8 h-[2px] transition-colors duration-150 p-1 ${currentIndex === i ? 'bg-terracotta' : 'bg-richblack/10'}`}
              >
                <span className="block w-full h-full" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
