import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  image
}) => {
  return (
    <div className="flex-shrink-0 w-[350px] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mx-2">
      <Quote className="w-8 h-8 text-indigo-500 mb-4" />
      <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-4">{content}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};