import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { EXPERIENCES } from '../data/portfolio';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Experience' | 'Leadership'>('All');
  const prefersReducedMotion = useReducedMotion();

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Leadership') return exp.type === 'Leadership';
    return exp.type !== 'Leadership';
  });

  return (
    <section id="experience" className="py-20 border-t border-neutral-200 dark:border-white/[0.06]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Experience & Leadership
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Technical contributions, campus operations, and student organization leadership.
            </p>
          </motion.div>

          {/* Sub-tabs for filter */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/[0.06] text-xs self-start sm:self-auto">
            {(['All', 'Experience', 'Leadership'] as const).map((tab) => {
              const isSelected = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  aria-pressed={isSelected}
                  className={`relative px-3.5 py-1 rounded-full font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 ${
                    isSelected
                      ? 'text-black dark:text-white'
                      : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="expTabPill"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-sm -z-10"
                    />
                  )}
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.28, delay: prefersReducedMotion ? 0 : index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard className="p-6 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {exp.organization}
                    </span>
                    <span className="text-neutral-300 dark:text-neutral-700">&bull;</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-white/[0.05] text-neutral-700 dark:text-neutral-300 font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 border-t border-neutral-200/80 dark:border-white/[0.06] pt-3.5">
                    {exp.keyContributions.map((item, i) => {
                      const parts = item.split(': ');
                      const hasHeader = parts.length > 1;
                      return (
                        <li key={i} className="text-xs text-neutral-600 dark:text-neutral-300 flex items-start gap-2.5 leading-relaxed">
                          <span className="text-blue-500 shrink-0 mt-1">&bull;</span>
                          <span>
                            {hasHeader ? (
                              <>
                                <strong className="font-semibold text-neutral-900 dark:text-neutral-100">{parts[0]}:</strong>{' '}
                                {parts.slice(1).join(': ')}
                              </>
                            ) : (
                              item
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
