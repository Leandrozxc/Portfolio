import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { Mail, Check, Copy, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="py-20 border-t border-neutral-200 dark:border-white/[0.06]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Get in touch.
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mt-2 leading-relaxed">
            Interested in discussing an engineering internship, collaborative software project, or civic technology? Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <SpotlightCard className="p-8 sm:p-10 max-w-2xl mx-auto text-center">
            {/* Interactive Email Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-2 pl-4 rounded-2xl bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/[0.08] mb-8">
              <div className="flex items-center gap-2.5 text-sm font-mono text-neutral-800 dark:text-neutral-200">
                <Mail size={16} className="text-neutral-400" />
                <span>{PERSONAL_INFO.email}</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <motion.button
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                  onClick={handleCopy}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-white/10 hover:bg-neutral-50 dark:hover:bg-white/15 text-neutral-900 dark:text-white border border-neutral-200/60 dark:border-white/10 transition-colors shadow-sm"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="copied"
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.7, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                        className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium"
                      >
                        <Check size={13} />
                        <span>Copied!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center gap-1.5"
                      >
                        <Copy size={13} />
                        <span>Copy</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                <motion.a
                  whileTap={prefersReducedMotion ? {} : { scale: 0.96 }}
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-neutral-900 dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity shadow-sm"
                >
                  <span>Open Mail</span>
                  <ArrowUpRight size={13} />
                </motion.a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-6">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span>GitHub</span>
                <ArrowUpRight size={12} className="text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight size={12} className="text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};
