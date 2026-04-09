'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import ActionCards from '@/components/ActionCards';
import GrowthTracker from '@/components/GrowthTracker';
import ActionHistory from '@/components/ActionHistory';

export interface CarbonAction {
  id: string;
  type: 'cycling' | 'composting' | 'renewable' | 'public-transport' | 'plant-tree' | 'waste-reduction';
  timestamp: number;
}

export interface Constants {
  cycling: number; // kg CO2 saved per 1km
  composting: number; // kg CO2 saved per 1kg
  renewable: number; // kg CO2 saved per 1 kWh
  publicTransport: number; // kg CO2 saved per 1km
  plantTree: number; // kg CO2 saved per tree
  wasteReduction: number; // kg CO2 saved per 1kg
}

const IMPACT_CONSTANTS: Constants = {
  cycling: 0.12,
  composting: 0.5,
  renewable: 0.45,
  publicTransport: 0.08,
  plantTree: 20,
  wasteReduction: 0.3,
};

export default function Home() {
  const [actions, setActions] = useState<CarbonAction[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedActions = localStorage.getItem('carbonActions');
    if (savedActions) {
      try {
        setActions(JSON.parse(savedActions));
      } catch (e) {
        console.error('Failed to parse saved actions:', e);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save to localStorage whenever actions change
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('carbonActions', JSON.stringify(actions));
    }
  }, [actions, isHydrated]);

  const addAction = (type: CarbonAction['type']) => {
    const newAction: CarbonAction = {
      id: `${Date.now()}-${Math.random()}`,
      type,
      timestamp: Date.now(),
    };
    setActions((prev) => [newAction, ...prev]);
  };

  const removeAction = (id: string) => {
    setActions((prev) => prev.filter((action) => action.id !== id));
  };

  const calculateTotalCO2 = (): number => {
    return actions.reduce((total, action) => {
      switch (action.type) {
        case 'cycling':
          return total + IMPACT_CONSTANTS.cycling;
        case 'composting':
          return total + IMPACT_CONSTANTS.composting;
        case 'renewable':
          return total + IMPACT_CONSTANTS.renewable;
        case 'public-transport':
          return total + IMPACT_CONSTANTS.publicTransport;
        case 'plant-tree':
          return total + IMPACT_CONSTANTS.plantTree;
        case 'waste-reduction':
          return total + IMPACT_CONSTANTS.wasteReduction;
        default:
          return total;
      }
    }, 0);
  };

  const calculateEVSMetaphors = (totalCO2: number) => {
    const treeDays = totalCO2 / 20; // 1 tree absorbs ~20kg CO2/year = ~0.055kg/day
    const glacialIce = totalCO2 * 4.5; // approx 4.5L of glacial ice prevented per kg CO2
    const timelineYears = totalCO2 / 5; // avg person saves ~5kg CO2/year

    return {
      treeDays: treeDays.toFixed(1),
      glacialIce: glacialIce.toFixed(1),
      timelineYears: timelineYears.toFixed(2),
    };
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-sage-50 flex items-center justify-center">
        <div className="text-slate-900">Loading...</div>
      </div>
    );
  }

  const totalCO2 = calculateTotalCO2();
  const evs = calculateEVSMetaphors(totalCO2);

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-sage-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">
            Carbon Handprint Simulator
          </h1>
          <p className="text-slate-600 text-lg">
            Track your positive environmental impact for UN SDG 13: Climate Action
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Hero & Actions */}
          <div className="lg:col-span-2 space-y-6">
            <HeroSection totalCO2={totalCO2} />
            <ActionCards onAddAction={addAction} constants={IMPACT_CONSTANTS} />
          </div>

          {/* Right Column - Summary */}
          <div className="space-y-6">
            <GrowthTracker totalCO2={totalCO2} evs={evs} />
            <ActionHistory actions={actions} onRemoveAction={removeAction} />
          </div>
        </div>
      </div>
    </main>
  );
}
