import React from 'react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left bg-white border border-brand-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col h-full"
    >
      <div className="mb-3">
        <h4 className="text-base md:text-lg font-semibold text-brand-blue-dark mb-1">
          {service.title}
        </h4>
        <p className="text-xs md:text-sm text-brand-gray-600">
          {service.summary}
        </p>
      </div>
      <span className="mt-auto inline-flex items-center text-xs font-semibold text-brand-blue group-hover:text-brand-gold">
        View details
        <span className="ml-1 transform group-hover:translate-x-0.5 transition">
          →
        </span>
      </span>
    </button>
  );
};

export default ServiceCard;
