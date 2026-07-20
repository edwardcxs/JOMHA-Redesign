import { Star } from 'lucide-react';
import Section from './Section';
import RotatingText from './RotatingText';

export default function Guests() {
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
          image="/images/guest/jual oram.webp"
          initials="JO"
          name="Shri Jual Oram"
          role="Minister of Tribal Affairs, Govt. of India"
          quote="I spent some time at Jomha and tried their food, and it honestly made me so happy to see people in today’s modern era still carrying our culture with pride. The way they promote authentic tribal food-so healthy and rooted-is truly admirable, and I genuinely appreciate it."
        />
        <GuestCard
          image="/images/guest/das.jpg"
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
          image="/images/guest/Bulu_Imam.jpg"
          initials="BI"
          name="Padma Shri Bulu Imam"
          role="Indian Environmentalist"
          quote="Wishing the entire team at JOMHA monumental success. You are setting a new benchmark for regional cuisine representation."
        />
        <GuestCard
          image="/images/guest/dr.paul.webp"
          initials="PS"
          name="Dr.Paul Streamer"
          role="Historian, Rural Economist"
          quote="May your kitchen always be filled with the aroma of joy and your tables with happy guests. Best wishes for this incredible journey."
        />
      </div>
    </Section>
  );
}

function GuestCard({ image, initials, name, role, quote }: { image?: string, initials: string, name: string, role: string, quote: string }) {
  return (
    <div className="group relative flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 p-6 sm:p-8 bg-warmwhite-pure border border-richblack/[0.04] shadow-sm hover:shadow-xl hover:border-terracotta/20 transition-all duration-150 ">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-terracotta/40 group-hover:text-terracotta transition-colors duration-150">
        <Star className="w-5 h-5 fill-current" />
      </div>
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-richblack flex items-center justify-center text-warmwhite text-xl font-bold flex-shrink-0 transition-all duration-300 ring-0 group-hover:ring-2 ring-terracotta/40">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover object-center" />
        ) : (
          initials
        )}
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
