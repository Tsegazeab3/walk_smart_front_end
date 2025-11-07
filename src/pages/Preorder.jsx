import React from 'react';

const Preorder = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pre-Order Your WalkSmart Device</h2>
            <p className="text-lg text-gray-700 mb-8">Be the first to experience the future of independent mobility. Fill out the form below to reserve your WalkSmart device.</p>
          </div>
          <div className="max-w-lg mx-auto">
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500" />
              </div>
              <div className="text-center">
                <button type="submit" className="bg-green-700 text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition duration-300">Submit Pre-Order</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Preorder;
