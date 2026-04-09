import { motion } from 'framer-motion';
import { TreePine, Droplets, TrendingUp } from 'lucide-react';
import GrowthTreeSVG from './GrowthTreeSVG';

interface EVSMetaphors {
  treeDays: string;
  glacialIce: string;
  timelineYears: string;
}

interface GrowthTrackerProps {
  totalCO2: number;
  evs: EVSMetaphors;
}

export default function GrowthTracker({ totalCO2, evs }: GrowthTrackerProps) {
  // Calculate progress for visualization
  const progressPercentage = Math.min((totalCO2 / 100) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 p-8 shadow-lg h-full"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
          <TreePine className="w-6 h-6 text-emerald-600" />
          Growth Tracker
        </h2>

        {/* Tree Visualization */}
        <div className="mb-8 flex justify-center">
          <GrowthTreeSVG scale={Math.min(totalCO2 / 20 + 0.5, 2)} />
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold text-slate-700">Impact Progress</span>
            <span className="text-sm font-semibold text-emerald-600">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm border border-white/40">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ type: 'spring', stiffness: 50 }}
              className="h-full bg-gradient-to-r from-emerald-400 to-sage-500 rounded-full"
            />
          </div>
        </div>

        {/* EVS Metaphors */}
        <div className="space-y-3">
          <EVSCard
            icon={TreePine}
            title="Tree-Days Equivalent"
            value={evs.treeDays}
            unit="days of tree absorption"
            tooltip="How many days it takes one tree to absorb your saved CO2"
            color="emerald"
          />
          <EVSCard
            icon={Droplets}
            title="Glacial Ice Prevented"
            value={evs.glacialIce}
            unit="liters of glacial melt"
            tooltip="Glacial ice melt prevented by your carbon savings"
            color="blue"
          />
          <EVSCard
            icon={TrendingUp}
            title="Environmental Timeline"
            value={evs.timelineYears}
            unit="years of avg CO2 savings"
            tooltip="Equivalent to your yearly CO2 reduction"
            color="sage"
          />
        </div>

        {/* Message */}
        <div className="mt-6 p-3 rounded-lg backdrop-blur-sm bg-emerald-50/40 border border-emerald-200/40">
          <p className="text-xs text-slate-700 text-center">
            {totalCO2 === 0
              ? '✨ Start adding actions to track your impact!'
              : `🌍 You&apos;re making a real difference with your choices!`}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function EVSCard({
  icon: Icon,
  title,
  value,
  unit,
  color,
}: {
  icon: any;
  title: string;
  value: string | number;
  unit: string;
  tooltip?: string;
  color: 'emerald' | 'blue' | 'sage';
}) {
  const colorClass =
    color === 'emerald' ? 'text-emerald-600' : color === 'blue' ? 'text-blue-600' : 'text-sage-600';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`backdrop-blur-sm bg-white/40 border border-white/30 rounded-lg p-3 transition-all duration-200`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${colorClass} flex-shrink-0 mt-0.5`} />
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{title}</p>
          <p className="text-xl font-bold text-slate-900 mt-1">{value}</p>
          <p className="text-xs text-slate-500 mt-0.5">{unit}</p>
        </div>
      </div>
    </motion.div>
  );
}
