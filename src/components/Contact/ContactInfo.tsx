import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex items-start space-x-4">
        <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1" />
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
          <p className="mt-1 text-gray-600 dark:text-gray-300">contact@gajrajventures.com</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1" />
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
          <p className="mt-1 text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-1" />
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
          <p className="mt-1 text-gray-600 dark:text-gray-300">
            123 Business Street<br />
            Tech Hub, City 12345
          </p>
        </div>
      </div>
    </motion.div>
  );
};