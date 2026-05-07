import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);

  const circleX = useSpring(cursorX, { damping: 20, stiffness: 150 });
  const circleY = useSpring(cursorY, { damping: 20, stiffness: 150 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Small Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#800020] rounded-full pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      />
      {/* Outer Circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#800020]/30 rounded-full pointer-events-none z-[9998]"
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(128, 0, 32, 0.05)' : 'rgba(128, 0, 32, 0)',
          borderColor: isHovering ? 'rgba(128, 0, 32, 0.5)' : 'rgba(128, 0, 32, 0.3)',
        }}
        style={{ x: circleX, y: circleY, translateX: '-50%', translateY: '-50%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      />
    </>
  );
}
