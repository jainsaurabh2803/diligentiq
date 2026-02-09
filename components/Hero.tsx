import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-brand-blue text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-brand-gold via-white to-brand-blue-dark pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 relative">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-gold mb-4">
            INVESTOR-FIRST DILIGENCE
          </p>
          <h1
            id="hero-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4"
          >
            Clear, actionable due diligence for every transaction.
          </h1>
          <p className="text-sm md:text-base text-brand-gray-100/80 mb-6 md:mb-8">
            We combine structured analytics, MIS review and pragmatic legal checks
            to build a single, investor-friendly view of your target company –
            without drowning you in jargon.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href="#contact"
              className="inline-flex justify-center items-center px-5 py-2.5 rounded-full bg-brand-gold text-brand-blue-dark text-sm font-semibold shadow-sm hover:bg-amber-300 transition"
            >
              Book a 30-min discovery call
            </a>
            <a
              href="#services"
              className="inline-flex justify-center items-center px-5 py-2.5 rounded-full border border-white/40 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
            >
              View diligence offerings
            </a>
          </div>

          <p className="mt-6 text-xs text-brand-gray-100/70">
            Backed by 6+ years of analytics &amp; transaction experience across
            SaaS, consumer and healthcare.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
