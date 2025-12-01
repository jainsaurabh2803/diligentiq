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
import AboutPage from './pages/About';
import AboutTeaser from './components/AboutTeaser';
import { Routes, Route } from 'react-router-dom';

const Home: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutTeaser />
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

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default App;
