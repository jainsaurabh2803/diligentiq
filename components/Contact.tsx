import React from 'react';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-14 md:py-16 bg-brand-blue-dark text-white"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-gold mb-3">
            CONTACT
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Share your deal, we&apos;ll respond within 24 hours.
          </h2>
          <p className="text-sm md:text-base text-white/80 mb-4">
            Send us a short note about the transaction stage, sector and the
            kind of diligence support you are looking for. We can share a
            relevant sample output and a time &amp; fee estimate.
          </p>
          <p className="text-sm text-white/70">
            Prefer email? Write to{' '}
            <a
              href="mailto:support@diligentcapitals.com"
              className="underline underline-offset-2 decoration-brand-gold"
            >
              support@diligentcapitals.com
            </a>
          </p>
        </div>

        <form
          className="bg-white rounded-2xl p-5 md:p-6 shadow-lg text-brand-blue-dark space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thanks! We will get back to you shortly.');
          }}
        >
          <div>
            <label className="block text-xs font-medium text-brand-gray-600 mb-1">
              Name
            </label>
            <input
              required
              type="text"
              className="w-full rounded-md border border-brand-gray-100 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-brand-gray-600 mb-1">
              Email
            </label>
            <input
              required
              type="email"
              className="w-full rounded-md border border-brand-gray-100 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-brand-gray-600 mb-1">
              Deal context
            </label>
            <textarea
              required
              rows={4}
              className="w-full rounded-md border border-brand-gray-100 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold resize-y"
              placeholder="Sector, stage, approximate cheque size and the kind of support you are exploring..."
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex justify-center items-center rounded-full bg-brand-gold text-brand-blue-dark text-sm font-semibold py-2.5 hover:bg-amber-300 transition"
          >
            Submit enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
