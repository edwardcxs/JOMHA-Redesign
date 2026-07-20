/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import Section from './Section';
import RotatingText from './RotatingText';


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
