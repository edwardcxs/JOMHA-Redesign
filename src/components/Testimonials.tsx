/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Section from './Section';

interface ReviewCardProps {
  text: string;
  author: string;
  rating: number;
  key?: number | string;
}

const reviewsRow1 = [
  { text: "Memorable evening with delicious food...Wonderful place to explore tribal cuisine .🌸..and service is too good.. nice people 🌼🥰", author: "Geeta Sinku", rating: 5 },
  { text: "The food was extremely tasty and as they presented their tradition it was fabulous! Karan, Mahadev and Sikandar thank you for your service 😊", author: "Anannya Ganguly", rating: 5 },
  { text: "Absolutely loved the food! Rich, earthy flavours that truly reflect traditional Mayurbhanj cuisine. Simple, soulful, and unforgettable. Highly recommend!", author: "Rakesh Kumar Mohanta", rating: 5 },
  { text: "Aswm place & If I have to praise the biryani, it was very tasty. I would suggest everyone to visit once and enjoy the taste.staff was very good….", author: "Girija Shaoo", rating: 5 },
  { text: "Very unique concept in RKL! We tried Bamboo Chicken Biryani, Chicken Patra Poda, and Liver Masala—Biryani and Patra Poda were the highlights. A must-try restaurant at a reasonable price.", author: "Ashish Panigrahi", rating: 5 },
];

const reviewsRow2 = [
  { text: "Bro you must come here and try their Bamboo Chicken Biryani. It was soooo yum..With Zero oil and authentic spices..👌🏻👌🏻👌🏻💞", author: "Trupti Rekha Sethi", rating: 5 },
  { text: "Awesome experience! Unique packaging, super hygienic food, and well-dressed staff. Huge shoutout to Lalita Samad and Reeta Samad for the great effort. Must-try items: Madwa Shake, Bamboo Biryani, and Red Rice Tea.", author: "Rohit Behera", rating: 4 },
  { text: "Jomha is a cozy tribal-themed restaurant offering bold smoky flavours, earthy décor, and authentic dishes like smoked bamboo chicken. A must-visit for anyone wanting to experience true tribal cuisine.", author: "Rajnikant", rating: 4 },
  { text: "Delicious cuisines,beautiful ambiance and welcoming staf members allover a great experience do visit with family and friends.I'm giving a solid 5 star to the resturant ⭐⭐⭐⭐⭐", author: "Arjun Dunugiri", rating: 5 },
  { text: "Nonveg Sode Mandi is a must try. Other Good options are Bamboo BiryaniJil Patra Pitha & Mutton Handi", author: "Amar Joyti", rating: 5 },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 py-16 sm:py-24 md:py-32 border-t border-richblack/5 w-full bg-warmwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 mb-12 sm:mb-16 md:mb-20 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full lg:w-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 sm:w-8 h-[1px] bg-terracotta/60"></span>
            <span className="text-[8px] sm:text-[9px] font-bold tracking-superwide text-terracotta uppercase">08 // Guest Experiences</span>
            <span className="w-6 sm:w-8 h-[1px] bg-terracotta/60 lg:hidden"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-richblack uppercase leading-none">
            What Our Customers Say<span className="text-terracotta font-normal">.</span>
          </h2>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4 bg-warmwhite-pure border border-richblack/[0.06] p-3 sm:p-5 shadow-sm transition-all duration-150 hover:shadow-xl w-auto justify-center group mx-auto lg:mx-0">
          <svg className="w-6 h-6 sm:w-8 sm:h-8 shrink-0 transition-transform duration-150" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 sm:gap-1.5 text-terracotta text-[10px] sm:text-sm">
              {[1, 2, 3, 4].map(i => <i key={i} className="fa-solid fa-star text-[8px] sm:text-[10px]"></i>)}
              <i className="fa-solid fa-star-half-stroke text-[8px] sm:text-[10px]"></i>
              <span className="text-richblack font-bold text-xs sm:text-base ml-1">4.7</span>
            </div>
            <span className="text-[6px] sm:text-[8px] font-bold tracking-widest uppercase text-richblack/40 mt-0.5 sm:mt-1">Based on Verified Reviews</span>
          </div>
        </div>
      </div>

      <div className="space-y-8 sm:space-y-12 md:space-y-16 marquee-group cursor-pointer py-4">
        <div className="relative flex overflow-hidden w-full">
          <div className="animate-marquee-left flex w-max" style={{ animationDuration: "80s" }}>
            <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
              {[...reviewsRow1, ...reviewsRow1].map((review, idx) => (
                <ReviewCard key={idx} text={review.text} author={review.author} rating={review.rating} />
              ))}
            </div>
            <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
              {[...reviewsRow1, ...reviewsRow1].map((review, idx) => (
                <ReviewCard key={idx} text={review.text} author={review.author} rating={review.rating} />
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex overflow-hidden w-full">
          <div className="animate-marquee-right flex w-max" style={{ animationDuration: "80s" }}>
            <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
              {[...reviewsRow2, ...reviewsRow2].map((review, idx) => (
                <ReviewCard key={idx} text={review.text} author={review.author} rating={review.rating} />
              ))}
            </div>
            <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
              {[...reviewsRow2, ...reviewsRow2].map((review, idx) => (
                <ReviewCard key={idx} text={review.text} author={review.author} rating={review.rating} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ text, author, rating }: ReviewCardProps) {
  return (
    <div className="w-[200px] sm:w-[280px] md:w-[320px] flex-shrink-0 bg-warmwhite-pure border border-richblack/[0.04] p-4 sm:p-6 flex flex-col justify-between h-[160px] sm:h-[180px] hover:border-terracotta/20 hover:shadow-2xl transition-all duration-150 group">
      <div className="flex text-terracotta gap-1 mb-2 sm:mb-3 shrink-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <i key={i} className={`fa-solid ${i < Math.floor(rating) ? 'fa-star' : (i < rating ? 'fa-star-half-stroke' : 'fa-star text-richblack/10')} text-[8px] sm:text-[10px]`}></i>
        ))}
      </div>
      <p className="text-sm sm:text-base text-richblack/70 font-light leading-relaxed italic mb-3 sm:mb-4 transition-colors duration-150 group-hover:text-richblack line-clamp-3 overflow-hidden">"{text}"</p>
      <span className="text-[7px] sm:text-[8px] font-bold tracking-widest text-richblack uppercase block mt-auto pt-2.5 sm:pt-4 border-t border-richblack/5 group-hover:text-terracotta transition-colors duration-150 shrink-0">— {author}</span>
    </div>
  );
}
