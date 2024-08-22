import React from 'react';
import { ReactTyped } from "react-typed";
import codeImage from "../../assets/code2.jpg";  // Ensure you have the correct path to your image

function CodingSection() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center py-20 px-4">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 max-w-7xl mx-auto px-4">
        
        {/* Left Section: Code Snippet Image */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:w-1/2 w-full">
          <img 
            src={codeImage} 
            alt="Code Snippet" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:w-1/2 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start <span className="text-cyan-400">
            <ReactTyped
              strings={["Coding"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            /> <br />
             <ReactTyped
              strings={["in seconds"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
            </span>
          </h2>
          <p className="text-gray-400 mb-8">
            Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 sm:w-auto">
              Continue Lesson →
            </button>
            <button className="bg-gray-700 text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodingSection;
