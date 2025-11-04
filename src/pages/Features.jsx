import React from 'react';
import crossingTheRoad from '../assets/crossing_the_road.png';
import dangerousItem from '../assets/dangerous_item.png';
import nonMotorousVehicleDetection from '../assets/non_motorous_vehicle_detection.png';
import obstacleDetection from '../assets/obstacle_detection.png';

const Features = () => {
  return (
    <div className="bg-[#F9F9F9] font-sans">
      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#212121] mb-12">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg flex flex-col justify-center">
                <h4 className="text-2xl md:text-3xl font-bold mb-2 text-[#2E7D32]">Vibration Feedback</h4>
                <p className="text-[#212121] text-base md:text-lg">Synced with traffic signals to provide real-time, intuitive guidance.</p>
              </div>
              <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg">
                <img src={crossingTheRoad} alt="A person crossing the road with the help of WalkSmart" className="w-full rounded-lg" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg md:order-last flex flex-col justify-center">
                <h4 className="text-2xl md:text-3xl font-bold mb-2 text-[#2E7D32]">Audio Guidance</h4>
                <p className="text-[#212121] text-base md:text-lg">Clear audio cues through the mobile app for additional support.</p>
              </div>
              <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg">
                <img src={dangerousItem} alt="A dangerous item on the sidewalk being detected by WalkSmart" className="w-full rounded-lg" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg flex flex-col justify-center">
                <h4 className="text-2xl md:text-3xl font-bold mb-2 text-[#2E7D32]">Smart City Integration</h4>
                <p className="text-[#212121] text-base md:text-lg">Connects with smart traffic light infrastructure for seamless operation.</p>
              </div>
              <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg">
                <img src={nonMotorousVehicleDetection} alt="A non-motorous vehicle being detected by WalkSmart" className="w-full rounded-lg" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg md:order-last flex flex-col justify-center">
                <h4 className="text-2xl md:text-3xl font-bold mb-2 text-[#2E7D32]">Obstacle Detection</h4>
                <p className="text-[#212121] text-base md:text-lg">Detects obstacles on the user's path and provides timely warnings.</p>
              </div>
              <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg">
                <img src={obstacleDetection} alt="An obstacle on the sidewalk being detected by WalkSmart" className="w-full rounded-lg" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
