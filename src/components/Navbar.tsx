import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrolled = window.scrollY > 30;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

      // Section tracking
      const sections = ['about', 'projects', 'experience', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 220) {
            setActiveSection((prev) => (prev !== section ? section : prev));
            break;
          }
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 py-3 sm:py-4 pointer-events-none transition-all duration-300">
      <motion.nav
        initial={{ y: prefersReducedMotion ? 0 : -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0.01 : 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 md:gap-3 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full border transition-all duration-300 max-w-full overflow-x-auto ${
          isScrolled
            ? 'bg-neutral-950/85 dark:bg-black/85 border-white/15 backdrop-blur-xl shadow-xl shadow-black/25 text-white'
            : 'bg-white/75 dark:bg-neutral-900/40 border-neutral-200/80 dark:border-white/[0.08] backdrop-blur-md text-neutral-900 dark:text-neutral-100 shadow-sm dark:shadow-none'
        }`}
      >
        {/* Brand / Home */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top of portfolio"
          className={`relative flex items-center gap-2 px-2 sm:px-3 py-1.5 text-xs md:text-sm font-semibold tracking-tight transition-colors rounded-full focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 after:absolute after:-inset-1.5 after:content-[''] ${
            isScrolled
              ? 'text-white hover:text-neutral-200'
              : 'text-neutral-900 dark:text-neutral-100 hover:text-black dark:hover:text-white'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.6)] shrink-0" />
          <span className={`hidden sm:inline font-semibold truncate max-w-[150px] md:max-w-none ${
            isScrolled ? 'text-white' : 'text-neutral-900 dark:text-neutral-100'
          }`}>
            {PERSONAL_INFO.name}
          </span>
        </button>

        <div className={`h-3.5 w-px transition-colors hidden sm:block shrink-0 ${
          isScrolled ? 'bg-white/15' : 'bg-neutral-300 dark:bg-neutral-800'
        }`} />

        {/* Navigation Links */}
        <div className="flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-2 sm:px-2.5 md:px-3.5 py-1.5 text-[11px] sm:text-xs md:text-sm tracking-tight transition-colors duration-200 rounded-full font-medium focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-1 after:absolute after:-inset-1 after:content-[''] ${
                  isScrolled
                    ? isActive
                      ? 'text-white'
                      : 'text-neutral-400 hover:text-white'
                    : isActive
                      ? 'text-black dark:text-white'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    className={`absolute inset-0 rounded-full -z-10 ${
                      isScrolled
                        ? 'bg-white/15 shadow-sm'
                        : 'bg-neutral-200/90 dark:bg-white/10'
                    }`}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </div>

        <div className={`h-3.5 w-px transition-colors shrink-0 ${
          isScrolled ? 'bg-white/15' : 'bg-neutral-300 dark:bg-neutral-800'
        }`} />

        {/* Theme Toggle with Ergonomic 44px Hit-Area */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
          className={`relative p-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-1 shrink-0 after:absolute after:-inset-2 after:content-[''] ${
            isScrolled
              ? 'text-neutral-300 hover:text-white hover:bg-white/10'
              : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-white/10'
          }`}
        >
          <motion.div
            key={darkMode ? 'dark' : 'light'}
            initial={{ rotate: prefersReducedMotion ? 0 : -45, scale: prefersReducedMotion ? 1 : 0.85, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </motion.div>
        </button>
      </motion.nav>
    </header>
  );
};
