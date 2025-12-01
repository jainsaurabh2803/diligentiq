import React from 'react';
import { Link } from 'react-router-dom';

const AboutTeaser: React.FC = () => {
  return (
    <section className="bg-brand-blue text-white py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">
          diligent-capitals
        </h2>
        <p className="text-sm md:text-base text-white/85 max-w-3xl mb-4">
          diligent-capitals is a premier provider of corporate legal and financial
          services, dedicated to helping businesses navigate complex regulatory
          landscapes with ease and confidence. Our expert team offers tailored
          solutions to ensure your company&apos;s success and compliance.
        </p>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs font-semibold mb-1">Our Founders</p>
            <p className="text-xs text-white/80">
              Navneet Agarwal &amp; Saurabh Jain bring together deep expertise
              across corporate law, compliance and data-driven financial analysis.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center rounded-full border border-white/60 px-4 py-2 text-xs md:text-sm font-semibold hover:bg-white hover:text-brand-blue transition"
          >
            Learn more about us →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
