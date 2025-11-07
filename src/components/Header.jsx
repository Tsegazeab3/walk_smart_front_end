import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import logo from '../assets/logo.svg';
import ThemeToggler from './ThemeToggler';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/features', label: 'Features' },
    { to: '/preorder', label: 'Preorder' },
    { to: '/contact', label: 'Contact' },
    { to: '/download', label: 'Download App' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="The WalkSmart logo, which is the word WalkSmart written in a stylized font." className="h-8 w-auto" />
          </NavLink>
        </div>
        <div className="flex-grow flex justify-center">
          <nav ref={navRef} className='hidden md:flex relative'>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium relative"
                onMouseEnter={() => setActiveTab(link.to)}
                onMouseLeave={() => setActiveTab(null)}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                    layoutId="underline"
                  />
                )}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center">
          <ThemeToggler />
          <div className="md:hidden ml-4 z-30">
            <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;