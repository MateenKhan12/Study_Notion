import React from 'react';
import { ReactTyped } from "react-typed";
import code2 from "../../assets/code2.jpg";
function CodingPotential() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-20 px-4">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 max-w-7xl mx-auto ">
        
        {/* Left Section: Text Content */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Unlock your <span className="text-cyan-400">
            <ReactTyped
              strings={["Coding Potential"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
            </span> with our online courses.
          </h2>
          <p className="text-gray-400 mb-8">
            Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 w-full sm:w-auto">
              Try it Yourself →
            </button>
            <button className="bg-gray-700 text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-600 w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section: Code Snippet */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:w-1/2 flex items-center justify-center">
         <img src={code2} alt="CodeImage" className="max-w-full h-auto object-cover rounded-lg" />
          
        </div>
      </div>
    </div>
  );
}

export default CodingPotential;

