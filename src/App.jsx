import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLayoutEffect(() => {
    // Smoother scroll settings could go here or lenis
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="bg-brand-background min-h-screen selection:bg-brand-primary selection:text-brand-background">
      <div id="top"></div>
      <Navbar />
      <Hero />
      <div id="features" className="relative -top-24"></div>
      <Features />
      <div id="philosophy" className="relative -top-24"></div>
      <Philosophy />
      <div id="protocol" className="relative -top-24"></div>
      <Protocol />
      <div id="pricing" className="relative -top-24"></div>
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
