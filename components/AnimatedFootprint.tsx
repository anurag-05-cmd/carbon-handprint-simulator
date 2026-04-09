'use client';

import { motion } from 'framer-motion';

interface AnimatedFootprintProps {
  size?: number;
}

export default function AnimatedFootprint({ size = 100 }: AnimatedFootprintProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        y: [0, 6, 0],
        opacity: [0.6, 0.8, 0.6],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Heel */}
      <motion.ellipse
        cx="50"
        cy="30"
        rx="16"
        ry="20"
        fill="currentColor"
        className="text-emerald-600"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Arch */}
      <motion.path
        d="M 40 50 Q 45 55 50 58 Q 55 55 60 50"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        className="text-emerald-600"
        animate={{
          strokeWidth: [8, 10, 8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Toes */}
      {[
        { cx: 25, cy: 85 },
        { cx: 40, cy: 95 },
        { cx: 50, cy: 100 },
        { cx: 60, cy: 95 },
        { cx: 75, cy: 85 },
      ].map((toe, index) => (
        <motion.circle
          key={index}
          cx={toe.cx}
          cy={toe.cy}
          r="6"
          fill="currentColor"
          className="text-emerald-600"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, 3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.1,
          }}
        />
      ))}
    </motion.svg>
  );
}
