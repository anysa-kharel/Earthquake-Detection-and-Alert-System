// HeroSection.js
import React from 'react';
import IllustrationImage from '../assets/svgs/earthquake.svg'; // Replace with the actual path
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className=" text-primary py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Illustration (on the right for larger screens) */}
    
        {/* <IllustrationImage/> */}

        {/* Text content (on the left) */}
        <div className="md:w-1/2 lg:w-1/3 xl:w-1/2 mx-4 md:mx-8 lg:mx-12">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Your Heading Goes Here</h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Your subheading goes here. Provide a brief description or tagline.
          </p>
          
          {/* CTA Button */}
          <Link to="/your-link" className="bg-primary text-slate-200 py-2 px-4 rounded-full font-bold text-lg hover:bg-gray-200 transition duration-300">
            Call-to-Action
          </Link>
        </div>

        <img
          src={IllustrationImage}
          alt="Illustration"
          className="w-full md:w-1/2 lg:w-2/3 xl:w-1/2 mb-8 md:mb-0"
        />
      </div>
    </div>
  );
};

export default HeroSection;
