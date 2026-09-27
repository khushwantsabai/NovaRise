import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate cursor tracking on devices with fine pointer (desktop)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Background Radial Glow following cursor */}
      <div
        className="pointer-events-none fixed z-30 transition-opacity duration-300 opacity-40 blur-3xl hidden md:block"
        style={{
          left: `${position.x - 150}px`,
          top: `${position.y - 150}px`,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(6, 182, 212, 0.15) 50%, rgba(255, 255, 255, 0) 70%)',
        }}
      />
      {/* Precision Cursor Dot */}
      <div
        className={`pointer-events-none fixed z-50 rounded-full transition-transform duration-100 ease-out hidden md:block ${
          isHovered
            ? 'w-10 h-10 -ml-5 -mt-5 bg-[#7C3AED]/20 border border-[#7C3AED] backdrop-blur-sm'
            : 'w-3 h-3 -ml-1.5 -mt-1.5 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] shadow-md'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};
