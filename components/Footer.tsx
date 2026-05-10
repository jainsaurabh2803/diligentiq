import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-gray-100 bg-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-brand-gray-500">
          <Link to="/privacy-policy" className="hover:text-brand-blue-dark transition">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="hover:text-brand-blue-dark transition">
            Terms of Service
          </Link>
        </div>
        <div className="space-y-1 text-right">
          <p className="text-xs text-brand-gray-500">
            © {new Date().getFullYear()} Diligent Capitals. All rights reserved.
          </p>
          <p className="text-[11px] text-brand-gray-500">
            Built with structured analytics, not just slides.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
