import React from "react";
import { motion } from "framer-motion";
import './styles.css'
import { Code, Palette, Megaphone, Search, Smartphone, Globe } from "lucide-react";

export const Hero = () => {
  const services = [
    { icon: Code, title: "Web Development", description: "Custom websites and web applications" },
    { icon: Palette, title: "Web Design", description: "Beautiful, responsive designs" },
    { icon: Search, title: "SEO Optimization", description: "Improve your search rankings" },
    { icon: Smartphone, title: "App Development", description: "Native and cross-platform apps" },
    { icon: Globe, title: "Digital Marketing", description: "Grow your online presence" },
    { icon: Megaphone, title: "Brand Strategy", description: "Build your brand identity" },
  ];

  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
        >
          <span className="block">Transform Your Digital Presence</span>
          <span className="block text-indigo-600 dark:text-indigo-400">with Gajraj Ventures</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
        >
          We craft digital experiences that drive growth and innovation. Our expertise helps businesses thrive in the digital age.
        </motion.p>

        {/* Smooth Auto-Scrolling Section */}
        <div className="mt-20 relative overflow-hidden">
          <motion.div
            className="flex space-x-6 animate-scroll"
          >
            {services.concat(services).map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 snap-center"
              >
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <service.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
