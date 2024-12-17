import React from 'react';
import { ScrollContainer } from '../shared/InfiniteScroll/ScrollContainer';
import { ServiceCard } from './ServiceCard';
import { services } from './services.data';

export const ServiceScroll = () => {
  return (
    <div className="mt-12">
      <ScrollContainer direction="left" speed={40}>
        {services.map((service, index) => (
          <ServiceCard
            key={`${service.title}-${index}`}
            {...service}
          />
        ))}
      </ScrollContainer>
    </div>
  );
};