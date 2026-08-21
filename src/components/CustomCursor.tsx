'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center relative">
        <div
          className={`rounded-full blur-sm transition-all duration-150 absolute ${
            isHovered ? 'w-12 h-12 bg-teal-400/40' : 'w-8 h-8 bg-teal-500/25'
          }`}
        />
        <div
          className={`font-mono text-[10px] font-bold text-teal-300 bg-slate-950/90 border border-teal-400/60 px-1.5 py-0.5 rounded shadow-lg select-none whitespace-nowrap transition-transform ${
            isHovered ? 'scale-125 border-teal-300' : 'scale-100'
          }`}
        >
          {isHovered ? '⚡' : '>_'}
        </div>
      </div>
    </div>
  );
}