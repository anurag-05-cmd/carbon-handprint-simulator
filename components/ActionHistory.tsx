import { motion, AnimatePresence } from 'framer-motion';
import { X, Bike, Leaf, Zap, Bus, TreePine, Trash2 } from 'lucide-react';
import { CarbonAction } from '@/app/page';

interface ActionHistoryProps {
  actions: CarbonAction[];
  onRemoveAction: (id: string) => void;
}

const ACTION_ICONS: Record<string, any> = {
  cycling: Bike,
  composting: Leaf,
  renewable: Zap,
  'public-transport': Bus,
  'plant-tree': TreePine,
  'waste-reduction': Trash2,
};

const ACTION_LABELS: Record<string, string> = {
  cycling: 'Cycling',
  composting: 'Composting',
  renewable: 'Renewable',
  'public-transport': 'Public Transit',
  'plant-tree': 'Plant Tree',
  'waste-reduction': 'Waste Reduction',
};

const ACTION_COLORS: Record<string, string> = {
  cycling: 'text-emerald-600 bg-emerald-50/40',
  composting: 'text-sage-600 bg-sage-50/40',
  renewable: 'text-amber-600 bg-amber-50/40',
  'public-transport': 'text-blue-600 bg-blue-50/40',
  'plant-tree': 'text-green-600 bg-green-50/40',
  'waste-reduction': 'text-slate-600 bg-slate-50/40',
};

export default function ActionHistory({ actions, onRemoveAction }: ActionHistoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 p-6 shadow-lg"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 bg-slate-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Recent Actions</h2>

        {actions.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8"
          >
            <p className="text-sm text-slate-600">
              {"No actions yet. Start by clicking 'Add Action' above!"}
            </p>
          </motion.div>
        ) : (
          <div className="space-y-2 max-h-96 overflow-y-auto">
            <AnimatePresence mode="popLayout">
              {actions.slice(0, 10).map((action) => (
                <ActionHistoryItem
                  key={action.id}
                  action={action}
                  onRemove={() => onRemoveAction(action.id)}
                />
              ))}
            </AnimatePresence>

            {actions.length > 10 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center pt-2 text-xs text-slate-600"
              >
                +{actions.length - 10} more actions
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ActionHistoryItem({
  action,
  onRemove,
}: {
  action: CarbonAction;
  onRemove: () => void;
}) {
  const Icon = ACTION_ICONS[action.type];
  const label = ACTION_LABELS[action.type];
  const colorClass = ACTION_COLORS[action.type];
  const timeAgo = getTimeAgo(action.timestamp);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        scale: 1,
        boxShadow: [
          '0 0 0 rgba(16, 185, 129, 0)',
          '0 0 12px rgba(16, 185, 129, 0.3)',
          '0 0 0 rgba(16, 185, 129, 0)',
        ]
      }}
      exit={{ opacity: 0, x: 20 }}
      transition={{
        layout: { type: 'spring', stiffness: 300, damping: 30 },
        boxShadow: { duration: 0.6, ease: 'easeOut' },
      }}
      className={`flex items-center justify-between p-3 rounded-lg backdrop-blur-sm border border-white/30 ${colorClass}`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <Icon className="w-4 h-4 flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-900 truncate">{label}</p>
          <p className="text-xs text-slate-600">{timeAgo}</p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRemove}
        className="flex-shrink-0 ml-2 p-1 hover:bg-white/20 rounded-md transition-colors"
        aria-label="Remove action"
      >
        <X className="w-4 h-4 text-slate-600 hover:text-slate-900" />
      </motion.button>
    </motion.div>
  );
}

function getTimeAgo(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}
