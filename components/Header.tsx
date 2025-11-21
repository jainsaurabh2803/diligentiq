import React from 'react';
import { type User } from '../types';

interface HeaderProps {
  user: User | null;
  onLoginClick: () => void;
  onSignupClick: () => void;
  onLogoutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLoginClick, onSignupClick, onLogoutClick }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brand-blue">
          <a href="#">diligent-capitals</a>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#services" className="text-brand-gray-600 hover:text-brand-blue transition duration-300">Services</a>
          <a href="#contact" className="text-brand-gray-600 hover:text-brand-blue transition duration-300">Contact</a>
          <a href="#about" className="text-brand-gray-600 hover:text-brand-blue transition duration-300">About</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          {user ? (
             <div className="flex items-center space-x-4">
                <span className="hidden sm:inline text-brand-gray-700 font-medium">Welcome, {user.name}</span>
                <button 
                  onClick={onLogoutClick}
                  className="text-brand-blue hover:text-brand-blue-dark font-medium transition duration-300 border border-brand-blue px-4 py-2 rounded-lg hover:bg-brand-blue hover:text-white"
                >
                  Logout
                </button>
             </div>
          ) : (
            <>
              <button 
                onClick={onLoginClick}
                className="text-brand-blue hover:text-brand-blue-dark font-medium transition duration-300 hidden sm:block"
              >
                Log in
              </button>
              <button 
                onClick={onSignupClick}
                className="bg-brand-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-brand-blue-dark transition duration-300 shadow-sm"
              >
                Sign Up
              </button>
            </>
          )}
          <a href="#contact" className="hidden lg:inline-block bg-brand-gold text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition duration-300 shadow-sm">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;