import React from 'react';
import { assets } from '../assets/assets';

const Main = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Left Side - Content */}
      <div className="w-full sm:w-1/2 flex flex-col items-start justify-center px-10 py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">LATEST ARRIVALS</h1>
          <div className="flex items-center gap-2 mt-3">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full sm:w-1/2">
        <img className="w-full h-full object-cover" src={assets.MainImage} alt="main-image" />
      </div>
    </div>
  );
};

export default Main;

