import React from 'react';
import { motion } from 'framer-motion';
import productInHand from '../assets/product-in-hand.png';
import productOnPerson from '../assets/product-on-person.png';
import './Home.css';
import { FaCarCrash, FaRegTimesCircle, FaHeadSideVirus } from 'react-icons/fa';

const Home = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <motion.section
        className="hero-section text-white"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 py-20 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            WalkSmart: Safe and Independent Mobility
          </motion.h2>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            An affordable, wearable assistive device and mobile app that guides visually impaired users across roads safely and independently.
          </motion.p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="/download"
              className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-green-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download App
            </motion.a>
            <motion.a
              href="/preorder"
              className="bg-white text-green-700 font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pre-Order Your WalkSmart Device
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        className="bg-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div className="statistic-card bg-gray-100 p-8 rounded-lg shadow-lg" whileHover={{ y: -10 }}>
              <FaCarCrash className="text-5xl text-red-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-red-700">1 in 12</h3>
              <p className="text-gray-700">pedestrians with blindness have been hit by a motor vehicle or cyclist</p>
            </motion.div>
            <motion.div className="statistic-card bg-gray-100 p-8 rounded-lg shadow-lg" whileHover={{ y: -10 }}>
              <FaRegTimesCircle className="text-5xl text-red-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-red-700">88%</h3>
              <p className="text-gray-700">of visually impaired individuals experience accidents regularly</p>
            </motion.div>
            <motion.div className="statistic-card bg-gray-100 p-8 rounded-lg shadow-lg" whileHover={{ y: -10 }}>
              <FaHeadSideVirus className="text-5xl text-red-500 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-red-700">13%</h3>
              <p className="text-gray-700">of blind individuals experience at least one head-level injury monthly</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Product in Action Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">The Future of Independent Mobility</h3>
            <p className="text-lg text-gray-700">WalkSmart is a revolutionary wearable device that uses a combination of vibration and audio feedback to guide visually impaired users across roads safely. Our device connects to smart city infrastructure, providing real-time information about traffic signals and pedestrian crossings.</p>
            <p className="text-gray-700">We are on a mission to make cities more accessible and empower the visually impaired to navigate their surroundings with confidence and independence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white rounded-lg shadow-lg">
              <img src={productInHand} alt="A person's hand holding the WalkSmart device, which is a small, black, rectangular object with a camera lens." className="w-full rounded-lg" />
            </div>
            <div className="bg-white rounded-lg shadow-lg">
              <img src={productOnPerson} alt="A person wearing the WalkSmart device on their chest. The device is attached to a lanyard and is pointing forward." className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </motion.section>



      {/* Unique Selling Points Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Unique Selling Points</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <motion.div className="usp-card bg-white p-8 rounded-lg shadow-lg" whileHover={{ y: -10 }}>
              <h4 className="text-xl font-bold text-green-700 mb-4">Maximum Independence</h4>
              <p className="text-gray-700">We focus on providing as much independence as possible by including only the most essential features.</p>
            </motion.div>
            <motion.div className="usp-card bg-white p-8 rounded-lg shadow-lg" whileHover={{ y: -10 }}>
              <h4 className="text-xl font-bold text-green-700 mb-4">Accessible to Everyone</h4>
              <p className="text-gray-700">Our goal is to make our product accessible to everyone, with affordable pricing and adaptable solutions.</p>
            </motion.div>
            <motion.div className="usp-card bg-white p-8 rounded-lg shadow-lg" whileHover={{ y: -10 }}>
              <h4 className="text-xl font-bold text-green-700 mb-4">One-Snap Object Detection</h4>
              <p className="text-gray-700">The convenient one-snap object detection feature allows you to quickly check the road status for safe crossing.</p>
            </motion.div>
            <motion.div className="usp-card bg-white p-8 rounded-lg shadow-lg" whileHover={{ y: -10 }}>
              <h4 className="text-xl font-bold text-green-700 mb-4">Flexible Options</h4>
              <p className="text-gray-700">Choose between a pre-configured microcontroller or a free phone app to use with your WalkSmart device.</p>
            </motion.div>
            <motion.div className="usp-card bg-white p-8 rounded-lg shadow-lg" whileHover={{ y: -10 }}>
              <h4 className="text-xl font-bold text-green-700 mb-4">Open Source for Personal Use</h4>
              <p className="text-gray-700">Our products are open-sourced for personal use, allowing you to tweak the app to your specific needs.</p>
            </motion.div>
            <motion.div className="usp-card bg-white p-8 rounded-lg shadow-lg" whileHover={{ y: -10 }}>
              <h4 className="text-xl font-bold text-green-700 mb-4">Dual Usage Modes</h4>
              <p className="text-gray-700">Our device offers both "Road Mode" and "Home Mode" for versatile assistance in any environment.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
