import React from 'react';

const Preorder = () => {
  return (
    <div className="bg-[#e0e0e0] font-sans">
      {/* CTA for Organizations */}
      <section id="cta-orgs" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Partner with Us for a More Accessible City</h3>
          <p className="text-lg text-gray-600 mb-8">We partner with NGOs, Governments, and other organizations to bring WalkSmart to more people.</p>
          <a href="#contact" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700">Request a Bulk Contract Quote</a>
        </div>
      </section>
    </div>
  );
};

export default Preorder;
