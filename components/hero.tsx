'use client';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSceneWrapper from './hero-scene-wrapper';

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const sceneVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      ref={targetRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ opacity, y }}
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="gradient-text">Transforming Ideas</span>
              <br />
              Into Digital Reality
            </motion.h1>
            <motion.p
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              We specialize in creating cutting-edge solutions through Mobile
              Apps, Web Development, AI Integration, and Custom Software
              Development.
            </motion.p>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="primary-button focus-ring">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Link href="#services">
                <Button
                  variant="outline"
                  size="lg"
                  className="outline-button focus-ring"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ scale }}
            variants={sceneVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroSceneWrapper />
          </motion.div>
        </div>
      </div>

      {/* Refined scroll indicator */}
      <div className="scroll-indicator">
        <p className="text-sm text-foreground/60 mb-2">Scroll to explore</p>
        <div className="w-5 h-9 border border-foreground/20 rounded-full flex justify-center p-1">
          <div className="scroll-indicator-dot" />
        </div>
      </div>
    </section>
  );
}
