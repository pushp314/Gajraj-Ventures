import React, { useRef, useEffect } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

interface ScrollContainerProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
}

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
  children,
  direction = 'left',
  speed = 40,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((time) => {
    if (!containerRef.current || !contentRef.current) return;

    const contentWidth = contentRef.current.offsetWidth;
    const scrollSpeed = direction === 'left' ? -1 : 1;
    
    scrollRef.current += (scrollSpeed * time) / (1000 / speed);

    if (Math.abs(scrollRef.current) >= contentWidth / 2) {
      scrollRef.current = 0;
    }

    containerRef.current.style.transform = `translateX(${scrollRef.current}px)`;
  });

  return (
    <div className="relative overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex"
        style={{ x: 0 }}
      >
        <div ref={contentRef} className="flex gap-4">
          {children}
        </div>
        <div className="flex gap-4">
          {children}
        </div>
      </motion.div>
    </div>
  );
};