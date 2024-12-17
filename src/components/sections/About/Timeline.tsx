import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../utils/animations';

const milestones = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'Gajraj Ventures was established with a vision to transform digital landscapes.',
  },
  {
    year: '2019',
    title: 'First Major Project',
    description: 'Successfully delivered our first enterprise-level e-commerce solution.',
  },
  {
    year: '2020',
    title: 'Team Expansion',
    description: 'Grew to 20+ professionals and opened our second office.',
  },
  {
    year: '2021',
    title: 'Innovation Award',
    description: 'Recognized for outstanding contributions to digital transformation.',
  },
  {
    year: '2022',
    title: 'Global Reach',
    description: 'Expanded operations to serve clients across 3 continents.',
  },
];

export const Timeline = () => {
  return (
    <div className="py-12">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200 dark:bg-indigo-900" />

        {/* Timeline items */}
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={`relative flex items-center justify-between mb-8 ${
              index % 2 === 0 ? 'flex-row-reverse' : ''
            }`}
          >
            <div className="w-5/12" />
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 z-10" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-5/12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                {milestone.year}
              </span>
              <h4 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">
                {milestone.title}
              </h4>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {milestone.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};