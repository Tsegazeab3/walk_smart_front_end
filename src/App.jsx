import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Preorder from './pages/Preorder';
import Contact from './pages/Contact';
import Download from './pages/Download';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div className="font-sans relative min-h-screen flex flex-col">
        <div className="bg-gray-50 dark:bg-gray-900 flex-grow">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/preorder" element={<Preorder />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/download" element={<Download />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
