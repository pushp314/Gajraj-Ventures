import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center ${className}`}
      onClick={onClick}
    >
      <img
        src="/logo.svg"
        alt="Gajraj Ventures Logo"
        className="h-8 w-auto"
        width={32}
        height={32}
      />
      <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
        Gajraj Ventures
      </span>
    </motion.div>
  );
};