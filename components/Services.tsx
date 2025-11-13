import React from 'react';
import ServiceCard from './ServiceCard';
import { SERVICE_CATEGORIES } from '../constants';
import { type Service } from '../types';

interface ServicesProps {
  onServiceClick: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">Our Services</h2>
            <p className="mt-4 text-lg text-brand-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions to empower your business growth and ensure compliance.
            </p>
            <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        {SERVICE_CATEGORIES.map((category) => (
          <div key={category.id} className="mb-16">
            <h3 className="text-2xl font-bold text-brand-blue-dark mb-8 border-l-4 border-brand-gold pl-4">{category.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service) => (
                <ServiceCard key={service.id} service={service} onClick={() => onServiceClick(service)} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
