// 'use client';

// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Sparkles, Zap, Code, Lightbulb } from 'lucide-react';

// export default function AboutUs() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 15, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.5, ease: 'easeOut' },
//     },
//   };

//   return (
//     <section id="about" className="section-spacing bg-background">
//       <div className="content-container">
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? 'visible' : 'hidden'}
//           className="max-w-4xl mx-auto text-center"
//         >
//           <motion.div variants={itemVariants} className="mb-6">
//             <span className="section-tag">About Us</span>
//             <h2 className="section-title">
//               QuantumKit –{' '}
//               <span className="gradient-text">
//                 Innovation Engineered for You
//               </span>
//             </h2>
//           </motion.div>

//           <motion.p
//             variants={itemVariants}
//             className="text-lg text-foreground/80 mb-8 leading-relaxed"
//           >
//             At QuantumKit, we are a team of expert developers dedicated to
//             transforming ideas into reality. Whether it's web and mobile
//             applications, AI solutions, blockchain systems, or enterprise
//             software, we craft tailored digital experiences that meet your
//             unique needs.
//           </motion.p>

//           <motion.div
//             variants={containerVariants}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
//           >
//             <motion.div
//               variants={itemVariants}
//               className="feature-card text-left"
//             >
//               <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors">
//                 <Sparkles className="h-5 w-5 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Innovation Focus</h3>
//               <p className="text-foreground/70 leading-relaxed">
//                 We constantly explore cutting-edge technologies to deliver
//                 future-proof solutions that keep you ahead of the competition.
//               </p>
//             </motion.div>

//             <motion.div
//               variants={itemVariants}
//               className="feature-card text-left"
//             >
//               <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors">
//                 <Zap className="h-5 w-5 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Expert Team</h3>
//               <p className="text-foreground/70 leading-relaxed">
//                 Our developers, designers, and strategists bring years of
//                 experience across various industries and technologies.
//               </p>
//             </motion.div>

//             <motion.div
//               variants={itemVariants}
//               className="feature-card text-left"
//             >
//               <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors">
//                 <Code className="h-5 w-5 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Quality Code</h3>
//               <p className="text-foreground/70 leading-relaxed">
//                 We write clean, maintainable, and scalable code that follows
//                 industry best practices and standards.
//               </p>
//             </motion.div>

//             <motion.div
//               variants={itemVariants}
//               className="feature-card text-left"
//             >
//               <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors">
//                 <Lightbulb className="h-5 w-5 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Client-Centric</h3>
//               <p className="text-foreground/70 leading-relaxed">
//                 We listen, innovate, and deliver beyond expectations, ensuring
//                 your vision becomes reality.
//               </p>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Zap, Code, Lightbulb } from 'lucide-react';
import Image from 'next/image';

export default function AboutUs() {
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

  const features = [
    {
      icon: Sparkles,
      title: 'Innovation Focus',
      description:
        'We constantly explore cutting-edge technologies to deliver future-proof solutions that keep you ahead of the competition.',
    },
    {
      icon: Zap,
      title: 'Expert Team',
      description:
        'Our developers, designers, and strategists bring years of experience across various industries and technologies.',
    },
    {
      icon: Code,
      title: 'Quality Code',
      description:
        'We write clean, maintainable, and scalable code that follows industry best practices and standards.',
    },
    {
      icon: Lightbulb,
      title: 'Client-Centric',
      description:
        'We listen, innovate, and deliver beyond expectations, ensuring your vision becomes reality.',
    },
  ];

  return (
    <section
      id="about"
      className="min-h-[80vh] py-20 flex items-center bg-background"
    >
      <div className="content-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Image Column - 25% width on desktop */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/4 flex-shrink-0 order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-[3/4] relative">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="QuantumKit Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-500/10 rounded-full blur-lg" />
            </div>

            {/* Image caption */}
            <div className="mt-4 text-center lg:text-left">
              <span className="text-sm text-foreground/60 italic">
                Our team of experts
              </span>
            </div>
          </motion.div>

          {/* Content Column - 75% width on desktop */}
          <div className="w-full lg:w-3/4 order-1 lg:order-2">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="section-tag">About Us</span>
              <h2 className="section-title">
                QuantumKit –{' '}
                <span className="gradient-text">
                  Innovation Engineered for You
                </span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 mb-8">
              <p className="text-lg text-foreground/80 leading-relaxed">
                At QuantumKit, we are a team of expert developers dedicated to
                transforming ideas into reality. Whether it's web and mobile
                applications, AI solutions, blockchain systems, or enterprise
                software, we craft tailored digital experiences that meet your
                unique needs.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Founded in 2018, our mission is to bridge the gap between
                complex technology and elegant user experiences. We believe that
                great software should not only function flawlessly but also
                delight users at every interaction.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="feature-card text-left"
                >
                  <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
