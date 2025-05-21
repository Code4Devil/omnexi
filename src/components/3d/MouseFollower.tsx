import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    // Add passive event listener to improve performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle wheel events passively to avoid warnings
    const handleWheel = () => {};
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isVisible]);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary-400/30 backdrop-blur-sm pointer-events-none z-50 hidden md:block"
      variants={variants}
      animate="default"
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      style={{ opacity: isVisible ? 1 : 0 }}
    />
  );
};

export default MouseFollower;