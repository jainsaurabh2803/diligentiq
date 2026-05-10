import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-brand-gray-900 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-tight text-brand-blue-dark mb-6">
          Privacy Policy
        </h1>
        <p className="mb-6 text-base text-brand-gray-700">
          At Diligent Capitals, we take your privacy seriously. This policy explains what information we collect, how we use it, and the choices you have.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
          <p className="mb-3">
            We may collect personal information you provide directly when you contact us, sign up for newsletters, or request services. This may include your name, email address, phone number, and company details.
          </p>
          <p>
            We also collect non-personal data automatically through website analytics to help us improve our site and service experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
          <p className="mb-3">
            We use your information to respond to inquiries, deliver requested content, improve our services, and communicate updates about our offerings.
          </p>
          <p>
            We do not sell your personal data. We may share information with trusted service providers who help us run the website, subject to confidentiality requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Cookies and Analytics</h2>
          <p className="mb-3">
            Our website may use cookies and similar tracking technologies to optimize site performance and understand how visitors interact with the site.
          </p>
          <p>
            You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
          <p className="mb-3">
            You can request access to or correction of your personal information, or ask us to delete it if it is no longer necessary for the purposes described.
          </p>
          <p>
            For privacy-related inquiries, please contact us through the contact form on our site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Updates to This Policy</h2>
          <p>
            We may update this policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
