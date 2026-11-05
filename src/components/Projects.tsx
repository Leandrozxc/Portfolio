import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { ArrowUpRight, X, ExternalLink, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const categories = ['All', 'Civic Tech', 'Desktop / Systems', 'Web Apps', 'Academic Systems'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section id="projects" className="py-20 border-t border-neutral-200 dark:border-white/[0.06]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Featured Software Projects
            </h2>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 rounded-2xl sm:rounded-full bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/[0.06] text-xs self-start sm:self-auto">
            {categories.map((cat) => {
              const isSelected = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  aria-pressed={isSelected}
                  className={`relative px-3 py-1 rounded-full font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-1 ${
                    isSelected
                      ? 'text-black dark:text-white'
                      : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="projectFilterPill"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-sm -z-10"
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.97 }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard
                  onClick={() => setActiveProject(project)}
                  className="p-6 cursor-pointer group flex flex-col justify-between h-full min-h-[290px] focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 outline-none"
                  tabIndex={0}
                  role="button"
                  aria-haspopup="dialog"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveProject(project);
                    }
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                        {project.year} &bull; {project.category}
                      </span>
                      <motion.div
                        whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                        className="w-7 h-7 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-white/[0.06] text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors"
                      >
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3 tracking-tight">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-3">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    {project.statusNote && (
                      <div className="mb-3 text-[11px] text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 italic">
                        <AlertCircle size={12} className="text-neutral-400 shrink-0" />
                        <span>{project.statusNote}</span>
                      </div>
                    )}
                    <div className="pt-4 border-t border-neutral-200/80 dark:border-white/[0.06] flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Apple-style Interactive Sheet/Modal */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
              {/* Dimmed backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
                onClick={() => setActiveProject(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-md"
              />

              {/* Modal window */}
              <motion.div
                initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96, y: prefersReducedMotion ? 0 : 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96, y: prefersReducedMotion ? 0 : 8 }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                      {activeProject.year} &bull; {activeProject.category}
                    </span>
                    <h3 id="project-modal-title" className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mt-1">
                      {activeProject.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                      {activeProject.tagline}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveProject(null)}
                    aria-label="Close project modal (Esc)"
                    className="p-2 rounded-full text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Problem Statement */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                      Problem Addressed
                    </h4>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal bg-neutral-50 dark:bg-white/[0.02] p-3.5 rounded-xl border border-neutral-200/60 dark:border-white/[0.04]">
                      {activeProject.problem}
                    </p>
                  </div>

                  {/* Solution & Key Functionality */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                      Solution & Key Functionality
                    </h4>
                    <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 font-normal">
                      {activeProject.solution.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className="text-blue-500 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                      Engineering Highlights
                    </h4>
                    <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400 font-normal">
                      {activeProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-neutral-400">&bull;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.stack.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-white/[0.06] text-neutral-800 dark:text-neutral-200 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status Note disclaimer if any */}
                  {activeProject.statusNote && (
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-400 flex items-start gap-2">
                      <AlertCircle size={15} className="shrink-0 mt-0.5" />
                      <span>{activeProject.statusNote}</span>
                    </div>
                  )}

                  {/* Modal Footer with Role and Links */}
                  <div className="pt-4 border-t border-neutral-200 dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-xs text-neutral-500 font-medium">
                      Role: <span className="text-neutral-800 dark:text-neutral-200">{activeProject.role}</span>
                    </span>
                    <div className="flex items-center gap-3">
                      {activeProject.githubUrl && (
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-neutral-100 dark:bg-white/[0.08] text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                          <span>GitHub Repository</span>
                        </a>
                      )}
                      {activeProject.liveUrl && (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-blue-500"
                        >
                          <span>Live Deployment</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
