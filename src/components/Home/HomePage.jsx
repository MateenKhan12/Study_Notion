import React, { useState } from "react";
import Navigation from "../StudentForm/Navigation";
import TeamCollaboration from "./TeamCollaboration";
import CodingPotential from "./CodingPotential";
import CodingSection from "./CodingSection";
import Hero from "./Hero";
import profile from "../../assets/profile.jpg";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

function HomePage() {
  const [selectedRole, setSelectedRole] = useState("Student"); // Default role

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className=" min-h-screen mb-8 bg-gray-900 text-white">
      <div className="bg-gray-800 rounded-lg shadow-lg p-5 sm:p-5 sm:flex-row flex justify-between items-center mb-8">
        <Navigation />
        <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-0">
          <AiOutlineSearch
            size={20}
            className="text-gray-400 hover:text-yellow-500"
          />
          <AiOutlineShoppingCart
            size={20}
            className="text-gray-400 hover:text-yellow-500"
          />
          <img src={profile} alt="Profile" className="w-8 h-8 sm:w-10 rounded-full" />
        </div>
      </div>
      <div className="space-y-8">
      <Hero />
      <TeamCollaboration />
      <CodingPotential />
      <CodingSection />
      </div>
    </div>
  );
}

export default HomePage;
