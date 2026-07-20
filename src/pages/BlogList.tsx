import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blog';
import RotatingText from '../components/RotatingText';

export default function BlogList() {
  return (
    <main className="flex-grow bg-warmwhite pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[10px] font-bold tracking-superwide uppercase text-terracotta hover:text-richblack transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 mb-16">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full lg:w-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-terracotta/60"></span>
              <span className="text-[8px] sm:text-[9px] font-bold tracking-superwide text-terracotta uppercase">Journal</span>
              <span className="w-6 sm:w-8 h-[1px] bg-terracotta/60 lg:hidden"></span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-richblack uppercase leading-none inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start">
              Stories &
              <RotatingText
                texts={['ARTICLE', 'INSIGHTS']}
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
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group flex flex-col bg-warmwhite-pure border border-richblack/[0.04] p-3 shadow-sm hover:shadow-xl hover:border-terracotta/20 transition-all duration-300">
              <div className="w-full aspect-[16/9] overflow-hidden relative mb-5 sm:mb-0 bg-richblack/5 flex-shrink-0">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="px-3 sm:px-6 py-4 sm:py-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-6 h-6 rounded-full overflow-hidden bg-richblack/5 border border-richblack/10">
                    <img src="https://img.icons8.com/?size=100&id=FYkMRk1VgOVC&format=png&color=000000" alt="Team JOMHA" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[9px] font-bold text-richblack uppercase tracking-widest">Team JOMHA</span>
                </div>
                <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-terracotta uppercase mb-2">
                  {post.category} &nbsp;&mdash;&nbsp; {post.date}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-richblack uppercase tracking-widest mb-4 transition-colors duration-300 group-hover:text-terracotta">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base text-richblack/60 font-light leading-relaxed mb-6 line-clamp-3">
                  {post.content.replace(/#+|\*+|-|>/g, '').trim().substring(0, 150)}...
                </p>
                <div className="mt-auto pt-4 border-t border-richblack/[0.03] flex justify-end">
                  <span className="inline-flex items-center gap-2 text-[9px] font-bold tracking-widest uppercase text-terracotta transition-colors group-hover:text-richblack group/link">
                    Read Article <i className="fa-solid fa-arrow-right-long text-[8px] transition-transform group-hover:translate-x-1"></i>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
