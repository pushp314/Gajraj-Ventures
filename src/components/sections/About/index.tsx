import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Rocket } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { Timeline } from './Timeline';
import { Values } from './Values';

export const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Excellence in Digital",
      description: "Multiple awards for outstanding web development and design"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with diverse technical expertise"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across multiple countries and industries"
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Pioneering new technologies and methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            About Gajraj Ventures
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300"
          >
            Design. Develop. Dominate
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Story
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Founded with a vision to bridge the gap between technology and business success, 
              Gajraj Ventures has been at the forefront of digital innovation since our inception. 
              We combine creativity with technical expertise to deliver solutions that drive growth 
              and create lasting impact.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We strive to empower businesses through innovative digital solutions, 
              creating seamless experiences that connect brands with their audience. 
              Our commitment to excellence and continuous innovation drives everything we do.
            </p>
          </motion.div>
        </div>

        <Values />
        <Timeline />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <achievement.icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};