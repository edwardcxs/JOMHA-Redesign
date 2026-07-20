/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import PageIntro from './components/PageIntro';
import ReservationModal from './components/ReservationModal';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
}

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Intro splash — shown only on first load */}
      <PageIntro />
      <motion.div
        className="min-h-screen flex flex-col justify-between bg-warmwhite text-richblack font-sans antialiased"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6, ease: 'easeOut' }}
      >
        <Header onOpenReservation={() => setIsReservationOpen(true)} />
        
        <Routes>
          <Route path="/" element={<Home onOpenReservation={() => setIsReservationOpen(true)} />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>

        <Footer />

        <ReservationModal 
          isOpen={isReservationOpen} 
          onClose={() => setIsReservationOpen(false)} 
        />
      </motion.div>
    </BrowserRouter>
  );
}
