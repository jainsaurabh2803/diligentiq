import React from 'react';
import type { Service } from '../types';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-6 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 h-7 w-7 rounded-full flex items-center justify-center text-brand-gray-500 hover:bg-brand-gray-100"
          aria-label="Close"
        >
          ×
        </button>
        <h3
          id="service-modal-title"
          className="text-lg md:text-xl font-semibold text-brand-blue-dark mb-2"
        >
          {service.title}
        </h3>
        <p className="text-sm text-brand-gray-600 mb-4">
          {service.summary}
        </p>
        <p className="text-sm text-brand-gray-600 whitespace-pre-line">
          {service.details}
        </p>
      </div>
    </div>
  );
};

export default ServiceModal;
