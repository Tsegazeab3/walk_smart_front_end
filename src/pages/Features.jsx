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
                <h4 className="text-2xl md:text-3xl font-bold mb-2 text-[#2E7D32]">Safe Road Crossing</h4>
                <p className="text-[#212121] text-base md:text-lg">WalkSmart helps you cross the road safely by providing real-time information about traffic signals. The device vibrates and provides audio cues to let you know when it is safe to cross.</p>
              </div>
              <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg">
                <img src={crossingTheRoad} alt="A person crossing the road with the help of WalkSmart" className="w-full rounded-lg" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg md:order-last flex flex-col justify-center">
                <h4 className="text-2xl md:text-3xl font-bold mb-2 text-[#2E7D32]">Dangerous Item Detection</h4>
                <p className="text-[#212121] text-base md:text-lg">WalkSmart can detect and warn you about dangerous items in your path, such as sharp objects or construction debris. The device will vibrate and provide an audio warning to help you avoid these hazards.</p>
              </div>
              <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg">
                <img src={dangerousItem} alt="A dangerous item on the sidewalk being detected by WalkSmart" className="w-full rounded-lg" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg flex flex-col justify-center">
                <h4 className="text-2xl md:text-3xl font-bold mb-2 text-[#2E7D32]">Non-Motorized Vehicle Detection</h4>
                <p className="text-[#212121] text-base md:text-lg">WalkSmart can detect and warn you about non-motorized vehicles, such as bicycles and scooters. The device will vibrate and provide an audio warning to help you avoid collisions.</p>
              </div>
              <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg">
                <img src={nonMotorousVehicleDetection} alt="A non-motorous vehicle being detected by WalkSmart" className="w-full rounded-lg" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-[#ffffff] p-6 rounded-lg shadow-lg md:order-last flex flex-col justify-center">
                <h4 className="text-2xl md:text-3xl font-bold mb-2 text-[#2E7D32]">Obstacle Detection</h4>
                <p className="text-[#212121] text-base md:text-lg">WalkSmart can detect obstacles in your path, such as furniture, poles, and other objects. The device will vibrate and provide an audio warning to help you avoid collisions.</p>
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
