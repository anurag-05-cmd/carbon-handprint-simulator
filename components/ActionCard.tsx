import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ActionCardProps {
  action: {
    id: string;
    title: string;
    icon: LucideIcon;
    color: string;
    value: string;
    impact: string;
    description: string;
    tooltip: string;
  };
  onAdd: () => void;
}

const colorMap: Record<string, { bg: string; border: string; icon: string; button: string }> = {
  emerald: {
    bg: 'bg-emerald-50/60',
    border: 'border-emerald-200/40',
    icon: 'text-emerald-600',
    button: 'hover:bg-emerald-100/60 active:bg-emerald-200/60',
  },
  sage: {
    bg: 'bg-sage-50/60',
    border: 'border-sage-200/40',
    icon: 'text-sage-600',
    button: 'hover:bg-sage-100/60 active:bg-sage-200/60',
  },
  blue: {
    bg: 'bg-blue-50/60',
    border: 'border-blue-200/40',
    icon: 'text-blue-600',
    button: 'hover:bg-blue-100/60 active:bg-blue-200/60',
  },
};

export default function ActionCard({ action, onAdd }: ActionCardProps) {
  const colors = colorMap[action.color] || colorMap.emerald;
  const Icon = action.icon;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      }}
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden rounded-xl backdrop-blur-md border ${colors.bg} ${colors.border} p-5 shadow-md transition-all duration-200`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full blur-2xl`} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-lg backdrop-blur-sm bg-white/40 border border-white/50`}>
              <Icon className={`w-5 h-5 ${colors.icon}`} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">{action.title}</h3>
              <p className="text-xs text-slate-600">{action.description}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="backdrop-blur-sm bg-white/30 border border-white/40 rounded-lg p-2.5">
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Unit</p>
            <p className="text-sm font-bold text-slate-900">{action.value}</p>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="backdrop-blur-sm bg-white/30 border border-white/40 rounded-lg p-2.5 cursor-help">
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                    Impact
                  </p>
                  <p className="text-sm font-bold text-emerald-600">{action.impact}</p>
                </div>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                className="bg-slate-900/95 text-white border border-slate-700 max-w-xs"
              >
                <p className="text-xs">{action.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Add Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onAdd}
          className={`w-full py-2.5 px-3 rounded-lg font-semibold text-sm text-white bg-emerald-600 border border-emerald-500 transition-all duration-200 flex items-center justify-center gap-2 ${colors.button} shadow-md hover:shadow-lg relative overflow-hidden`}
        >
          {/* Pulse Ring Effect */}
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-emerald-400"
            animate={{
              scale: [1, 1.2],
              opacity: [1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
          <Plus className="w-4 h-4 relative z-10" />
          <span className="relative z-10">Add Action</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
