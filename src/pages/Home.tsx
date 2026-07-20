import React from 'react';
import Hero from '../components/Hero';
import { Heritage, Contributions } from '../components/AboutAndEthics';
import MenuRoots from '../components/MenuRoots';
import VisualArchives from '../components/VisualArchives';
import { Guests, Achievements } from '../components/Community';
import Celebrations from '../components/Celebrations';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home({ onOpenReservation }: { onOpenReservation?: () => void }) {
  return (
    <main id="home" className="flex-grow">
      <Hero />
      <Heritage />
      <MenuRoots />
      <VisualArchives />
      <Guests />
      <Achievements />
      <Contributions />
      <Celebrations onOpenReservation={onOpenReservation} />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  );
}
