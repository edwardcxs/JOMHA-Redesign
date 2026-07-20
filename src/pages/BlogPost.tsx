import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Markdown from 'react-markdown';
import { blogPosts } from '../data/blog';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <main className="flex-grow bg-warmwhite pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-5 sm:px-12 lg:px-16">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-[10px] font-bold tracking-superwide uppercase text-terracotta hover:text-richblack transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Journal
        </Link>

        <article className="max-w-3xl mx-auto">
          <header className="mb-10 sm:mb-14 text-left">
            <div className="flex items-center justify-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-richblack/5 border border-richblack/10">
                <img src="https://img.icons8.com/?size=100&id=FYkMRk1VgOVC&format=png&color=000000" alt="Team JOMHA" className="w-full h-full object-cover" />
              </div>
              <div className="text-left flex flex-col">
                <span className="text-xs font-bold text-richblack uppercase tracking-widerst">Team JOMHA</span>
                <span className="text-[9px] font-medium text-richblack/60 uppercase tracking-widerst">Culinary Authors</span>
              </div>
            </div>
            <div className="flex items-center justify-start gap-3 mb-4">
              <span className="text-[10px] font-bold tracking-widerst text-terracotta uppercase">
                {post.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-richblack/20"></span>
              <span className="text-[10px] font-bold tracking-widerst text-richblack/40 uppercase">
                {post.date}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-richblack uppercase leading-tight mb-8">
              {post.title}
            </h1>
          </header>

          <div className="w-full overflow-hidden mb-12 sm:mb-16 bg-richblack/5">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto max-h-[60vh] object-cover" 
            />
          </div>

          <div className="prose prose-base sm:prose-lg md:prose-xl max-w-none text-richblack/80 font-normal leading-loose tracking-wider space-y-8 px-2 sm:px-4 markdown-body">
            <Markdown>{post.content}</Markdown>
          </div>
          
        </article>

        {relatedPosts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-richblack/10">
            <h2 className="text-2xl sm:text-3xl font-light text-richblack uppercase tracking-widerst text-center mb-10">Continue Reading</h2>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="group flex flex-col bg-warmwhite-pure border border-richblack/[0.04] p-3 shadow-sm hover:shadow-xl hover:border-terracotta/20 transition-all duration-300">
                  <div className="w-full aspect-[16/9] overflow-hidden relative mb-5 sm:mb-0 bg-richblack/5 flex-shrink-0">
                    <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="px-3 sm:px-5 py-3 sm:py-4 flex flex-col flex-grow justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-5 rounded-full overflow-hidden bg-richblack/5 border border-richblack/10">
                        <img src="https://img.icons8.com/?size=100&id=FYkMRk1VgOVC&format=png&color=000000" alt="Team JOMHA" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[8px] font-bold text-richblack uppercase tracking-widerst">Team JOMHA</span>
                    </div>
                    <h3 className="text-base font-bold text-richblack uppercase tracking-widerst mb-3 transition-colors duration-300 group-hover:text-terracotta">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-richblack/60 font-light leading-relaxed mb-4 line-clamp-2">
                      {relatedPost.content}
                    </p>
                    <div className="mt-auto pt-3 border-t border-richblack/[0.03] flex justify-end">
                      <span className="inline-flex items-center gap-2 text-[9px] font-bold tracking-widerst uppercase text-terracotta transition-colors group-hover:text-richblack group/link">
                        Read <i className="fa-solid fa-arrow-right-long text-[8px] transition-transform group-hover:translate-x-1"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
               <Link 
                to="/blog" 
                className="px-8 py-4 bg-richblack hover:bg-terracotta text-warmwhite text-[10px] font-bold tracking-superwide uppercase transition-all duration-300 rounded-none inline-flex items-center gap-3 shadow-lg hover:shadow-terracotta/20"
              >
                <span>View All Articles</span>
                <i className="fa-solid fa-arrow-right-long text-[9px] transition-transform"></i>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
