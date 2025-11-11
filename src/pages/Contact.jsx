import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#F9F9F9] font-sans py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#212121] mb-12">Contact Us</h3>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-600 mb-8 text-center">Have questions or want to partner with us? Fill out the form below and we'll get back to you as soon as possible.</p>
          <form action="https://formspree.io/f/mkgknbdo" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
