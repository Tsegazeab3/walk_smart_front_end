import React from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-gray-800 hover:text-blue-600 focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-md rounded-lg p-4 z-10">
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="text-[#1a73e8] px-2 hover:text-[#000] hover:underline">Home</Link>
            <Link to="/features" className="text-[#1a73e8] px-2 hover:text-[#000] hover:underline">Features</Link>
            <Link to="/preorder" className="text-[#1a73e8] px-2 hover:text-[#000] hover:underline">Preorder</Link>
            <Link to="/contact" className="text-[#1a73e8] px-2 hover:text-[#000] hover:underline">Contact</Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
