import React from 'react';
import productInHand from '../assets/product-in-hand.png';
import productOnPerson from '../assets/product-on-person.png';
import { FaCheckCircle } from 'react-icons/fa';

const Preorder = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Product Images */}
              <div className="space-y-6">
                <img src={productOnPerson} alt="WalkSmart device in use" className="rounded-lg shadow-lg" />
                <img src={productInHand} alt="WalkSmart device held in hand" className="rounded-lg shadow-lg" />
              </div>

              {/* Pre-order Form and Details */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Pre-Order WalkSmart</h2>
                <p className="text-lg text-gray-700 mb-6">Reserve your device today and be among the first to experience a new level of freedom and independence.</p>

                <div className="mb-6">
                  <p className="text-4xl font-bold text-green-700">2500 AED</p>
                  <p className="text-gray-600">Special Pre-order Price</p>
                </div>

                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="country" className="block text-gray-700 font-bold mb-2">Country</label>
                    <select id="country" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500">
                      <option>United Arab Emirates</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-green-700 text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition duration-300">
                    Submit Pre-Order
                  </button>
                </form>
              </div>
            </div>

            {/* Features and What's in the Box */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-3" /> Real-time road status updates</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-3" /> Smart city infrastructure integration</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-3" /> Vibration and audio feedback</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-3" /> One-snap object detection</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-3" /> Dual usage modes (Road & Home)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">What's in the Box?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-3" /> WalkSmart Wearable Device</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-3" /> Adjustable Lanyard</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-3" /> Charging Cable & Adapter</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-3" /> User Manual</li>
                  <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-3" /> Free access to the WalkSmart App</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Preorder;
