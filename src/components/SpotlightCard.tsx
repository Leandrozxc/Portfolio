import React, { useRef, useState, useCallback, memo } from 'react';
import { useReducedMotion } from 'framer-motion';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = memo(({ children, className = '', ...props }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Direct CSS custom property injection - eliminates React state re-renders on every cursor movement
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  }, [prefersReducedMotion]);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    handleMouseMove(e);
  }, [handleMouseMove]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-neutral-200/80 dark:border-white/[0.08] bg-white/70 dark:bg-neutral-900/40 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-neutral-300 dark:hover:border-white/20 hover:shadow-lg dark:hover:shadow-neutral-950/40 ${className}`}
      {...props}
    >
      {/* Dynamic spotlight surface glow */}
      {!prefersReducedMotion && (
        <>
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 ease-out"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(420px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--bg-spotlight, rgba(255, 255, 255, 0.06)), transparent 75%)`,
            }}
          />
          
          {/* Border tracking luminescence */}
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 ease-out"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(240px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--border-spotlight, rgba(255, 255, 255, 0.2)), transparent 70%)`,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor',
              padding: '1px',
            }}
          />
        </>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
});

SpotlightCard.displayName = 'SpotlightCard';
