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
      className="relative z-10 mt-12 border-t border-white/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="w-5 h-5 text-emerald-600" />
              <h3 className="text-lg font-semibold text-slate-900">
                Carbon Handprint Simulator
              </h3>
            </div>
            <p className="text-sm text-slate-700 mb-3">
              A tool for tracking positive environmental impact aligned with UN SDG 13
              (Climate Action). Monitor your sustainable choices and visualize the
              difference you're making for the planet.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <BookOpen className="w-4 h-4" />
              <span>Subject: SCCAES (SCCAES Subject Project)</span>
            </div>
          </div>

          {/* Creator Credits */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full" />
              Project Team - Department of CSE (IoT)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {creators.map((creator, index) => (
                <motion.div
                  key={creator}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="text-sm text-slate-700 flex items-center gap-2"
                >
                  <span className="inline-block w-1 h-1 bg-emerald-600 rounded-full" />
                  {creator}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Divider and Copyright */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <p>
              Built with sustainability in mind. Every action counts towards a greener
              future.
            </p>
            <p>© 2026 Carbon Handprint Simulator. All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
