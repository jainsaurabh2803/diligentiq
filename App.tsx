import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import TrustedBy from './components/TrustedBy';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import AuthModal from './components/AuthModal';
import { type Service, type User } from './types';
import { supabase } from './utils/supabaseClient';

const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  // Initialize Auth State
  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          name: session.user.user_metadata.name || session.user.email?.split('@')[0] || 'User',
          email: session.user.email || '',
        });
      }
    });

    // Listen for changes (login, logout, signup)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          name: session.user.user_metadata.name || session.user.email?.split('@')[0] || 'User',
          email: session.user.email || '',
        });
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

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

  const handleLogout = useCallback(async () => {
    await supabase.auth.signOut();
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
      />
    </div>
  );
};

export default App;