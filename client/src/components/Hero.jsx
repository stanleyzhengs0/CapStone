import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="
    /* solid fallback */
    bg-black
    bg-[length:100%_100%]
    bg-no-repeat
    py-24 lg:py-12
    "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
        {/*<h1 className="font-display-header text-[8rem] leading-none text-red-500 mb-0">
          Travelers
        </h1> */}
        <h1 className="font-display-header text-[8rem] leading-none text-white">
          Trail<span className="text-red-500">blazers.</span>
        </h1>

        <p className="font-display-light  text-white mt-0 mb-8 text-[1.25rem] max-w-prose	mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Temp
        </p>


        <button
          className="
            inline-flex items-center space-x-3
            bg-white text-black-500 px-8 py-4 rounded-full
            font-medium text-lg
            hover:bg-gray-800 transition-colors group
          "
        >
          <span className = "font-display-text">Shop now</span>

          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
          </div>
        </button>
        </div>       
     / </div>
    </section>
  );
};

export default Hero;