import React from 'react';

const LOGOS = [
  { name: 'Frozen Bottle', title: 'Frozen Bottle', src: '/frozenbottle.jpeg' },
  { name: 'MedPay', title: 'MedPay', src: '/medpay.jpeg' },
  { name: 'Khare.ai', title: 'Khare.ai', src: '/khare.jpeg' },
  { name: 'Kling Breweries', title: 'Kling Breweries', src: '/kling.jpeg' },
  { name: 'Evening Flavors', title: 'Evening Flavors', src: '/eveningflavor.jpeg' },
];

const TrustedBy: React.FC = () => {
  return (
    <section
      id="trusted-by"
      className="py-12 md:py-14 bg-white border-t border-brand-gray-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-blue mb-3">
          TRUSTED BY
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-brand-blue-dark">
          Operators &amp; investors across consumer, healthcare and SaaS.
        </h2>
        <p className="text-sm text-brand-gray-600 mt-2 max-w-xl">
          We have worked with founders and investors across food &amp; beverage,
          healthcare, SaaS and hospitality – supporting both fund-raises and
          buy-side transactions.
        </p>
      </div>

      {/* ✅ SLIDING MARQUEE */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 animate-marquee w-max px-6">

          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[160px] gap-3"
            >
              {/* ✅ CIRCULAR LOGO */}
              <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-brand-gray-100 flex items-center justify-center overflow-hidden shadow-sm">
                <img
                  src={logo.src}
                  alt={logo.title}
                  className="h-full w-full object-contain p-2"
                />
              </div>

              <div className="text-center leading-tight">
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
