import React from 'react';
import type { ServiceCategory, Service } from '../types';
import ServiceCard from './ServiceCard';

interface ServicesProps {
  categories: ServiceCategory[];
  onServiceClick?: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ categories, onServiceClick }) => {
  return (
    <section
      id="services"
      className="py-14 md:py-16 bg-brand-gray-100/60 border-t border-brand-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mb-8">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-blue mb-3">
            SERVICES
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-blue-dark mb-3">
            A single diligence partner across financial, business and legal.
          </h2>
          <p className="text-sm md:text-base text-brand-gray-600">
            Pick the depth you need – from quick &quot;deal screen&quot; notes to
            comprehensive investor decks – across financial, business and
            legal/compliance themes.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-brand-blue-dark">
                    {category.title}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-gray-600 mt-1">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {category.services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onClick={
                      onServiceClick ? () => onServiceClick(service) : undefined
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
