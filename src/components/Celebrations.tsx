/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Section from './Section';
import RotatingText from './RotatingText';
import { Cake, Users, Utensils } from 'lucide-react';

const events = [
  {
    icon: Cake,
    subtitle: 'Intimate & Joyful',
    title: 'Birthday Party',
    text: 'Mark another year around the sun with an unforgettable culinary experience. Gather your closest friends and family around our table for a pristine, memorable celebration.'
  },
  {
    icon: Users,
    subtitle: 'Corporate & Private',
    title: 'Social Events',
    text: 'From corporate gatherings to intimate tribal feasts, our space transforms to host your private events. Expect quiet restraint, elemental ambiance, and unmatched hospitality.'
  },
  {
    icon: Utensils,
    subtitle: 'JOMHA Anywhere',
    title: 'Catering Service',
    text: 'Bring the essence of JOMHA to your chosen venue. Our fire-keepers and foragers will deliver a masterclass in ancestral dining directly to your guests, wherever you are.'
  }
];

export default function Celebrations({ onOpenReservation }: { onOpenReservation?: () => void }) {
  const animatedTitle = (
    <span className="inline-flex items-center gap-x-2 gap-y-1 flex-wrap justify-center lg:justify-start">
      <span>Celebrate Your Special</span>
      <span className="inline-flex items-center gap-2 whitespace-nowrap">
        Day With
        <span className="inline-flex items-center">
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
      </span>
    </span>
  );

  return (
    <Section id="events" title={animatedTitle} subtitle="Private Gatherings" index="07">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {events.map((event, idx) => (
          <div key={idx} className="group relative bg-warmwhite-pure border border-richblack/[0.04] p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-terracotta/20 flex flex-col items-center text-center max-w-sm mx-auto w-full">
            <div className="w-16 h-16 rounded-full bg-richblack/5 border border-richblack/10 flex items-center justify-center mb-6 group-hover:bg-terracotta/10 group-hover:border-terracotta/20 transition-all duration-300">
              <event.icon className="w-7 h-7 text-richblack group-hover:text-terracotta transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col flex-grow w-full">
              <span className="text-[9px] font-bold tracking-widest text-terracotta uppercase mb-3">{event.subtitle}</span>
              <h3 className="text-lg font-bold text-richblack uppercase tracking-widest mb-4 transition-colors duration-300 group-hover:text-terracotta">{event.title}</h3>
              <p className="text-sm text-richblack/60 font-light leading-relaxed mb-8 flex-grow">
                {event.text}
              </p>
              <div className="mt-auto pt-4 border-t border-richblack/[0.03] w-full">
                <button
                  onClick={onOpenReservation}
                  className="inline-flex items-center justify-center gap-2 text-[10px] font-bold tracking-widest uppercase text-terracotta transition-colors group-hover:text-richblack w-full py-2"
                >
                  Inquiry Now <i className="fa-solid fa-arrow-right-long text-[9px] transition-transform group-hover:translate-x-1"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
