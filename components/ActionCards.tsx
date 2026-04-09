import { motion } from 'framer-motion';
import { Bike, Leaf, Zap, Bus, TreePine, Trash2 } from 'lucide-react';
import { Constants } from '@/app/page';
import ActionCard from './ActionCard';

interface ActionCardsProps {
  onAddAction: (type: any) => void;
  constants: Constants;
}

const ACTIONS = [
  {
    id: 'cycling',
    title: 'Cycling',
    icon: Bike,
    color: 'emerald',
    value: '1 km',
    impact: '0.12 kg CO2',
    description: 'Ride your bike instead of driving',
    tooltip: 'Cycling 1km saves approximately 0.12kg of CO2 compared to driving',
  },
  {
    id: 'composting',
    title: 'Composting',
    icon: Leaf,
    color: 'sage',
    value: '1 kg',
    impact: '0.5 kg CO2',
    description: 'Compost organic waste',
    tooltip: 'Composting 1kg of organic waste prevents 0.5kg CO2 from landfill decomposition',
  },
  {
    id: 'renewable',
    title: 'Renewable Energy',
    icon: Zap,
    color: 'emerald',
    value: '1 kWh',
    impact: '0.45 kg CO2',
    description: 'Use renewable energy sources',
    tooltip: '1 kWh of renewable energy saves 0.45kg CO2 vs fossil fuels',
  },
  {
    id: 'public-transport',
    title: 'Public Transport',
    icon: Bus,
    color: 'blue',
    value: '1 km',
    impact: '0.08 kg CO2',
    description: 'Use public transportation',
    tooltip: 'Public transit 1km saves 0.08kg CO2 vs personal vehicle',
  },
  {
    id: 'plant-tree',
    title: 'Plant A Tree',
    icon: TreePine,
    color: 'emerald',
    value: '1 tree',
    impact: '20 kg CO2',
    description: 'Plant a new tree',
    tooltip: 'One mature tree absorbs ~20kg CO2 per year on average',
  },
  {
    id: 'waste-reduction',
    title: 'Waste Reduction',
    icon: Trash2,
    color: 'sage',
    value: '1 kg',
    impact: '0.3 kg CO2',
    description: 'Reduce single-use items',
    tooltip: 'Reducing 1kg of waste saves 0.3kg CO2 from production & disposal',
  },
];

export default function ActionCards({ onAddAction, constants }: ActionCardsProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 px-2">Quick Actions</h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {ACTIONS.map((action) => (
          <ActionCard
            key={action.id}
            action={action}
            onAdd={() => onAddAction(action.id)}
          />
        ))}
      </motion.div>
    </div>
  );
}
