'use client';

import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import Projects from '@/components/Projects';
import Expertise from '@/components/Expertise';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Vision />
      <Projects />
      <Expertise />
      <About />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}