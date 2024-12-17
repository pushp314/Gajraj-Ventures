import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialScroll } from './TestimonialScroll';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            What our clients say about us
          </p>
        </motion.div>

        <TestimonialScroll />
      </div>
    </section>
  );
};