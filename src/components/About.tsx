import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { GraduationCap, MapPin, Code2, Trophy, Award, Building2 } from 'lucide-react';
import { EDUCATION, ACHIEVEMENTS } from '../data/portfolio';

export const About: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 border-t border-neutral-200 dark:border-white/[0.06]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Background & Profile
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Academic foundation, practical software development, and competitive collegiate milestones.
          </p>
        </motion.div>

        <div className="space-y-4">
          {/* Top Bento Row: Story + Education */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Narrative Overview Card */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-3"
            >
              <SpotlightCard className="p-7 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3.5 text-xs font-mono text-neutral-400 dark:text-neutral-500">
                    <Building2 size={13} className="text-blue-500" />
                    <span>Cebu Institute of Technology – University</span>
                  </div>
                  <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 font-normal leading-relaxed tracking-tight">
                    I am a third-year Computer Science student based in Cebu City, Philippines. My engineering foundation spans application development across frontend architectures, backend fundamentals, relational database management, and methodical technical problem-solving.
                  </p>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed tracking-tight mt-4">
                    Rather than building abstract prototypes, I prioritize solving real operational and civic needs: from offline-first desktop financial tracking for event photobooths, to prescription OCR for generic drug accessibility and institutional timetable engines.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-200/80 dark:border-white/[0.06] flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">College of Computer Studies</span>
                  <span className="font-mono text-neutral-400">CIT-U &bull; 2027</span>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Education & Academic Spec Card */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-2"
            >
              <SpotlightCard className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-3.5 mb-5">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Education</h3>
                      <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-0.5 leading-snug">
                        {EDUCATION.institution}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                        {EDUCATION.degree}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 border-t border-neutral-200/80 dark:border-white/[0.06] pt-4 text-xs">
                    <div className="flex items-center justify-between text-neutral-600 dark:text-neutral-400">
                      <span className="flex items-center gap-1.5 text-neutral-500">
                        <MapPin size={13} />
                        Location
                      </span>
                      <span className="font-medium text-neutral-800 dark:text-neutral-200">{EDUCATION.location}</span>
                    </div>

                    <div className="flex items-center justify-between text-neutral-600 dark:text-neutral-400">
                      <span className="flex items-center gap-1.5 text-neutral-500">
                        <Code2 size={13} />
                        Standing
                      </span>
                      <span className="font-medium text-neutral-800 dark:text-neutral-200">{EDUCATION.yearLevel}</span>
                    </div>

                    <div className="flex items-center justify-between text-neutral-600 dark:text-neutral-400">
                      <span className="flex items-center gap-1.5 text-neutral-500">
                        <Award size={13} />
                        Timeline
                      </span>
                      <span className="font-mono text-neutral-800 dark:text-neutral-200 font-medium px-2 py-0.5 rounded bg-neutral-100 dark:bg-white/[0.06]">
                        {EDUCATION.expectedGraduation}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3.5 border-t border-neutral-200/80 dark:border-white/[0.06] text-xs text-neutral-500">
                  <span>Available for 2026/2027 Engineering Internships</span>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>

          {/* Dedicated Honors & Achievements Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map((achievement, idx) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.45, delay: prefersReducedMotion ? 0 : idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard className="p-5 sm:p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                        <Trophy size={12} />
                        <span>{achievement.title}</span>
                      </span>
                      <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                        {achievement.year}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-1.5">
                      {achievement.event}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                      {achievement.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-200/80 dark:border-white/[0.06] text-[11px] text-neutral-400 dark:text-neutral-500 font-mono">
                    Track: {achievement.category}
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
