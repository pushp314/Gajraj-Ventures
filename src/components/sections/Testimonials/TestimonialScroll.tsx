import React from 'react';
import { ScrollContainer } from '../../shared/InfiniteScroll/ScrollContainer';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from './testimonials.data';

export const TestimonialScroll = () => {
  return (
    <div className="mt-12">
      <ScrollContainer direction="right" speed={35}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            {...testimonial}
          />
        ))}
      </ScrollContainer>
    </div>
  );
};