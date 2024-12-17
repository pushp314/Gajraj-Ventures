import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart, Users, Clock } from 'lucide-react';

export const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'E-commerce Revenue Growth',
      client: 'Fashion Retailer',
      metrics: {
        growth: '150%',
        users: '2M+',
        timeframe: '6 months'
      },
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=800',
      description: 'How we transformed an offline retailer into a digital success story.'
    },
    {
      title: 'SaaS Platform Optimization',
      client: 'Tech Startup',
      metrics: {
        growth: '200%',
        users: '500K+',
        timeframe: '12 months'
      },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      description: 'Scaling a startup from seed to series B through digital excellence.'
    },
    {
      title: 'Digital Marketing Success',
      client: 'Local Business',
      metrics: {
        growth: '300%',
        users: '1M+',
        timeframe: '9 months'
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      description: 'Local business achieves national recognition through targeted marketing.'
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Real results for real businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {study.title}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 mb-4">{study.client}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{study.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <BarChart className="w-6 h-6 mx-auto text-indigo-600 dark:text-indigo-400 mb-2" />
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {study.metrics.growth}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Growth</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 mx-auto text-indigo-600 dark:text-indigo-400 mb-2" />
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {study.metrics.users}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Users</div>
                  </div>
                  <div className="text-center">
                    <Clock className="w-6 h-6 mx-auto text-indigo-600 dark:text-indigo-400 mb-2" />
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {study.metrics.timeframe}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Timeline</div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};