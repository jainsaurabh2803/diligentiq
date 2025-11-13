import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import TrustedBy from './components/TrustedBy';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import { type Service } from './types';
import { SERVICE_CATEGORIES } from './constants';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = useCallback((service: Service) => {
    setSelectedService(service);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedService(null);
  }, []);
  
  const allServices = SERVICE_CATEGORIES.flatMap(category => category.services);
  
  return (
    <div className="bg-brand-gray-50 min-h-screen font-sans text-brand-gray-800">
      <Header />
      <main>
        <Hero />
        <Services onServiceClick={handleServiceClick} />
        <Contact />
        <TrustedBy />
      </main>
      <Footer />
      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
