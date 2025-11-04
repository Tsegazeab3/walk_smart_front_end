import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold absolute text-gray-800 hover:cursor-pointer">WalkSmart</Link>
        <nav className='w-screen hidden md:flex justify-center top-2 right-2'>
          <Link to="/" className="text-[#1a73e8] px-2 hover:text-[#000] hover:underline  mx-1">Home</Link>
          <Link to="/features" className="text-[#1a73e8] px-2 hover:text-[#000] hover:underline  mx-1">Features</Link>
          <Link to="/preorder" className="text-[#1a73e8] px-2 hover:text-[#000] hover:underline  mx-1">Preorder</Link>
          <Link to="/contact" className="text-[#1a73e8] px-2 hover:text-[#000] hover:underline  mx-1">Contact</Link>
        </nav>
        <div className="md:hidden">
          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
