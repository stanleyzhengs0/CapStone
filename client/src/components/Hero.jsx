import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="
    /* solid fallback */
    bg-black
    bg-[linear-gradient(to_bottom,#000_0%,rgba(0,0,0,0.9)_20%,rgba(0,0,0,0.4)_35%,transparent_50%,rgba(0,0,0,0.4)_65%,rgba(0,0,0,0.9)_80%,#000_100%),radial-gradient(circle_at_65%_50%,transparent_0%,transparent_70%,rgba(239,68,68,0.45)_100%),radial-gradient(circle_at_35%_50%,transparent_0%,transparent_70%,rgba(239,68,68,0.45)_100%)]
    bg-[length:100%_100%]
    bg-no-repeat
    py-24 lg:py-32
    "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
        <h1 className="font-display-header text-[8rem] leading-none text-red-500 mb-0">
          Travelers
        </h1>
        <h1 className="font-display-header text-[8rem] leading-none text-white mb-4">
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

        {/* Hero Image */}
        <div className="mt-20">
          <div className="relative">
            <img 
              src="" 
              className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;