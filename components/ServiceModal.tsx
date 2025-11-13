import React, { useEffect } from 'react';
import { type Service } from '../types';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const XMarkIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-brand-gray-400 hover:text-brand-gray-600 transition-colors"
          aria-label="Close"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>
        <div className="flex items-center mb-6">
            <div className="flex-shrink-0 bg-brand-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mr-6">
                {service.icon}
            </div>
            <div>
                 <h3 className="text-3xl font-extrabold text-brand-blue-dark">{service.title}</h3>
                 <p className="text-brand-gray-500">{service.description}</p>
            </div>
        </div>
        <div className="prose max-w-none text-brand-gray-700 leading-relaxed">
            <p>{service.details}</p>
        </div>
        <div className="mt-8 text-right">
            <a href="#contact" onClick={onClose} className="bg-brand-gold text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300 shadow-sm">
                Get a Quote
            </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
