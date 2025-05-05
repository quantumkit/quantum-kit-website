'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import ParticleBackground from '@/components/particle-background';
import AboutUs from '@/components/about-us';
import AboutUsStats from '@/components/about-us-stats';
import WhyChooseUs from '@/components/why-choose-us';
import LoadingScreen from '@/components/loading-screen';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Initialize smooth scroll behavior
  useEffect(() => {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
          'href'
        );
        if (!href) return;

        const targetElement = document.querySelector(href);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth',
        });
      });
    });
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const sections = [
      { id: 'hero' },
      { id: 'about' },
      { id: 'services' },
      { id: 'why-choose-us' },
      { id: 'projects' },
      { id: 'contact' },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = 'hero'; // fallback/default
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (!section) continue;

        const offsetTop = section.offsetTop;
        if (offsetTop <= scrollPosition) {
          currentSection = sections[i].id;
          break;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.main
          key="main"
          className="min-h-screen relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ParticleBackground />
          <div className="relative z-10">
            <Navbar activeSection={activeSection} />
            <div className="fixed-header-spacing">
              <Hero />
              <AboutUs />
              <AboutUsStats />
              <Services />
              <WhyChooseUs />
              <Projects />
              <Contact />
              <Footer />
            </div>
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
