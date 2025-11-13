import React from 'react';

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
    </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-blue text-white" style={{backgroundImage: "linear-gradient(rgba(15, 76, 129, 0.85), rgba(15, 76, 129, 0.85)), url('https://picsum.photos/1600/800?grayscale&blur=2')"}}>
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl inline-block border border-white/20 shadow-xl">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-gold">Special Offer</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-4 leading-tight">Due Diligence Snapshot</h1>
          <p className="text-3xl md:text-4xl font-bold text-brand-gold mb-6">For just ₹2499</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-lg mb-8">
            <div className="flex items-center">
              <CheckIcon className="h-6 w-6 text-brand-gold mr-2" />
              <span>Financial Analysis</span>
            </div>
            <div className="flex items-center">
              <CheckIcon className="h-6 w-6 text-brand-gold mr-2" />
              <span>User Cohort Analysis</span>
            </div>
            <div className="flex items-center">
              <CheckIcon className="h-6 w-6 text-brand-gold mr-2" />
              <span>MIS Reporting</span>
            </div>
          </div>
          <a href="#contact" className="bg-brand-gold text-white font-bold py-3 px-10 text-lg rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105 shadow-lg">
            Claim Offer Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
