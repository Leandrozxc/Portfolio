import React from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ChevronRight, MapPin, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.07,
        delayChildren: prefersReducedMotion ? 0 : 0.03,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.45,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto text-center"
      >
        {/* Availability Status Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-5">
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/[0.08] text-neutral-700 dark:text-neutral-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-tight">{PERSONAL_INFO.status}</span>
          </div>
        </motion.div>

        {/* Candidate Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3 leading-[1.06]"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        {/* Clear Professional Subhead */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400 tracking-tight mb-4"
        >
          Third-Year Computer Science Student &bull; Software Developer
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed tracking-tight mb-6"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* Quick Social & Code Proof for Technical Recruiters */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2.5 mb-8 flex-wrap"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-100/90 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.08] text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <Github size={13} />
            <span>github.com/Leandrozxc</span>
            <ArrowUpRight size={11} className="text-neutral-400" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100/90 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.08] text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <Linkedin size={13} />
            <span>LinkedIn</span>
            <ArrowUpRight size={11} className="text-neutral-400" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email address"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100/90 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.08] text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <Mail size={13} />
            <span>Email</span>
          </a>
        </motion.div>

        {/* Milestone Journey Track */}
        <motion.div
          variants={itemVariants}
          className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl md:rounded-full bg-neutral-100/80 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06] text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-10 transition-colors"
        >
          <div className="flex items-center gap-1 px-2.5 py-1 text-neutral-500">
            <MapPin size={12} />
            <span>Cebu City</span>
          </div>
          <ChevronRight size={12} className="text-neutral-400 dark:text-neutral-600" />
          <span className="px-2.5 py-1 font-medium text-neutral-800 dark:text-neutral-200">CIT-U &bull; BSCS 2027</span>
          <ChevronRight size={12} className="text-neutral-400 dark:text-neutral-600" />
          <span className="px-2.5 py-1 font-medium text-neutral-800 dark:text-neutral-200">Civic Tech & Systems</span>
          <ChevronRight size={12} className="text-neutral-400 dark:text-neutral-600" />
          <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/20">
            Open to Roles &rarr;
          </span>
        </motion.div>

        {/* Action CTAs */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
          <motion.a
            href="#projects"
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-neutral-900 dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity shadow-sm focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
          >
            <span>View Featured Projects</span>
            <ChevronRight size={15} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-neutral-100 dark:bg-white/[0.08] hover:bg-neutral-200/80 dark:hover:bg-white/[0.14] text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={15} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
