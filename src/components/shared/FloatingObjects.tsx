import React from 'react';
import { motion } from 'framer-motion';

export const FloatingObjects = () => {
  const shapes = Array(10).fill(null);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
            background: `hsl(${Math.random() * 60 + 200}, 70%, ${Math.random() * 20 + 60}%)`,
          }}
        />
      ))}
    </div>
  );
};