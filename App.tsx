import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import TrustedBy from './components/TrustedBy';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import AuthModal from './components/AuthModal';
import { type Service, type User } from './types';
import { SERVICE_CATEGORIES } from './constants';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const handleServiceClick = useCallback((service: Service) => {
    setSelectedService(service);
  }, []);

  const closeServiceModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  // Auth Handlers
  const openLogin = useCallback(() => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  }, []);

  const openSignup = useCallback(() => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const handleAuthSuccess = useCallback((loggedInUser: User) => {
    setUser(loggedInUser);
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
  }, []);
  
  return (
    <div className="bg-brand-gray-50 min-h-screen font-sans text-brand-gray-800">
      <Header 
        user={user}
        onLoginClick={openLogin}
        onSignupClick={openSignup}
        onLogoutClick={handleLogout}
      />
      <main>
        <Hero />
        <Services onServiceClick={handleServiceClick} />
        <Contact />
        <TrustedBy />
      </main>
      <Footer />
      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeServiceModal} />
      )}
      <AuthModal 
        isOpen={isAuthModalOpen}
        initialMode={authMode}
        onClose={closeAuthModal}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default App;