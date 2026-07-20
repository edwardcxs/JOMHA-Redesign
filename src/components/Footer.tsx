/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { MapPin, Clock, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-richblack text-warmwhite py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 text-center sm:text-left">

        {/* Brand */}
        <div className="space-y-6 flex flex-col items-center sm:items-start">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-xl sm:text-2xl font-bold tracking-megawide text-warmwhite leading-none uppercase">JOMHA</span>
            <span className="text-[8px] sm:text-[9px] font-medium tracking-superwide text-warmwhite/80 uppercase mt-1.5">Tribal Cuisine</span>
            <span className="text-sm font-light text-warmwhite/70 mt-4 text-center sm:text-left">ଜୋମ୍ହା ସହିତ ଆଦିବାସୀ ଖାଦ୍ୟର ଅନୁଭବ ନିଅନ୍ତୁ</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6 flex flex-col items-center sm:items-start">
          <h4 className="text-xs font-bold tracking-superwide uppercase text-warmwhite">Quick Links</h4>
          <div className="flex flex-col gap-3 text-base text-warmwhite/80 font-light items-center sm:items-start">
            <Link to="/#home" className="hover:text-warmwhite transition-colors w-fit">Home</Link>
            <Link to="/menu" className="hover:text-warmwhite transition-colors w-fit">Menu</Link>
            <Link to="/gallery" className="hover:text-warmwhite transition-colors w-fit">Gallery</Link>
            <Link to="/blog" className="hover:text-warmwhite transition-colors w-fit">Blog</Link>
            <Link to="/#contact" className="hover:text-warmwhite transition-colors w-fit">Contact</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6 flex flex-col items-center sm:items-start">
          <h4 className="text-xs font-bold tracking-superwide uppercase text-warmwhite">Contact Info</h4>
          <div className="text-base text-warmwhite/80 font-light leading-relaxed space-y-4">
            <p className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-warmwhite shrink-0 mt-1" />
              <span>
                Uditnagar, Rourkela, Odisha 769012
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-warmwhite shrink-0" />
              <span>+91 82603 72068</span>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-warmwhite shrink-0" />
              <span>jomhatribalcuisine@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Social & Hours */}
        <div className="space-y-6 flex flex-col items-center sm:items-start">
          <h4 className="text-xs font-bold tracking-superwide uppercase text-warmwhite">Follow Us</h4>
          <div className="flex gap-5 items-center justify-center sm:justify-start">
            <a href="#" className="text-warmwhite/60 hover:text-warmwhite transition-colors" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-warmwhite/60 hover:text-warmwhite transition-colors" aria-label="Instagram">
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
          </div>
          <p className="flex items-center gap-3 text-base text-warmwhite/80 font-light mt-4">
            <Clock className="w-5 h-5 text-warmwhite shrink-0" />
            <span>11:00AM–10:30PM</span>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 mt-12 sm:mt-24 pt-8 border-t border-warmwhite/20 flex flex-col justify-center items-center gap-4 text-xs font-medium tracking-wide text-warmwhite/60 text-center">
        <span>
          &copy; 2026 JOMHA Restaurant. All rights reserved. | Developed With ❤️ By{' '}
          <a href="https://www.edwardkindo.in/" target="_blank" rel="noopener noreferrer" className="hover:text-warmwhite transition-colors underline decoration-warmwhite/30 underline-offset-2">Edward Kindo</a>
          {' '}&{' '}
          <a href="https://atishniketan.blogspot.com/" target="_blank" rel="noopener noreferrer" className="hover:text-warmwhite transition-colors underline decoration-warmwhite/30 underline-offset-2">Atish Niketan</a>
        </span>
      </div>
    </footer>
  );
}
