import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import TrustedBy from './components/TrustedBy';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import AboutTeaser from './components/AboutTeaser';
import AboutPage from './pages/About';

import { SERVICE_CATEGORIES } from './constants';
import type { Service } from './types';

const Home: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutTeaser />
        {/* Make sure Services section has id="services" inside */}
        <Services
          categories={SERVICE_CATEGORIES}
          onServiceClick={setSelectedService}
        />
        {/* TrustedBy section should have id="trusted-by" */}
        <TrustedBy />
        {/* Contact section should have id="contact" */}
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

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default App;
