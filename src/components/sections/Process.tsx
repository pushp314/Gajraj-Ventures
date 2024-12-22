import React from 'react';
import { Lightbulb, Code2, TestTube, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Discovery & Planning',
      description: 'We analyze your needs and create a comprehensive strategy.',
      details: ['Requirements gathering', 'Market research', 'Project roadmap'],
    },
    {
      icon: Code2,
      title: 'Design & Development',
      description: 'Our team brings your vision to life with cutting-edge technology.',
      details: ['UI/UX design', 'Frontend development', 'Backend integration'],
    },
    {
      icon: TestTube,
      title: 'Testing & Optimization',
      description: 'Rigorous testing ensures a flawless user experience.',
      details: ['Quality assurance', 'Performance testing', 'User feedback'],
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'Your project goes live with ongoing maintenance.',
      details: ['Deployment', '24/7 monitoring', 'Regular updates'],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-indigo-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A systematic approach to delivering excellence
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for medium and larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200 dark:bg-gray-700" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className={`md:grid md:grid-cols-2 md:gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}>
                  {/* Content */}
                  <div className={`space-y-4 ${
                    index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                  }`}>
                    <div className={`flex items-center gap-4 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}>
                      {/* Icon */}
                      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 shadow-lg transform transition-transform hover:scale-105">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className={`flex items-center gap-3 ${
                          index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}>
                          <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                          <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Empty div for grid alignment */}
                  <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'} />
                </div>

                {/* Number indicator for medium and larger screens */}
                <div className="hidden md:flex absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-indigo-500 dark:border-indigo-400 items-center justify-center">
                  <span className="text-sm font-bold text-indigo-500 dark:text-indigo-400">
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}