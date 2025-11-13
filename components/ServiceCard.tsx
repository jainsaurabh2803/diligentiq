import React from 'react';
import { type Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

const ArrowRightIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);


const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-brand-gray-100 flex flex-col"
    >
      <div className="flex-shrink-0 mb-4 bg-brand-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center">
        {service.icon}
      </div>
      <div className="flex-grow">
        <h4 className="text-xl font-bold text-brand-blue-dark mb-2">{service.title}</h4>
        <p className="text-brand-gray-600">{service.description}</p>
      </div>
      <div className="mt-6">
        <span className="font-semibold text-brand-blue group flex items-center">
          Learn More 
          <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
