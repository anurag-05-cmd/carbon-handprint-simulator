import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import AnimatedFootprint from './AnimatedFootprint';

interface HeroSectionProps {
  totalCO2: number;
}

export default function HeroSection({ totalCO2 }: HeroSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 p-8 sm:p-12 shadow-lg"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-400 rounded-full blur-3xl" />
      </div>

      {/* Animated Footprint Background */}
      <div className="absolute top-4 right-8 opacity-10">
        <AnimatedFootprint size={120} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Total Carbon Handprint</h2>
          <Leaf className="w-8 h-8 text-emerald-600" />
        </div>

        {/* Main Counter */}
        <div className="mb-8">
          <motion.div
            key={totalCO2}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-6xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sage-600"
          >
            {totalCO2.toFixed(2)}
          </motion.div>
          <p className="text-xl text-slate-700 font-medium mt-2">kg CO2 Saved</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4">
          <StatBox
            label="Actions"
            value={`${totalCO2 > 0 ? Math.round(totalCO2 / 5) : 0}`}
            unit="total"
          />
          <StatBox
            label="Impact Level"
            value={
              totalCO2 < 5
                ? 'Sprout'
                : totalCO2 < 20
                  ? 'Seedling'
                  : totalCO2 < 50
                    ? 'Sapling'
                    : 'Mighty'
            }
            unit="tree"
          />
          <StatBox
            label="Days Active"
            value="∞"
            unit="today"
          />
        </div>
      </div>
    </motion.div>
  );
}

function StatBox({
  label,
  value,
  unit,
}: {
  label: string;
  value: string | number;
  unit: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="backdrop-blur-sm bg-white/40 border border-white/30 rounded-lg p-4"
    >
      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{label}</p>
      <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
      <p className="text-xs text-slate-500 mt-1">{unit}</p>
    </motion.div>
  );
}
