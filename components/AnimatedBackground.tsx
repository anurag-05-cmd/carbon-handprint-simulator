'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Leaf {
  id: number;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
}

export function AnimatedBackground() {
  // Generate falling leaves
  const leaves = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-slate-50 to-sage-50" />

      {/* Animated Sky */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-emerald-100/30 to-transparent"
        animate={{
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated Landscape Hills */}
      <svg
        className="absolute bottom-0 left-0 right-0 h-96 text-emerald-200"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Far hills */}
        <motion.path
          d="M 0,300 Q 300,150 600,300 T 1200,300 L 1200,400 L 0,400 Z"
          fill="currentColor"
          opacity="0.2"
          animate={{
            d: [
              'M 0,300 Q 300,150 600,300 T 1200,300 L 1200,400 L 0,400 Z',
              'M 0,320 Q 300,170 600,320 T 1200,320 L 1200,400 L 0,400 Z',
              'M 0,300 Q 300,150 600,300 T 1200,300 L 1200,400 L 0,400 Z',
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Mid hills */}
        <motion.path
          d="M 0,250 Q 200,100 400,250 Q 600,100 800,250 Q 1000,100 1200,250 L 1200,400 L 0,400 Z"
          fill="currentColor"
          opacity="0.35"
          animate={{
            d: [
              'M 0,250 Q 200,100 400,250 Q 600,100 800,250 Q 1000,100 1200,250 L 1200,400 L 0,400 Z',
              'M 0,270 Q 200,120 400,270 Q 600,120 800,270 Q 1000,120 1200,270 L 1200,400 L 0,400 Z',
              'M 0,250 Q 200,100 400,250 Q 600,100 800,250 Q 1000,100 1200,250 L 1200,400 L 0,400 Z',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Front hills */}
        <motion.path
          d="M 0,200 L 150,80 L 300,200 L 450,100 L 600,200 L 750,90 L 900,200 L 1050,100 L 1200,200 L 1200,400 L 0,400 Z"
          fill="currentColor"
          opacity="0.5"
          animate={{
            d: [
              'M 0,200 L 150,80 L 300,200 L 450,100 L 600,200 L 750,90 L 900,200 L 1050,100 L 1200,200 L 1200,400 L 0,400 Z',
              'M 0,210 L 150,90 L 300,210 L 450,110 L 600,210 L 750,100 L 900,210 L 1050,110 L 1200,210 L 1200,400 L 0,400 Z',
              'M 0,200 L 150,80 L 300,200 L 450,100 L 600,200 L 750,90 L 900,200 L 1050,100 L 1200,200 L 1200,400 L 0,400 Z',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>

      {/* Falling Leaves */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-emerald-700"
          initial={{
            left: `${leaf.left}%`,
            top: '-50px',
            rotate: 0,
            opacity: leaf.opacity,
          }}
          animate={{
            top: '100vh',
            rotate: [0, 360, 720],
            opacity: [leaf.opacity, leaf.opacity * 0.5, 0],
            x: [0, 50 * Math.cos(leaf.id), 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'easeIn',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="drop-shadow-sm"
          >
            <path d="M12 2C12 2 8 8 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 8 12 2 12 2M11 20H13V22H11V20M7.5 18.5L8.91 19.91L10.33 18.5L8.91 17.09L7.5 18.5M16.09 19.91L17.5 18.5L16.09 17.09L14.67 18.5L16.09 19.91Z" />
          </svg>
        </motion.div>
      ))}

      {/* Subtle Wind Particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`wind-${i}`}
          className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
          initial={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            left: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated Footprints (subtle) */}
      <motion.div
        className="absolute bottom-32 left-10 text-emerald-300/20"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
          {/* Footprint */}
          <ellipse cx="30" cy="15" rx="12" ry="16" />
          {/* Toes */}
          <circle cx="15" cy="35" r="6" />
          <circle cx="25" cy="38" r="6" />
          <circle cx="35" cy="38" r="6" />
          <circle cx="45" cy="35" r="6" />
        </svg>
      </motion.div>

      {/* Second Footprint Trail */}
      <motion.div
        className="absolute bottom-48 right-16 text-emerald-300/15"
        animate={{
          opacity: [0.05, 0.2, 0.05],
          x: [-30, 0, -30],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <svg width="70" height="70" viewBox="0 0 60 60" fill="currentColor">
          {/* Footprint */}
          <ellipse cx="30" cy="15" rx="12" ry="16" />
          {/* Toes */}
          <circle cx="15" cy="35" r="6" />
          <circle cx="25" cy="38" r="6" />
          <circle cx="35" cy="38" r="6" />
          <circle cx="45" cy="35" r="6" />
        </svg>
      </motion.div>
    </div>
  );
}
