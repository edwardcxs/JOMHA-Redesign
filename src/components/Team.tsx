import React from 'react';
import Section from './Section';
import RotatingText from './RotatingText';

interface TeamMemberProps {
  name: string;
  role: string;
  image?: string; // pass a path like "/images/team/name.jpg" when ready
  key?: number | string;
}

const teamRow1 = [
  { name: "Dr.Patrick Chabu", role: "Marketing Advisor", image: "/images/team/pat.jpeg" },
  { name: "Edward Kindo", role: "Technical Expert", image: "/images/team/edward-kindo.jpeg" },
  { name: "Atish Niketan", role: "Asst. Technical Expert", image: "/images/team/atish niketan.jpeg" },
  { name: "Sikandar Samad", role: "Social Media Manager", image: "/images/team/sikandar.jpeg" },
  { name: "Lalita Samad", role: "Founder", image: "/images/team/lalita samad.jpeg" },
  { name: "Reeta Samad", role: "Co-Founder", image: "/images/team/reeta-samad.jpg" },
  { name: "Krishna Jha", role: "JOMHA Manager", image: "/images/team/krishna.jpeg" },
  { name: "Dinabandhu Soren", role: "Tribal Art Designer", image: "/images/team/dina.jpeg" },
  { name: "Gautam Halder", role: "Printing Media | Color Concept", image: "/images/team/gautam.jpeg" },
  { name: "Hemant Gagrai", role: "Financial Advisor", image: "/images/team/hemant-gagrai.jpg" },
  { name: "Sikandar Kumar", role: "Head Chef", image: "/images/team/sikandar kumar.jpeg" },
  { name: "Sinu Bhoi", role: "Kitchen Staff", image: "/images/team/sinu bhoi.jpeg" },
];

const teamRow2 = [
  { name: "Binod Lakra", role: "Kitchen Staff", image: "/images/team/Binod.jpeg" },
  { name: "Mahadev Samad", role: "Service Incharge", image: "/images/team/mahadev.jpeg" },
  { name: "Sitla Samad", role: "Kitchen Staff", image: "/images/team/sitla.jpeg" },
  { name: "Sanatan Naik", role: "Kitchen Staff", image: "/images/team/Sana.jpeg" },
  { name: "Ajit Kerketta", role: "Kitchen Staff", image: "/images/team/Ajit.jpeg" },
  { name: "Subhashish Kar", role: "Asst. Manager", image: "" },
  { name: "Anshuman Acharya", role: "Service Staff", image: "/images/team/Ansu.jpeg" },
  { name: "Sangeeta Mohanty", role: "Service Staff", image: "/images/team/San.jpeg" },
  { name: "Sahid Lohar", role: "Service Staff", image: "/images/team/Sahid.jpeg" },
  { name: "Shankar Mandal", role: "Interior Designer", image: "" },
  { name: "Debashis Kar", role: "Marketing Strategist | Running Notations", image: "/images/team/deba.jpg" },
];

function getInitials(name: string) {
  const parts = name.split(/[\s.]+/).filter(Boolean);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center justify-start p-2 sm:p-4 w-[160px] sm:w-[240px] flex-shrink-0 group">
      {/* Avatar — swap `image` from "" to a real path to show the photo */}
      <div className="relative w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-3 sm:mb-4 border border-richblack/5 transition-all duration-300 group-hover:border-terracotta/40 group-hover:shadow-xl shrink-0">
        {image ? (
          /* ── Real photo ── */
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          /* ── Placeholder (shows until you add a photo) ── */
          <div className="w-full h-full flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-richblack/90 to-richblack">
            {/* Initials */}
            <span className="text-warmwhite/90 text-2xl sm:text-3xl font-light leading-none">
              {getInitials(name)}
            </span>
            {/* Tiny camera icon hint */}
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-warmwhite/25"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 15.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4Z" />
              <path d="M9 2 7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3.17L15 2H9Zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" />
            </svg>
          </div>
        )}
        {/* Hover overlay ring */}
        <div className="absolute inset-0 rounded-full ring-0 group-hover:ring-2 ring-terracotta/40 transition-all duration-300 pointer-events-none" />
      </div>
      <div className="flex flex-col items-center justify-start flex-grow">
        <h3 className="text-xs sm:text-sm font-bold text-richblack uppercase tracking-widest text-center transition-colors duration-150 group-hover:text-terracotta mb-1 sm:mb-2 min-h-[36px] sm:min-h-[40px] flex items-center">{name}</h3>
        <span className="text-[8px] sm:text-[9px] font-bold tracking-superwide text-richblack/50 uppercase text-center">{role}</span>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative z-10 py-16 sm:py-24 md:py-32 border-t border-richblack/5 w-full bg-warmwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 mb-12 sm:mb-16 md:mb-20 flex flex-col items-center sm:items-start text-center sm:text-left">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 sm:w-8 h-[1px] bg-terracotta/60"></span>
          <span className="text-[8px] sm:text-[9px] font-bold tracking-superwide text-terracotta uppercase">09 // The Artisans</span>
          <span className="w-6 sm:w-8 h-[1px] bg-terracotta/60 sm:hidden"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-richblack uppercase leading-none inline-flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          Meet Our
          <RotatingText
            texts={['TEAM', 'CREW']}
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
        </h2>
      </div>

      <div className="flex flex-col gap-8 sm:gap-16 w-full marquee-group py-4">
        <div className="relative flex overflow-hidden w-full">
          <div className="animate-marquee-left flex w-max" style={{ animationDuration: "105s" }}>
            <div className="flex gap-2 sm:gap-8 pr-2 sm:pr-8">
              {[...teamRow1, ...teamRow1].map((member, idx) => (
                <TeamMember key={idx} {...member} />
              ))}
            </div>
            <div className="flex gap-2 sm:gap-8 pr-2 sm:pr-8">
              {[...teamRow1, ...teamRow1].map((member, idx) => (
                <TeamMember key={idx} {...member} />
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex overflow-hidden w-full">
          <div className="animate-marquee-right flex w-max" style={{ animationDuration: "105s" }}>
            <div className="flex gap-2 sm:gap-8 pr-2 sm:pr-8">
              {[...teamRow2, ...teamRow2].map((member, idx) => (
                <TeamMember key={idx} {...member} />
              ))}
            </div>
            <div className="flex gap-2 sm:gap-8 pr-2 sm:pr-8">
              {[...teamRow2, ...teamRow2].map((member, idx) => (
                <TeamMember key={idx} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
