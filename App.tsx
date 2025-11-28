import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import TrustedBy from './components/TrustedBy';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import { SERVICE_CATEGORIES } from './constants';
import type { Service } from './types';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services
          categories={SERVICE_CATEGORIES}
          onServiceClick={setSelectedService}
        />
        <TrustedBy />
        <Contact />
      </main>
      <Footer />

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default App;
