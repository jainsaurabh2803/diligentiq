import React from 'react';

const LOGOS = [
  {
    name: 'Frozen Bottle',
    title: 'Frozen Bottle',
    src: '/frozenbottle.jpeg',
  },
  {
    name: 'MedPay',
    title: 'MedPay',
    src: '/medpay.jpeg',
  },
  {
    name: 'Khare.ai',
    title: 'Khare.ai',
    src: '/khare.jpeg',
  },
  {
    name: 'Kling Breweries',
    title: 'Kling Breweries',
    src: '/kling.jpeg',
  },
  {
    name: 'Evening Flavors',
    title: 'Evening Flavors',
    src: '/eveningflavor.jpeg',
  },
];

const TrustedBy: React.FC = () => {
  return (
    <section
      id="trusted-by"
      className="py-12 md:py-14 bg-white border-t border-brand-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-blue mb-3">
              TRUSTED BY
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-brand-blue-dark">
              Operators &amp; investors across consumer, healthcare and SaaS.
            </h2>
            <p className="text-sm text-brand-gray-600 mt-2 max-w-xl">
              We have worked with founders and investors across food &amp;
              beverage, healthcare, SaaS and hospitality – supporting both
              fund-raises and buy-side transactions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 items-center">
          {LOGOS.map((logo) => (
            <div
              key={logo.title}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="h-16 w-24 md:h-20 md:w-28 flex items-center justify-center bg-brand-gray-100 rounded-lg overflow-hidden">
                <img
                  src={logo.src}
                  alt={logo.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-brand-blue-dark">
                  {logo.name}
                </p>
                <p className="text-[11px] text-brand-gray-500">
                  {logo.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
