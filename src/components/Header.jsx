import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import AnimatedBox from './AnimatedBox';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const active = navRef.current.querySelector('.active');
    if (active) {
      setActiveLink({ left: active.offsetLeft, width: active.offsetWidth });
    }
  }, [location]);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <NavLink to="/" className="text-2xl font-bold text-gray-800 hover:cursor-pointer">WalkSmart</NavLink>
        </div>
        <div className="flex-grow flex justify-center">
          <nav ref={navRef} className='hidden md:flex relative'>
            <AnimatedBox left={activeLink.left} width={activeLink.width} />
            <NavLink to="/" className={({ isActive }) =>
              "text-[#1a73e8] px-2 hover:text-[#000] hover:underline  mx-1" + (isActive ? " active" : "")
          }>Home</NavLink>
            <NavLink to="/features" className={({ isActive }) =>
              "text-[#1a73e8] px-2 hover:text-[#000] hover:underline  mx-1" + (isActive ? " active" : "")
          }>Features</NavLink>
            <NavLink to="/preorder" className={({ isActive }) =>
              "text-[#1a73e8] px-2 hover:text-[#000] hover:underline  mx-1" + (isActive ? " active" : "")
          }>Preorder</NavLink>
            <NavLink to="/contact" className={({ isActive }) =>
              "text-[#1a73e8] px-2 hover:text-[#000] hover:underline  mx-1" + (isActive ? " active" : "")
          }>Contact</NavLink>
          </nav>
        </div>
        <div className="md:hidden">
          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;