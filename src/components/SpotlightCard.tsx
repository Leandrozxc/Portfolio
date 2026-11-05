import React, { useRef, useState, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = '', ...props }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, [prefersReducedMotion]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
              background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, var(--bg-spotlight, rgba(255, 255, 255, 0.06)), transparent 75%)`,
            }}
          />
          
          {/* Border tracking luminescence */}
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 ease-out"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(240px circle at ${position.x}px ${position.y}px, var(--border-spotlight, rgba(255, 255, 255, 0.2)), transparent 70%)`,
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
};
