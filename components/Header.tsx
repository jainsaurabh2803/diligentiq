import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brand-blue">
          <a href="#">diligentIQ</a>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#services" className="text-brand-gray-600 hover:text-brand-blue transition duration-300">Services</a>
          <a href="#contact" className="text-brand-gray-600 hover:text-brand-blue transition duration-300">Contact</a>
          <a href="#about" className="text-brand-gray-600 hover:text-brand-blue transition duration-300">About</a>
        </nav>
        <a href="#contact" className="bg-brand-gold text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition duration-300 shadow-sm">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;