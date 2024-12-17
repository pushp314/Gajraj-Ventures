import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundAnimation = () => {
  const shapes = Array(6).fill(null);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((_, index) => {
        const duration = Math.random() * 20 + 30;
        const size = Math.random() * 300 + 200;
        
        return (
          <motion.div
            key={index}
            className="absolute bg-gradient-to-r from-indigo-400/10 to-purple-400/10 dark:from-indigo-500/5 dark:to-purple-500/5 rounded-full mix-blend-screen dark:mix-blend-multiply filter blur-3xl"
            animate={{
              x: [
                Math.random() * window.innerWidth * 0.8,
                Math.random() * window.innerWidth * 0.8,
                Math.random() * window.innerWidth * 0.8,
              ],
              y: [
                Math.random() * window.innerHeight * 0.8,
                Math.random() * window.innerHeight * 0.8,
                Math.random() * window.innerHeight * 0.8,
              ],
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.4,
            }}
          />
        );
      })}
    </div>
  );
};