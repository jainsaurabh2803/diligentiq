import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="about" className="bg-brand-blue-dark text-brand-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold text-white mb-4">diligent-capitals</h4>
            <p className="pr-8">
              diligent-capitals is a premier provider of corporate legal and financial services, dedicated to helping businesses navigate complex regulatory landscapes with ease and confidence. Our expert team offers tailored solutions to ensure your company's success and compliance.
            </p>
            <div className="mt-6">
              <h5 className="text-lg font-semibold text-white mb-3">Our Founders</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <p className="font-semibold text-white">Navneet Agarwal</p>
                  <p className="text-sm text-brand-gray-400">CA, CS - 15+ Yrs of experience</p>
                  <p className="text-sm text-brand-gray-400">
                    <a href="tel:+919916026616" className="hover:text-brand-gold transition-colors">+91 99160 26616</a>
                  </p>
                  <p className="text-sm text-brand-gray-400">Bangalore, India</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Saurabh Jain</p>
                  <p className="text-sm text-brand-gray-400">8+ Yrs of industrial experience</p>
                  <p className="text-sm text-brand-gray-400">
                    <a href="tel:+917600889240" className="hover:text-brand-gold transition-colors">+91 76008 89240</a>
                  </p>
                  <p className="text-sm text-brand-gray-400">Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#services" className="hover:text-brand-gold transition-colors">Services</a></li>
              <li className="mb-2"><a href="#contact" className="hover:text-brand-gold transition-colors">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Details</h4>
            <p className="mb-2">Prestige Fern Residency<br/>Bangalore, India</p>
            <p className="mb-2">Email: <a href="mailto:support@diligent-capitals.com" className="hover:text-brand-gold transition-colors">support@diligent-capitals.com</a></p>
            <p>Phone: <a href="tel:+919916026616" className="hover:text-brand-gold transition-colors">+91-9916026616</a></p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-brand-gray-700 text-center text-brand-gray-400">
          <p>&copy; {new Date().getFullYear()} diligent-capitals. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;