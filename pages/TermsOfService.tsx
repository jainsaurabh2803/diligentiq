import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-brand-gray-900 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-tight text-brand-blue-dark mb-6">
          Terms of Service
        </h1>
        <p className="mb-6 text-base text-brand-gray-700">
          These terms govern your use of the Diligent Capitals website and services. Please read them carefully before using the site.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Acceptance of Terms</h2>
          <p className="mb-3">
            By accessing or using our website, you agree to comply with these terms. If you do not agree, please do not use the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Use of the Website</h2>
          <p className="mb-3">
            You may use the website for lawful purposes only. You agree not to disrupt or interfere with the site or any affiliated services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Intellectual Property</h2>
          <p className="mb-3">
            All content on this website, including text, graphics, and logos, is owned by Diligent Capitals or its licensors and is protected by intellectual property laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Disclaimers</h2>
          <p className="mb-3">
            The information provided on this site is for general informational purposes only. We make no warranties regarding the accuracy or completeness of the content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Diligent Capitals is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Changes to These Terms</h2>
          <p>
            We may revise these terms at any time. Continued use of the site after changes indicates your acceptance of the updated terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
