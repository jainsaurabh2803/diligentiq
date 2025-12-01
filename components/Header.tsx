import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-brand-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <div
          onClick={() => navigate('/')}
          className="flex items-center gap-2 cursor-pointer"
        >
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
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-gray-600">
          
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-brand-blue-dark"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection('trusted-by')}
            className="hover:text-brand-blue-dark"
          >
            Trusted by
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-brand-blue-dark"
          >
            Contact
          </button>

          <Link to="/about" className="hover:text-brand-blue-dark">
            About Us
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <button
          onClick={() => scrollToSection('contact')}
          className="hidden md:inline-flex items-center rounded-full border border-brand-blue bg-brand-blue text-white text-sm font-semibold px-4 py-2 hover:bg-brand-blue-dark transition"
        >
          Schedule a call
        </button>
      </div>
    </header>
  );
};

export default Header;
