import React from 'react';

const AnimatedBox = ({ left, width }) => {
  return (
    <div
      className="absolute bg-transparent border border-[#1a73e8] rounded-md h-8"
      style={{ left, width, transition: 'left 0.3s ease, width 0.3s ease' }}
    />
  );
};

export default AnimatedBox;
