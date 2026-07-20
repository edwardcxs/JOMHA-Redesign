/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import Section from './Section';
import RotatingText from './RotatingText';

export function Guests() {
  const animatedTitle = (
    <span className="inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start">
      Our
      <RotatingText
        texts={['SPECIAL', 'HONORED']}
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
      Guests
    </span>
  );

  return (
    <Section
      id="guests"
      title={animatedTitle}
      subtitle="Community Voices"
      index="04"
      description="We are privileged to have hosted distinguished personalities who share our passion for preserving and celebrating tribal culture."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20 sm:mb-24">
        <GuestCard
          initials="JO"
          name="Shri Jual Oram"
          role="Minister of Tribal Affairs, Govt. of India"
          quote="I spent some time at Jomha and tried their food, and it honestly made me so happy to see people in today’s modern era still carrying our culture with pride. The way they promote authentic tribal food-so healthy and rooted-is truly admirable, and I genuinely appreciate it."
        />
        <GuestCard
          initials="DG"
          name="Shri Dashrath Gagrai"
          role="MLA of Saraikela, Kharsawa, Jharkhand"
          quote="I visited Jomha Restaurant, and the food and atmosphere instantly reminded me of my village. The flavors truly matched the authentic taste of our tribal dishes, something you rarely find in restaurants. Seeing this made me genuinely happy, and my happiness is completely justified."
        />
      </div>

      <div className="max-w-xl mb-10 sm:mb-12 mx-auto lg:mx-0 text-center lg:text-left">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-richblack uppercase leading-none">
          Our Best Wishes<span className="text-terracotta font-normal">.</span>
        </h3>
        <p className="text-[10px] sm:text-xs text-richblack/40 tracking-wider uppercase mt-3">Messages from our well wishers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <GuestCard
          initials="BI"
          name="Padma Shri Bulu Imam"
          role="Indian Environmentalist"
          quote="Wishing the entire team at JOMHA monumental success. You are setting a new benchmark for regional cuisine representation."
        />
        <GuestCard
          initials="PS"
          name="Dr.Paul Streamer"
          role="Historian, Rural Economist"
          quote="May your kitchen always be filled with the aroma of joy and your tables with happy guests. Best wishes for this incredible journey."
        />
      </div>
    </Section>
  );
}

function GuestCard({ initials, name, role, quote }: { initials: string, name: string, role: string, quote: string }) {
  return (
    <div className="group relative flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 p-6 sm:p-8 bg-warmwhite-pure border border-richblack/[0.04] shadow-sm hover:shadow-xl hover:border-terracotta/20 transition-all duration-150 ">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-terracotta/40 group-hover:text-terracotta transition-colors duration-150">
        <Star className="w-5 h-5 fill-current" />
      </div>
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-richblack flex items-center justify-center text-warmwhite text-xl font-bold flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-150 ">
        {initials}
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-base sm:text-lg font-bold text-richblack uppercase tracking-widest mb-1 transition-colors duration-150 group-hover:text-terracotta">{name}</h3>
        <span className="text-[8px] sm:text-[9px] font-bold tracking-superwide text-terracotta uppercase block mb-3">{role}</span>
        <p className="text-sm sm:text-base text-richblack/60 font-light leading-relaxed">
          "{quote}"
        </p>
      </div>
    </div>
  );
}

export function Achievements() {
  const animatedTitle = (
    <span className="inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start">
      Our
      <RotatingText
        texts={['ACHIEVEMENTS', 'PARTICIPATIONS']}
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
    <Section id="achievements" title={animatedTitle} subtitle="Milestones" index="05">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        <AchievementCard
          image="/images/gallery/culin.jpeg"
          year="Workshop"
          title="Tribal Cuisine Workshop @IHM"
          text="We proudly took part in the Culinary Event at IHM Aurangabad, showcasing our authentic flavours and celebrating regional food culture with aspiring chefs and food lovers."
          link="/blog/ihm-workshop"
        />
        <AchievementCard
          image="/images/gallery/img-0458.webp"
          year="Event"
          title="Running Notations"
          text="A beautiful evening spent with the students of Running Notations Music Academy, surrounded by melodies, smiles, and pure musical energy. Moments like these remind us how music connects hearts beyond words."
          link="/blog/running-notations"
        />
        <AchievementCard
          image="/images/gallery/img-0905.webp"
          year="Community"
          title="Spreading Little Joy"
          text="Our team visited a local orphanage to spend time with the children, share meals, and bring a little joy to their day. It was a heartfelt experience that reminded us of the importance of community and compassion."
          link="/blog/spreading-joy"
        />
      </div>
    </Section>
  );
}

function AchievementCard({ image, year, title, text, link }: { image: string, year: string, title: string, text: string, link: string }) {
  return (
    <Link to={link} className="group relative bg-warmwhite-pure border border-richblack/[0.04] p-3 shadow-sm transition-all duration-150 hover:shadow-2xl hover:border-terracotta/20 flex flex-col ">
      <div className="aspect-[4/3] overflow-hidden relative mb-4 sm:mb-5 bg-richblack/5">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-150 " />
      </div>
      <div className="px-2 pb-2 flex flex-col flex-grow">
        <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-terracotta uppercase mb-2">{year}</span>
        <h3 className="text-sm sm:base font-bold text-richblack uppercase tracking-widest mb-3 transition-colors duration-150 group-hover:text-terracotta">{title}</h3>
        <p className="text-sm sm:text-base text-richblack/60 font-light leading-relaxed mb-5">
          {text}
        </p>
        <div className="mt-auto pt-2 border-t border-richblack/[0.03]">
          <span className="inline-flex items-center gap-2 text-[9px] font-bold tracking-widest uppercase text-terracotta transition-colors group-hover:text-richblack">
            Read More <i className="fa-solid fa-arrow-right-long text-[8px] transition-transform group-hover:translate-x-1"></i>
          </span>
        </div>
      </div>
    </Link>
  );
}
