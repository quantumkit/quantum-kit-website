'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const projects = [
  {
    title: 'skills-palace',
    description:
      'An AI-powered  platform that helps student at any grade level and help them improve their skill',
    image: '/skill-palace.png',
    background: 'bg-blue-500',
    tags: ['AI', 'Machine Learning', 'Web App'],
  },
  {
    title: 'QuantumCommerce',
    description:
      'A next-generation e-commerce solution with integrated payment processing, inventory management, and customer analytics.',
    image: '/placeholder.svg?height=600&width=800',
    tags: ['E-commerce', 'Mobile App', 'Web App'],
  },
  {
    title: 'BioMetric Security',
    description:
      'A biometric authentication system for high-security environments, featuring facial recognition and fingerprint scanning.',
    image: '/placeholder.svg?height=600&width=800',
    tags: ['Security', 'Biometrics', 'Mobile App'],
  },
  {
    title: 'SmartCity Dashboard',
    description:
      'An IoT-based dashboard for monitoring and managing city infrastructure, including traffic, utilities, and public services.',
    image: '/placeholder.svg?height=600&width=800',
    tags: ['IoT', 'Dashboard', 'Data Visualization'],
  },
];

export default function Projects() {
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

  return (
    <section id="projects" className="section-spacing bg-muted/30">
      <div className="content-container">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-tag"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="section-title"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle"
          >
            Explore our portfolio of innovative digital solutions that have
            helped our clients achieve their business objectives.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/30">
                <div
                  className={`relative h-48 overflow-hidden ${
                    project.background || 'bg-blue-500'
                  }`}
                >
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-contain w-[80%] h-[90%] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-primary/20 text-primary"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <CardDescription className="text-foreground/70 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto group/btn focus-ring"
                  >
                    View project
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

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="outline-button focus-ring"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
