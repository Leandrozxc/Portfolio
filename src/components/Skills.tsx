import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { SKILL_CATEGORIES } from '../data/portfolio';

export const Skills: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // Split into 2 rows for balanced visual proportions (2 on top, 3 on bottom)
  const primaryCategories = SKILL_CATEGORIES.slice(0, 2);
  const secondaryCategories = SKILL_CATEGORIES.slice(2);

  return (
    <section id="skills" className="py-20 border-t border-neutral-200 dark:border-white/[0.06]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Technical Capabilities
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Core programming languages, frameworks, and tools applied in software projects and technical coursework.
          </p>
        </motion.div>

        <div className="space-y-4">
          {/* Top Row: Primary Languages & Frameworks (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {primaryCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.45, delay: prefersReducedMotion ? 0 : idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 mb-4 uppercase">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200/60 dark:border-white/[0.06] text-neutral-800 dark:text-neutral-200 font-medium transition-colors hover:border-neutral-400 dark:hover:border-white/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: Databases, Tools & Specialized Domains (3 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {secondaryCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.45, delay: prefersReducedMotion ? 0 : (idx + 2) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard className="p-5 sm:p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 mb-3.5 uppercase">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200/60 dark:border-white/[0.06] text-neutral-700 dark:text-neutral-300 transition-colors hover:border-neutral-400 dark:hover:border-white/20 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
