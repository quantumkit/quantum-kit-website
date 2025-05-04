'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const benefits = [
    'End-to-End Development – From ideation to deployment, we handle it all.',
    'Future-Ready Solutions – Cutting-edge technology tailored for your business growth.',
    'Client-Centric Approach – We listen, innovate, and deliver beyond expectations.',
    'Agile & Scalable – Flexible development processes that adapt to your needs.',
  ];

  const testimonials = [
    {
      name: 'Alex Brennan',
      position: 'CEO',
      company: 'TechVision Inc.',
      image: '/placeholder.svg?height=80&width=80',
      quote:
        "QuantumKit transformed our business with their innovative solutions. Their team's expertise and dedication to quality exceeded our expectations at every stage of development.",
      rating: 5,
      color: 'from-blue-500 to-cyan-400',
      glow: 'blue',
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'Innovate Labs',
      image: '/placeholder.svg?height=80&width=80',
      quote:
        'Working with QuantumKit was a game-changer for our startup. Their technical expertise and strategic guidance helped us launch our platform months ahead of schedule.',
      rating: 5,
      color: 'from-purple-500 to-pink-500',
      glow: 'purple',
    },
    {
      name: 'Michael Chen',
      position: 'Product Director',
      company: 'Global Solutions',
      image: '/placeholder.svg?height=80&width=80',
      quote:
        'The team at QuantumKit delivered a complex AI integration that our previous developers said was impossible. Their problem-solving abilities and technical knowledge are unmatched.',
      rating: 5,
      color: 'from-amber-500 to-orange-400',
      glow: 'amber',
    },
    {
      name: 'Elena Rodriguez',
      position: 'Marketing Director',
      company: 'Nexus Digital',
      image: '/placeholder.svg?height=80&width=80',
      quote:
        "Our e-commerce platform's performance improved by 200% after QuantumKit's optimization work. The attention to detail and user experience considerations were impressive.",
      rating: 5,
      color: 'from-green-500 to-emerald-400',
      glow: 'green',
    },
  ];

  const handlePrev = () => {
    setAutoplay(false);
    setActiveTestimonial(
      prev => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const getGlowColor = (glow: string) => {
    switch (glow) {
      case 'blue':
        return '0 0 40px rgba(59, 130, 246, 0.3)';
      case 'purple':
        return '0 0 40px rgba(168, 85, 247, 0.3)';
      case 'amber':
        return '0 0 40px rgba(245, 158, 11, 0.3)';
      case 'green':
        return '0 0 40px rgba(16, 185, 129, 0.3)';
      default:
        return '0 0 40px rgba(59, 130, 246, 0.3)';
    }
  };

  // Add custom scrollbar styling
  const scrollbarStyles = `
    .thin-scrollbar::-webkit-scrollbar {
      width: 4px;
    }
    .thin-scrollbar::-webkit-scrollbar-track {
      background: rgba(59, 130, 246, 0.05);
      border-radius: 10px;
    }
    .thin-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(59, 130, 246, 0.2);
      border-radius: 10px;
    }
    .thin-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(59, 130, 246, 0.3);
    }
  `;

  return (
    <>
      <section
        id="why-choose-us"
        className="min-h-[80vh] py-20 flex items-center bg-background overflow-hidden"
      >
        <style jsx>{scrollbarStyles}</style>
        {/* Cosmic Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-cyan-500/5 blur-3xl"></div>

          {/* HUD Grid Lines */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_transparent_20%,_#3b82f6_20%,_#3b82f6_20.5%,_transparent_20.5%,_transparent_30%,_#3b82f6_30%,_#3b82f6_30.5%,_transparent_30.5%)] bg-[length:24px_24px]"></div>
        </div>

        <div className="content-container relative z-10">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div variants={itemVariants}>
                <span className="section-tag">Why Choose Us</span>
                <h2 className="section-title">
                  We Don't Just Build Software—
                  <span className="gradient-text block mt-2">
                    We Create Success
                  </span>
                </h2>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-foreground/80 mb-8 leading-relaxed"
              >
                At QuantumKit, we create powerful, intelligent, and future-proof
                solutions that drive success for your business.
              </motion.p>

              <motion.div
                variants={containerVariants}
                className="space-y-4 mb-8"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="bg-primary/10 p-1.5 rounded-full mr-3 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-foreground/80">{benefit}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button size="lg" className="primary-button focus-ring">
                  Learn More About Our Process
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>

            {/* Futuristic Testimonial Interface - Compact Version */}
            <motion.div
              variants={containerVariants}
              className="relative h-[380px]" // Reduced height from 500px/550px to 380px
              style={{
                perspective: '1000px',
              }}
            >
              {/* HUD Frame */}
              <div className="absolute inset-0 border border-primary/20 rounded-2xl overflow-hidden">
                {/* HUD Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-primary/5 backdrop-blur-sm border-b border-primary/20 flex items-center justify-between px-3">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-1.5 animate-pulse"></div>
                    <span className="text-xs text-primary/70 font-mono">
                      CLIENT_TESTIMONIALS
                    </span>
                  </div>
                  <div className="text-xs text-primary/70 font-mono">
                    {activeTestimonial + 1}/{testimonials.length}
                  </div>
                </div>

                {/* Testimonial Display Area */}
                <div className="absolute top-8 left-0 right-0 bottom-12 p-3 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {testimonials.map(
                      (testimonial, index) =>
                        index === activeTestimonial && (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{
                              type: 'spring',
                              stiffness: 300,
                              damping: 25,
                            }}
                            className="h-full w-full"
                          >
                            {/* Floating Testimonial Bubble */}
                            <motion.div
                              className="relative h-min rounded-xl overflow-hidden"
                              style={{
                                boxShadow: getGlowColor(testimonial.glow),
                              }}
                              animate={{
                                y: [0, -5, 0], // Reduced floating amplitude
                              }}
                              transition={{
                                duration: 6,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: 'reverse',
                                ease: 'easeInOut',
                              }}
                            >
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-10`}
                              ></div>
                              <div className="absolute inset-0 bg-card/80 backdrop-blur-sm"></div>

                              {/* Content */}
                              <div className="relative h-full p-10 flex flex-col">
                                {/* Client Info - More Compact */}
                                <div className="flex items-center mb-3">
                                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-primary/20 flex-shrink-0">
                                    <Image
                                      src={
                                        testimonial.image || '/placeholder.svg'
                                      }
                                      alt={testimonial.name}
                                      fill
                                      className="object-cover"
                                    />
                                    <div
                                      className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-30 mix-blend-overlay`}
                                    />
                                  </div>
                                  <div>
                                    <div className="flex items-center">
                                      <h4 className="font-bold text-base">
                                        {testimonial.name}
                                      </h4>
                                      <div className="flex ml-2">
                                        {[...Array(testimonial.rating)].map(
                                          (_, i) => (
                                            <Star
                                              key={i}
                                              className="h-3 w-3 fill-yellow-400 text-yellow-400"
                                            />
                                          )
                                        )}
                                      </div>
                                    </div>
                                    <p className="text-foreground/70 text-xs">
                                      {testimonial.position},{' '}
                                      {testimonial.company}
                                    </p>
                                  </div>
                                </div>

                                {/* Quote - Optimized for Space */}
                                <div className="relative flex-grow overflow-auto thin-scrollbar">
                                  <Quote className="absolute top-0 left-0 h-6 w-6 text-primary/20" />
                                  <p className="text-foreground/80 italic pl-5 pr-3 pt-4 leading-relaxed text-sm">
                                    {testimonial.quote}
                                  </p>
                                </div>

                                {/* Decorative Elements - Scaled Down */}
                                <div className="absolute bottom-3 right-3 w-16 h-16 border border-primary/10 rounded-full opacity-20"></div>
                                <div className="absolute top-3 right-3 w-8 h-8 border border-primary/10 rounded-full opacity-20"></div>
                              </div>
                            </motion.div>
                          </motion.div>
                        )
                    )}
                  </AnimatePresence>
                </div>

                {/* HUD Bottom Controls - More Compact */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-primary/5 backdrop-blur-sm border-t border-primary/20 flex items-center justify-between px-3">
                  {/* Navigation Controls */}
                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={handlePrev}
                      className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors focus-ring"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-4 w-4 text-primary" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors focus-ring"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </button>
                  </div>

                  {/* Position Indicators */}
                  <div className="flex space-x-1">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setAutoplay(false);
                          setActiveTestimonial(index);
                        }}
                        className={`w-5 h-1 rounded-full transition-all ${
                          index === activeTestimonial
                            ? 'bg-primary'
                            : 'bg-primary/20'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Particles - Scaled Down */}
              <motion.div
                className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary/10"
                animate={{
                  y: [0, -10, 0],
                  x: [0, 7, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-cyan-500/10"
                animate={{
                  y: [0, 12, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
