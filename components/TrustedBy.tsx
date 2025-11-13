import React from 'react';
import { TRUSTED_COMPANIES } from '../constants';

const TrustedBy: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">Trusted By Leading Brands</h2>
            <p className="mt-4 text-lg text-brand-gray-600 max-w-3xl mx-auto">
                We are proud to partner with innovative companies and startups across industries.
            </p>
            <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {TRUSTED_COMPANIES.map((company) => (
            <a 
              key={company.name} 
              href={company.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <img 
                src={company.logoUrl} 
                alt={company.name} 
                className="h-16 max-w-[150px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
