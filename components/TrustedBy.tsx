import React from 'react';
import { TESTIMONIALS } from '../constants';

const TrustedBy: React.FC = () => {
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-16 sm:py-24 bg-brand-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue">Trusted By Industry Leaders</h2>
            <p className="mt-4 text-lg text-brand-gray-600 max-w-3xl mx-auto">
                We are proud to partner with innovative companies and startups across industries.
            </p>
            <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div 
          className="relative w-full overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)" }}
        >
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center justify-center mx-4 w-96 flex-shrink-0 h-64">
                <img 
                  src={testimonial.imageUrl} 
                  alt={`Photo of ${testimonial.name}`}
                  className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-brand-gold/30 shadow-md"
                />
                <div>
                  <p className="font-bold text-brand-blue-dark text-lg">{testimonial.name}</p>
                  <p className="text-brand-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;