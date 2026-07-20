/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: ReactNode;
  subtitle: string;
  index: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, index, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative z-10 max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 py-16 sm:py-24 md:py-32 border-t border-richblack/5 w-full ${className}`}>
      <div className="max-w-2xl mb-12 sm:mb-16 md:mb-20 mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 sm:w-8 h-[1px] bg-terracotta/60"></span>
          <span className="text-[8px] sm:text-[9px] font-bold tracking-superwide text-terracotta uppercase">{index} // {subtitle}</span>
          <span className="w-6 sm:w-8 h-[1px] bg-terracotta/60 lg:hidden"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-richblack uppercase leading-none">
          {title}<span className="text-terracotta font-normal">.</span>
        </h2>
        {description && (
          <p className="mt-6 text-base sm:text-lg text-richblack/70 font-light leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
