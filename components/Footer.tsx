import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-gray-100 bg-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-brand-gray-500">
          © {new Date().getFullYear()} Diligent Capitals. All rights reserved.
        </p>
        <p className="text-[11px] text-brand-gray-500">
          Built with structured analytics, not just slides.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
