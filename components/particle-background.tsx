'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      life: number;
      maxLife: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 0.5; // Smaller particles
        this.speedX = Math.random() * 0.5 - 0.25; // Slower movement
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = isDark ? '#3b82f6' : '#3b82f6';
        this.opacity = Math.random() * 0.3 + 0.1; // More subtle opacity
        this.life = 0;
        this.maxLife = Math.random() * 100 + 50;
      }

      update() {
        this.life++;

        // Remove particles after their lifetime
        if (this.life >= this.maxLife) {
          this.life = 0;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.opacity = Math.random() * 0.3 + 0.1;
        }

        // Move particles
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        // Add some subtle randomness to movement
        this.speedX += (Math.random() - 0.5) * 0.01;
        this.speedY += (Math.random() - 0.5) * 0.01;

        // Dampen speed over time for more natural movement
        this.speedX *= 0.99;
        this.speedY *= 0.99;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create particles
    const particleCount = Math.min(window.innerWidth * 0.03, 100); // Fewer particles
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
    }

    // Create connection lines between particles
    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            // Shorter connection distance
            if (!ctx) return;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.05 * (1 - distance / 120)})`; // More subtle connections
            ctx.lineWidth = 0.3; // Thinner lines
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      const gridSize = 40; // Larger grid size
      ctx.strokeStyle = isDark
        ? 'rgba(59, 130, 246, 0.03)'
        : 'rgba(59, 130, 246, 0.02)'; // More subtle grid
      ctx.lineWidth = 0.3;

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      // Connect particles with lines
      connectParticles();

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [theme, isDark]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: isDark ? 0.6 : 0.3 }}
      />

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90"
        style={{ opacity: 0.7 }}
      />

      {/* Subtle glow spots */}
      <motion.div
        className="absolute rounded-full blur-[120px] bg-primary/10"
        animate={{
          top: ['20%', '60%', '30%'],
          left: ['30%', '60%', '70%'],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30, // Slower animation
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
        }}
        style={{ width: '30vw', height: '30vw' }}
      />

      <motion.div
        className="absolute rounded-full blur-[120px] bg-cyan-500/10"
        animate={{
          top: ['70%', '30%', '60%'],
          left: ['70%', '20%', '30%'],
          scale: [1.2, 0.9, 1.2],
        }}
        transition={{
          duration: 35, // Slower animation
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
        }}
        style={{ width: '25vw', height: '25vw' }}
      />
    </div>
  );
}
