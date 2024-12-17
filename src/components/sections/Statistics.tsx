import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Users, Code2, Award, Briefcase } from 'lucide-react';

export const Statistics = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { icon: Users, value: 200, label: 'Happy Clients', suffix: '+' },
    { icon: Code2, value: 500, label: 'Projects Completed', suffix: '+' },
    { icon: Award, value: 15, label: 'Years Experience', suffix: '+' },
    { icon: Briefcase, value: 50, label: 'Team Members', suffix: '+' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center text-white p-6 rounded-lg backdrop-blur-lg bg-white/10"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-4xl font-bold mb-2">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="text-lg opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};