import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-brand-blue py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Get in Touch With Us</h2>
          <p className="mt-4 text-lg text-brand-gray-200 max-w-3xl mx-auto">
            Have questions about our services or ready to start a project? We're here to help.
          </p>
          <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-2xl">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-gray-700 mb-1">Full Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-gray-700 mb-1">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" placeholder="john.doe@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-gray-700 mb-1">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" placeholder="+91 12345 67890" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-brand-gray-700 mb-1">Service of Interest</label>
                <select id="service" name="service" className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue bg-white">
                  <option>Due Diligence Snapshot</option>
                  <option>Legal & License Summary</option>
                  <option>Agreement Risk Analysis</option>
                  <option>Tax Structuring</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-brand-gray-700 mb-1">Your Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" placeholder="Tell us more about your requirements..."></textarea>
              </div>
            </div>
            <div className="text-center mt-8">
              <button type="submit" className="bg-brand-gold text-white font-bold py-3 px-12 text-lg rounded-lg hover:bg-opacity-90 transition duration-300 shadow-md transform hover:scale-105">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
