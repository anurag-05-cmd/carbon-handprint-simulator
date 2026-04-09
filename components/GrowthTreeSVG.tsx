import { motion } from 'framer-motion';

interface GrowthTreeSVGProps {
  scale: number;
}

export default function GrowthTreeSVG({ scale }: GrowthTreeSVGProps) {
  const normalizedScale = Math.max(0.5, Math.min(scale, 2));

  return (
    <motion.svg
      width="120"
      height="160"
      viewBox="0 0 120 160"
      className="drop-shadow-lg"
      style={{ transformOrigin: 'center bottom' }}
      animate={{
        rotateZ: [0, -1.5, 1.5, -1, 1, 0],
        rotateX: [0, 2, -2, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Trunk */}
      <motion.rect
        x="50"
        y="100"
        width="20"
        height="50"
        fill="#78350f"
        rx="4"
        animate={{ scaleY: normalizedScale }}
        transition={{ type: 'spring', stiffness: 50 }}
      />

      {/* Root visualization */}
      <motion.g
        animate={{ scaleY: normalizedScale * 0.8 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <line
          x1="50"
          y1="150"
          x2="35"
          y2="160"
          stroke="#92400e"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="70"
          y1="150"
          x2="85"
          y2="160"
          stroke="#92400e"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="60"
          y1="150"
          x2="55"
          y2="162"
          stroke="#92400e"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>

      {/* Foliage - Expanding Circles */}
      <defs>
        <radialGradient id="foliageGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.7" />
        </radialGradient>
      </defs>

      {/* Top foliage circle */}
      <motion.circle
        cx="60"
        cy="45"
        r="30"
        fill="url(#foliageGrad)"
        animate={{ r: 30 * normalizedScale }}
        transition={{ type: 'spring', stiffness: 50 }}
      />

      {/* Mid foliage circles */}
      <motion.circle
        cx="40"
        cy="70"
        r="25"
        fill="url(#foliageGrad)"
        animate={{ r: 25 * normalizedScale }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.05 }}
      />
      <motion.circle
        cx="80"
        cy="70"
        r="25"
        fill="url(#foliageGrad)"
        animate={{ r: 25 * normalizedScale }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.05 }}
      />

      {/* Lower foliage circles */}
      <motion.circle
        cx="35"
        cy="95"
        r="20"
        fill="url(#foliageGrad)"
        animate={{ r: 20 * normalizedScale }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.1 }}
      />
      <motion.circle
        cx="85"
        cy="95"
        r="20"
        fill="url(#foliageGrad)"
        animate={{ r: 20 * normalizedScale }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.1 }}
      />

      {/* Leaf accents - animated sparkles */}
      <motion.circle
        cx="50"
        cy="30"
        r="3"
        fill="#86efac"
        animate={{
          r: [3, 5, 3],
          opacity: [0.4, 1, 0.4],
          y: [0, -4, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0,
        }}
      />
      <motion.circle
        cx="75"
        cy="55"
        r="3"
        fill="#86efac"
        animate={{
          r: [3, 5, 3],
          opacity: [0.4, 1, 0.4],
          y: [0, -4, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.6,
        }}
      />
      <motion.circle
        cx="45"
        cy="60"
        r="3"
        fill="#86efac"
        animate={{
          r: [3, 5, 3],
          opacity: [0.4, 1, 0.4],
          y: [0, -4, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.2,
        }}
      />
    </motion.svg>
  );
}
