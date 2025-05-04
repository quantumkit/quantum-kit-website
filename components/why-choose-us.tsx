'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountUp from 'react-countup';

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // More subtle staggering
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 }, // Reduced movement
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

  const stats = [
    { value: 98, label: 'Client Satisfaction', suffix: '%' },
    { value: 150, label: 'Projects Completed', suffix: '+' },
    { value: 12, label: 'Industries Served', suffix: '+' },
    { value: 5, label: 'Years of Excellence', suffix: '+' },
  ];

  return (
    <section id="why-choose-us" className="section-spacing bg-muted/20">
      <div className="content-container">
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

            <motion.div variants={containerVariants} className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
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

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="feature-card text-center"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <h3 className="text-3xl font-bold mb-1 gradient-text">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </h3>
                <p className="text-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
