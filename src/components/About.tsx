import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import { GraduationCap, MapPin, Code2, Trophy, Award } from 'lucide-react';
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Narrative Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3"
          >
            <SpotlightCard className="p-7 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-xs font-mono text-neutral-400 dark:text-neutral-500">
                  <span>CIT-U &bull; BS Computer Science</span>
                </div>
                <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 font-normal leading-relaxed tracking-tight">
                  I am a third-year Computer Science student at Cebu Institute of Technology – University. My development work is grounded in application development across frontend and backend fundamentals, database management, and methodical technical problem-solving.
                </p>
                <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-normal leading-relaxed tracking-tight mt-4">
                  Through hands-on projects, collegiate hackathons, and event technical operations, I focus on building practical tools—such as offline-first finance trackers, civic OCR applications, and academic timetable systems—that serve real operational needs.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-200/80 dark:border-white/[0.06] flex items-center justify-between text-xs text-neutral-500">
                <span>Collaborative Development & Leadership</span>
                <span className="font-mono text-neutral-400">CIT-U CCS</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Education & Academic Spec Card */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, delay: prefersReducedMotion ? 0 : 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2"
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between gap-5">
              <div>
                <div className="flex items-start gap-3.5 mb-5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <GraduationCap size={20} />
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

                <div className="space-y-3.5 border-t border-neutral-200/80 dark:border-white/[0.06] pt-4 text-xs">
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
                      Status
                    </span>
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">{EDUCATION.yearLevel}</span>
                  </div>

                  <div className="flex items-center justify-between text-neutral-600 dark:text-neutral-400">
                    <span className="flex items-center gap-1.5 text-neutral-500">
                      <Award size={13} />
                      Graduation
                    </span>
                    <span className="font-mono text-neutral-800 dark:text-neutral-200 font-medium">{EDUCATION.expectedGraduation}</span>
                  </div>
                </div>
              </div>

              {/* Achievements Mini Section */}
              <div className="border-t border-neutral-200/80 dark:border-white/[0.06] pt-4">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  <Trophy size={13} className="text-amber-500" />
                  <span>Key Recognitions</span>
                </div>
                <div className="space-y-1.5">
                  {ACHIEVEMENTS.map((a) => (
                    <div key={a.id} className="text-[11px] text-neutral-600 dark:text-neutral-400">
                      <span className="font-medium text-neutral-900 dark:text-neutral-200">&bull; {a.title}</span> &ndash; {a.event}
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
