import { motion } from 'framer-motion';
import { Leaf, BookOpen } from 'lucide-react';

export default function Footer() {
  const creators = [
    'Anurag Deb',
    'Prithvi Raj Banik',
    'Saraswata Chatterjee',
    'Dhruv Poddar',
    'Parijat Bhattacharya',
    'Ahona Sarkar',
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="relative z-10 mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl"
    >
      {/* Decorative gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-sage-400 to-emerald-500" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <Leaf className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                Carbon Handprint Simulator
              </h3>
            </div>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-4">
              A tool for tracking positive environmental impact aligned with UN SDG 13
              (Climate Action). Monitor your sustainable choices and visualize the
              difference you're making for the planet.
            </p>
            <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium">Subject: SCCAES Project</span>
            </div>
          </motion.div>

          {/* Creator Credits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-sm md:text-base font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wide">
              <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full" />
              Project Team
            </h4>
            <p className="text-xs text-slate-400 mb-4 font-medium">
              Department of CSE (IoT)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {creators.map((creator, index) => (
                <motion.div
                  key={creator}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.06 }}
                  className="text-sm text-slate-300 flex items-center gap-2 pb-2 border-b border-slate-700/30 hover:border-emerald-500/50 transition-colors"
                >
                  <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0" />
                  {creator}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm"
        >
          <p className="text-slate-400 text-center sm:text-left">
            Built with sustainability in mind. Every action counts towards a greener future.
          </p>
          <p className="text-slate-500 font-medium">
            © 2026 Carbon Handprint Simulator
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
