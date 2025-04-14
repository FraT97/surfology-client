import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      
      <div className="w-full sm:w-1/2 flex flex-col items-start justify-center px-10 py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">THE BEST</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">SURFBOARDS</h1>
          <div className="flex items-center gap-2 mt-3">
           <Link to='/surfboards' ><p className="font-semibold text-sm md:text-base">SHOP NOW</p></Link> 
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

     
      <div className="w-full sm:w-1/2">
        <img className="w-full h-full object-cover" src={assets.HeroImage} alt="main-image" />
      </div>
    </div>
  );
};

export default Hero;

