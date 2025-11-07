import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaGithub size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="/download" className="text-white hover:underline">Download App</a>
        </div>
        <p>&copy; 2025 WalkSmart. All rights reserved.</p>
        <div className="mt-4">
          <p>Contact us:</p>
          <a href="mailto:tsegazeabkebede422@gmail.com" className="text-white hover:underline">tsegazeabkebede422@gmail.com</a>
          <span className="mx-2">|</span>
          <a href="mailto:h00540222@hct.ac.ae" className="text-white hover:underline">h00540222@hct.ac.ae</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
