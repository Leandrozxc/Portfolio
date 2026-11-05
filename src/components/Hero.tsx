import React from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ChevronRight, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.04,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto text-center"
      >
        {/* Live Availability Status */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/[0.08] text-neutral-600 dark:text-neutral-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-tight">{PERSONAL_INFO.status}</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6 leading-[1.08]"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed tracking-tight mb-8"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

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
          <span className="px-2.5 py-1">CIT-U &bull; 3rd Year CS</span>
          <ChevronRight size={12} className="text-neutral-400 dark:text-neutral-600" />
          <span className="px-2.5 py-1">App & Civic Tech</span>
          <ChevronRight size={12} className="text-neutral-400 dark:text-neutral-600" />
          <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/20">
            Internship Ready &rarr;
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
