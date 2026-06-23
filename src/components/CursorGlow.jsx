import React, { useEffect, useState, useRef } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const requestRef = useRef();
  const targetPosRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setIsHidden(false);
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
      targetPosRef.current = { x: clientX, y: clientY };
      
      // Add custom-cursor-active class to body to hide native cursor
      if (!document.body.classList.contains('custom-cursor-active')) {
        document.body.classList.add('custom-cursor-active');
      }
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
      document.body.classList.remove('custom-cursor-active');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Dynamic hover detection for interactive items
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('clickable') ||
        target.closest('.clickable')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    // Smooth cursor trailing animation
    const animateTrail = () => {
      setTrail((prev) => {
        const dx = targetPosRef.current.x - prev.x;
        const dy = targetPosRef.current.y - prev.y;
        // Adjust the division factor for speed of the trailing circle
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      requestRef.current = requestAnimationFrame(animateTrail);
    };
    requestRef.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(requestRef.current);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Dynamic ambient cursor radial light (behind everything) */}
      <div
        className="fixed pointer-events-none z-30 transition-opacity duration-300 rounded-full w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 opacity-40 bg-radial from-brand-purple/10 to-transparent"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Tiny center cursor dot */}
      <div
        className={`fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-150 mix-blend-difference hidden lg:block ${
          isHovered ? 'w-6 h-6 bg-brand-cyan opacity-80' : 'w-2.5 h-2.5'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Trailing cursor ring */}
      <div
        className={`fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 hidden lg:block ${
          isHovered 
            ? 'w-12 h-12 border-brand-cyan/80 scale-110 bg-brand-cyan/5' 
            : 'w-7 h-7 border-brand-purple/60'
        }`}
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
        }}
      />
    </>
  );
};

export default CursorGlow;
