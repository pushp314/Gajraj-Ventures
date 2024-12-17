import React from 'react';
import { motion } from 'framer-motion';

export const NavLinks = () => {
  const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Team', 'Contact'];

  return (
    <div className="flex items-baseline space-x-4">
      {menuItems.map((item) => (
        <motion.a
          key={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`#${item.toLowerCase()}`}
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          {item}
        </motion.a>
      ))}
    </div>
  );
};