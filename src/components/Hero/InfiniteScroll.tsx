import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';
import { services } from './services.data';

export const InfiniteScroll = () => {
  return (
    <div className="mt-20 relative overflow-hidden">
      <motion.div
        className="flex space-x-6 animate-scroll"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...services, ...services].map((service, index) => (
          <ServiceCard
            key={`${service.title}-${index}`}
            icon={service.icon}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};