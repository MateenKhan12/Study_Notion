import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="bg-gray-900 text-white py-20 flex flex-col items-center justify-center text-center px-4">
      <button className="flex mb-8 bg-gray-800 text-gray-200 px-6 py-2 rounded-full hover:bg-gray-700">
        Become an Instructor
        <AiOutlineArrowRight size={20} className="ml-2" />      
      </button>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Empower Your Future with <span className="text-cyan-400">
            <ReactTyped
              strings={["Coding Skills"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
        </span>
      </h1>
      <p className="text-gray-400 max-w-2xl sm:max-w-2xl mb-8 text-sm sm:text-base md:text-lg">
        With our online coding courses, you can learn at your own pace, from anywhere in the world, 
        and get access to a wealth of resources, including hands-on projects, quizzes, 
        and personalized feedback from instructors.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 w-full sm:w-auto">
          Learn More
        </button>
        <button className="bg-gray-800 text-gray-200 px-6 py-3 rounded-lg hover:bg-gray-700 w-full sm:w-auto">
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default Hero;
