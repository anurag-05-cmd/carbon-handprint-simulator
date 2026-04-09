'use client';

import { motion } from 'framer-motion';
import { TreePine } from 'lucide-react';
import GrowthTreeSVG from './GrowthTreeSVG';

interface TreeGalleryProps {
  totalCO2: number;
}

export default function TreeGallery({ totalCO2 }: TreeGalleryProps) {
  const scale = Math.min(totalCO2 / 20 + 0.5, 2);
  const progressPercentage = Math.min((totalCO2 / 100) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 p-8 shadow-lg"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-slate-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <TreePine className="w-8 h-8 text-emerald-600" />
          Your Growth Tree
        </h2>
        <p className="text-sm text-slate-600 mb-8">
          Watch your environmental impact come to life
        </p>

        {/* Large Tree Container - Fully Visible */}
        <div className="flex flex-col items-center justify-center min-h-80 bg-gradient-to-b from-emerald-50/30 to-slate-50/20 rounded-xl border border-emerald-200/30 py-12">
          {/* Tree grows here with plenty of space */}
          <motion.div
            key="tree"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="flex items-end"
          >
            <GrowthTreeSVG scale={scale} />
          </motion.div>

          {/* Growth indicator below tree */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-center text-sm font-semibold text-slate-700"
          >
            {totalCO2 === 0 ? (
              <span className="text-sage-600">Plant your first action to grow your tree</span>
            ) : (
              <>
                <span className="text-emerald-600 block text-lg">
                  {totalCO2.toFixed(1)} kg CO₂ Saved
                </span>
                <span className="text-slate-600 text-xs mt-1">
                  Tree Growth: {Math.round((scale - 0.5) * 100)}%
                </span>
              </>
            )}
          </motion.p>
        </div>

        {/* Progress bar below */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-slate-700">Growth Progress</span>
            <span className="text-sm font-bold text-emerald-600">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full h-3 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm border border-white/40">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ type: 'spring', stiffness: 50 }}
              className="h-full bg-gradient-to-r from-emerald-400 via-sage-400 to-emerald-500 rounded-full"
            />
          </div>
        </div>

        {/* Stats below progress */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-sm bg-white/40 border border-white/30 rounded-lg p-3 text-center"
          >
            <p className="text-xs font-semibold text-slate-600 uppercase">Total Impact</p>
            <p className="text-lg font-bold text-emerald-600 mt-1">{totalCO2.toFixed(1)}</p>
            <p className="text-xs text-slate-500">kg CO₂</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-sm bg-white/40 border border-white/30 rounded-lg p-3 text-center"
          >
            <p className="text-xs font-semibold text-slate-600 uppercase">Trees Equiv.</p>
            <p className="text-lg font-bold text-sage-600 mt-1">{(totalCO2 / 20).toFixed(1)}</p>
            <p className="text-xs text-slate-500">trees absorbed</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-sm bg-white/40 border border-white/30 rounded-lg p-3 text-center"
          >
            <p className="text-xs font-semibold text-slate-600 uppercase">Growth</p>
            <p className="text-lg font-bold text-blue-600 mt-1">{Math.round((scale - 0.5) * 100)}%</p>
            <p className="text-xs text-slate-500">of max</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
