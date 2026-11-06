import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { ArrowUpRight, X, ExternalLink, AlertCircle, CheckCircle2, Cpu, RotateCcw } from 'lucide-react';
import { Github } from './Icons';
import { PROJECTS } from '../data/portfolio';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const prefersReducedMotion = useReducedMotion();
  
  // Accessibility & Focus Management Refs
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const categories = ['All', 'Civic Tech', 'Desktop / Systems', 'Web Apps', 'Academic Systems'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  // Focus trap & Escape key handling for modal
  useEffect(() => {
    if (!activeProject) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the close button once opened
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 40);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement || document.activeElement === modalRef.current) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  const openModal = (project: Project, e: React.MouseEvent<HTMLElement>) => {
    triggerRef.current = e.currentTarget;
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
    // Restore focus to triggering button
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 50);
  };

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
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              Production utilities, desktop tools, and civic platforms engineered with modern stacks.
            </p>
          </motion.div>

          {/* Filter Tabs - Horizontal swipe on mobile, wrap on desktop */}
          <div
            role="tablist"
            aria-label="Filter projects by domain"
            className="flex items-center gap-1.5 p-1 rounded-2xl sm:rounded-full bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/[0.06] text-xs self-stretch sm:self-auto overflow-x-auto max-w-full touch-manipulation [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap"
          >
            {categories.map((cat) => {
              const isSelected = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  id={`tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                  aria-selected={isSelected}
                  aria-controls="projects-grid"
                  onClick={() => setSelectedFilter(cat)}
                  className={`relative whitespace-nowrap shrink-0 min-h-[38px] sm:min-h-[32px] px-3.5 py-1.5 rounded-full font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-1 after:absolute after:-inset-1 after:content-[''] ${
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

        {/* Screen Reader Filter Announcement */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {selectedFilter === 'All'
            ? `Showing all ${PROJECTS.length} projects`
            : `Showing ${filteredProjects.length} projects for category ${selectedFilter}`}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          id="projects-grid"
          role="region"
          aria-label="Projects list"
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length === 0 ? (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-1 md:col-span-2 py-16 px-6 rounded-2xl border border-dashed border-neutral-200 dark:border-white/10 text-center bg-neutral-50/50 dark:bg-white/[0.01]"
              >
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  No projects currently listed under category <span className="font-semibold text-neutral-900 dark:text-neutral-100">"{selectedFilter}"</span>.
                </p>
                <button
                  onClick={() => setSelectedFilter('All')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-neutral-900 dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  <RotateCcw size={13} />
                  <span>View All Projects</span>
                </button>
              </motion.div>
            ) : (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.97 }}
                  transition={{ duration: prefersReducedMotion ? 0.01 : 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SpotlightCard className="p-6 flex flex-col justify-between h-full min-h-[320px] focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 outline-none group">
                    <div>
                      {/* Top Row: Year, Category & Status Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                          {project.year} &bull; {project.category}
                        </span>
                        {project.liveUrl && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Live Demo
                          </span>
                        )}
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-1 break-words">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3 tracking-tight break-words">
                        {project.tagline}
                      </p>

                      {/* Summary */}
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-4 break-words">
                        {project.summary}
                      </p>

                      {/* Scannable Key Decisions for Technical Recruiters */}
                      {project.keyDecisions && (
                        <div className="space-y-1.5 mb-4 p-3 rounded-xl bg-neutral-100/70 dark:bg-white/[0.03] border border-neutral-200/60 dark:border-white/[0.04]">
                          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                            <Cpu size={12} className="text-blue-500 shrink-0" />
                            <span>Core Technical Decisions:</span>
                          </div>
                          {project.keyDecisions.map((kd, i) => (
                            <div key={i} className="text-xs text-neutral-600 dark:text-neutral-400 flex items-start gap-1.5 leading-relaxed break-words">
                              <span className="text-neutral-400 dark:text-neutral-600 mt-0.5 shrink-0">&bull;</span>
                              <span>{kd}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      {project.statusNote && (
                        <div className="mb-3 text-[11px] text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 italic">
                          <AlertCircle size={12} className="text-neutral-400 shrink-0" />
                          <span className="break-words">{project.statusNote}</span>
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="pt-3 border-t border-neutral-200/80 dark:border-white/[0.06] flex flex-wrap gap-1.5 mb-4">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-300 font-mono font-medium truncate max-w-[200px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Direct Recruiter Actions with Hardened Touch Targets */}
                      <div className="flex items-center justify-between gap-2 pt-2">
                        <button
                          onClick={(e) => openModal(project, e)}
                          aria-label={`Open architecture case study for ${project.title}`}
                          className="relative inline-flex items-center gap-1.5 py-1.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 rounded-lg after:absolute after:-inset-2 after:content-['']"
                        >
                          <span>Deep Dive Specs</span>
                          <ArrowUpRight size={13} />
                        </button>

                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} GitHub repository`}
                              className="relative inline-flex items-center gap-1 px-2.5 py-1.5 sm:py-1 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 after:absolute after:-inset-1.5 after:content-['']"
                            >
                              <Github size={13} />
                              <span>Code</span>
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open live deployment of ${project.title}`}
                              className="relative inline-flex items-center gap-1 px-2.5 py-1.5 sm:py-1 rounded-lg text-xs font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-blue-500 after:absolute after:-inset-1.5 after:content-['']"
                            >
                              <ExternalLink size={12} />
                              <span>Live</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Architecture Sheet / Modal - Responsive Bottom Sheet on Mobile, Centered Modal on Desktop */}
        <AnimatePresence>
          {activeProject && (
            <div
              className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              aria-describedby="project-modal-desc"
            >
              {/* Dimmed backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
                onClick={closeModal}
                className="fixed inset-0 bg-black/60 backdrop-blur-md"
              />

              {/* Modal / Bottom Sheet Window */}
              <motion.div
                ref={modalRef}
                tabIndex={-1}
                initial={{
                  opacity: 0,
                  y: prefersReducedMotion ? 0 : 32,
                  scale: prefersReducedMotion ? 1 : 0.98,
                }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  y: prefersReducedMotion ? 0 : 28,
                  scale: prefersReducedMotion ? 1 : 0.98,
                }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 border-t sm:border border-neutral-200 dark:border-white/10 rounded-t-[28px] sm:rounded-3xl p-5 sm:p-8 shadow-2xl text-left outline-none touch-manipulation overscroll-contain pb-8 sm:pb-8"
              >
                {/* Mobile Drag Indicator Handle */}
                <div
                  className="w-12 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 mx-auto -mt-1 mb-4 sm:hidden shrink-0"
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                      {activeProject.year} &bull; {activeProject.category}
                    </span>
                    <h3 id="project-modal-title" className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mt-1 break-words">
                      {activeProject.title}
                    </h3>
                    <p id="project-modal-desc" className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5 break-words">
                      {activeProject.tagline}
                    </p>
                  </div>
                  <button
                    ref={closeButtonRef}
                    onClick={closeModal}
                    aria-label="Close project modal (Esc)"
                    className="relative p-2.5 sm:p-2 rounded-full text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 after:absolute after:-inset-2 after:content-['']"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Problem Statement */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                      The Problem Being Addressed
                    </h4>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal bg-neutral-50 dark:bg-white/[0.02] p-4 rounded-xl border border-neutral-200/60 dark:border-white/[0.04] break-words">
                      {activeProject.problem}
                    </p>
                  </div>

                  {/* Solution & Key Functionality */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                      Solution Architecture & Features
                    </h4>
                    <ul className="space-y-2.5 text-sm text-neutral-700 dark:text-neutral-300 font-normal">
                      {activeProject.solution.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                          <span className="leading-relaxed break-words">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Engineering Highlights */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                      Key Technical Takeaways
                    </h4>
                    <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400 font-normal">
                      {activeProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-neutral-400 mt-0.5 shrink-0">&bull;</span>
                          <span className="break-words">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                      Technologies & Libraries
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.stack.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-white/[0.06] text-neutral-800 dark:text-neutral-200 font-mono font-medium truncate max-w-[220px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status Note disclaimer if any */}
                  {activeProject.statusNote && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-400 flex items-start gap-2.5">
                      <AlertCircle size={15} className="shrink-0 mt-0.5" />
                      <span className="leading-relaxed break-words">{activeProject.statusNote}</span>
                    </div>
                  )}

                  {/* Modal Footer with Role and Links */}
                  <div className="pt-4 border-t border-neutral-200 dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                    <span className="text-xs text-neutral-500 font-medium">
                      My Role: <span className="text-neutral-900 dark:text-neutral-100 font-semibold">{activeProject.role}</span>
                    </span>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                      {activeProject.githubUrl && (
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-1.5 rounded-xl text-xs font-medium bg-neutral-100 dark:bg-white/[0.08] text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 after:absolute after:-inset-1 after:content-['']"
                        >
                          <Github size={14} />
                          <span>GitHub Repository</span>
                        </a>
                      )}
                      {activeProject.liveUrl && (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-1.5 rounded-xl text-xs font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-blue-500 after:absolute after:-inset-1 after:content-['']"
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
