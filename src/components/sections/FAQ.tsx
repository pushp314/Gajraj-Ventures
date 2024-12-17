import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, and SEO optimization. Our team specializes in creating custom solutions tailored to your specific business needs.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We will provide a detailed timeline during our initial consultation.',
    },
    {
      question: 'What is your development process?',
      answer:
        'Our development process follows an agile methodology with clear phases: Discovery, Planning, Design, Development, Testing, and Launch. We maintain transparent communication throughout and provide regular updates on progress.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer:
        'Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally. This includes regular updates, security patches, and technical support.',
    },
    {
      question: 'What technologies do you use?',
      answer:
        'We work with modern technologies including React, Node.js, Python, and various cloud platforms. Our tech stack is chosen based on project requirements to ensure the best performance and scalability.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about our services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                ) : (
                  <Plus className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-b-lg">
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
