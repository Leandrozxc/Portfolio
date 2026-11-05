import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in Manila/Cebu Time (UTC+8)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-white/[0.06] text-xs text-neutral-500 dark:text-neutral-400">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}</span>
          <span className="text-neutral-300 dark:text-neutral-700">&bull;</span>
          <span className="font-mono text-neutral-500 dark:text-neutral-400">Cebu {currentTime}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-neutral-400 dark:text-neutral-500">Built with Vite, React & Framer Motion</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll back to top"
            className="p-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-white/[0.06] text-neutral-400 hover:text-black dark:hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
