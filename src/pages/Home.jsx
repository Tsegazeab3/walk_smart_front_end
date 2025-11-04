import React from 'react';

const Home = () => {
  return (
    <div className="bg-[#F9F9F9] font-sans">
      {/* Hero Section */}
      <section className="bg-[#2E7D32] text-[#ffffff]">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">WalkSmart: Safe and Independent Mobility</h2>
          <p className="text-lg mb-8">An affordable, wearable assistive device and mobile app that guides visually impaired users across roads safely and independently.</p>
          <a href="#cta-users" className="bg-[#ffffff] text-[#2E7D32] font-bold py-3 px-6 rounded-full hover:bg-[#FFC107]">Pre-Order Your WalkSmart Device</a>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-[#ffffff] py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-[#2E7D32]">600K</h3>
              <p className="text-[#212121]">People in the UAE have experienced vision loss</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#2E7D32]">27K</h3>
              <p className="text-[#212121]">Of these individuals are blind</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#2E7D32]">Top Cause</h3>
              <p className="text-[#212121]">Uncorrected refractive error is a primary cause of visual impairment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/placeholder.svg" alt="WalkSmart device in use" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#212121] mb-4">The Future of Independent Mobility</h3>
              <p className="text-[#212121] mb-4">WalkSmart is a revolutionary wearable device that uses a combination of vibration and audio feedback to guide visually impaired users across roads safely. Our device connects to smart city infrastructure, providing real-time information about traffic signals and pedestrian crossings.</p>
              <p className="text-[#212121]">We are on a mission to make cities more accessible and empower the visually impaired to navigate their surroundings with confidence and independence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof/Testimonials Section */}
      <section id="testimonials" className="bg-[#ffffff] py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-[#212121] mb-12">Tired of the Noise and Unsafe Crossings?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F9F9F9] p-8 rounded-lg shadow-lg">
              <p className="text-[#212121] mb-4">"I used to be so anxious about crossing busy streets. WalkSmart has given me the confidence to travel independently. It's a life-changer!"</p>
              <p className="text-[#212121] font-bold">- Ahmed</p>
            </div>
            <div className="bg-[#F9F9F9] p-8 rounded-lg shadow-lg">
              <p className="text-[#212121] mb-4">"The vibrations are so intuitive. I don't have to strain to hear over traffic noise anymore. I feel so much safer."</p>
              <p className="text-[#212121] font-bold">- Chala</p>
            </div>
            <div className="bg-[#F9F9F9] p-8 rounded-lg shadow-lg">
              <p className="text-[#212121] mb-4">"As a parent, I'm always worried. WalkSmart gives me peace of mind knowing my daughter can navigate the city safely."</p>
              <p className="text-[#212121] font-bold">- Fatima</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
