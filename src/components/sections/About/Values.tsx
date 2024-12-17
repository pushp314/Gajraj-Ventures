import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Zap, Shield } from 'lucide-react';
import { fadeInUp } from '../../../utils/animations';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about creating exceptional digital experiences.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every project we undertake.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We embrace new technologies and innovative solutions.',
  },
  {
    icon: Shield,
    title: 'Trust',
    description: 'We build lasting relationships based on trust and transparency.',
  },
];

export const Values = () => {
  return (
    <div className="py-12">
      <motion.h3
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12"
      >
        Our Values
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300" />
            <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg">
              <value.icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};