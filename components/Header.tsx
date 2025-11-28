import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-brand-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-lg">
            D
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-brand-blue-dark">
              Diligent Capitals
            </div>
            <div className="text-xs text-brand-gray-500">
              Corporate Diligence &amp; Legal Services
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-gray-600">
          <a href="#services" className="hover:text-brand-blue-dark">
            Services
          </a>
          <a href="#trusted-by" className="hover:text-brand-blue-dark">
            Trusted by
          </a>
          <a href="#contact" className="hover:text-brand-blue-dark">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-brand-blue bg-brand-blue text-white text-sm font-semibold px-4 py-2 hover:bg-brand-blue-dark transition"
        >
          Schedule a call
        </a>
      </div>
    </header>
  );
};

export default Header;
