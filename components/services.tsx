'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Smartphone,
  Cpu,
  Code,
  ArrowRight,
  Wallet,
  Paintbrush,
  LineChart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const services = [
  {
    title: 'Custom Software Development',
    description:
      'Scalable, high-performance solutions for businesses of all sizes, tailored to your specific requirements.',
    icon: Code,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Web & Mobile Apps',
    description:
      'Stunning, user-friendly applications designed to engage users and deliver exceptional performance across all devices.',
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AI & Automation',
    description:
      'Smart, data-driven solutions that enhance efficiency and decision-making through advanced machine learning algorithms.',
    icon: Cpu,
    color: 'from-green-500 to-emerald-400',
  },
  {
    title: 'Blockchain & Fintech',
    description:
      'Secure and innovative decentralized systems for the future of finance and digital transactions.',
    icon: Wallet,
    color: 'from-orange-500 to-amber-400',
  },
  {
    title: 'UI/UX Design',
    description:
      'Intuitive and modern designs that enhance user experience and drive engagement with your digital products.',
    icon: Paintbrush,
    color: 'from-blue-600 to-indigo-500',
  },
  {
    title: 'Consulting & Strategy',
    description:
      'Tech advisory services to help you stay ahead of the curve and make informed decisions about your digital future.',
    icon: LineChart,
    color: 'from-red-500 to-rose-400',
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  return (
    <section id="services" className="section-spacing bg-background">
      <div className="content-container">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-tag"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="section-title"
          >
            What <span className="gradient-text">We Do</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle"
          >
            We offer a comprehensive range of digital solutions to help
            businesses thrive in the modern technological landscape.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -5, transition: { duration: 0.2 } }} // Reduced movement
            >
              <Card className="feature-card h-full">
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10 rounded-xl"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${service.color.split(' ')[1]}, ${
                      service.color.split(' ')[3]
                    })`,
                  }}
                />
                <CardHeader className="pb-2">
                  <div
                    className={`icon-container bg-gradient-to-br ${service.color}`}
                  >
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <CardDescription className="text-foreground/70 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto group/btn focus-ring"
                  >
                    Learn more
                    <ArrowRight
                      className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                        hoveredIndex === index ? 'translate-x-1' : ''
                      } group-hover/btn:translate-x-1`}
                    />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
