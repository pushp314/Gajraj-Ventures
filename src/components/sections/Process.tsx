import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, TestTube, Rocket, ChevronDown } from 'lucide-react';

export const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Discovery & Planning',
      description: 'We analyze your needs and create a comprehensive strategy.',
      details: ['Requirements gathering', 'Market research', 'Project roadmap']
    },
    {
      icon: Code2,
      title: 'Design & Development',
      description: 'Our team brings your vision to life with cutting-edge technology.',
      details: ['UI/UX design', 'Frontend development', 'Backend integration']
    },
    {
      icon: TestTube,
      title: 'Testing & Optimization',
      description: 'Rigorous testing ensures a flawless user experience.',
      details: ['Quality assurance', 'Performance testing', 'User feedback']
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'Your project goes live with ongoing maintenance.',
      details: ['Deployment', '24/7 monitoring', 'Regular updates']
    },
  ];

  return (
    <section
      id="process"
      className="py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A systematic approach to delivering excellence
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Connector */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-indigo-300 dark:bg-indigo-800" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-start mb-12"
            >
              {/* Step Icon */}
              <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 rounded-full shadow-md">
                <step.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>

              {/* Step Content */}
              <div className="ml-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-600 dark:text-gray-300"
                    >
                      <ChevronDown className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
