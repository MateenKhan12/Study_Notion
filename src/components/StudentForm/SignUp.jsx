import React, { useState } from "react";
import laptop from "../../assets/laptop.png";
import Navigation from "./Navigation";
import SignUpForm from "./SignUpForm";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

function SignUp() {
  const [selectedRole, setSelectedRole] = useState("Student");
  const navigate = useNavigate();

  const handleClick = (role) => {
    setSelectedRole(role);
    navigate("/login", { state: { role } });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="container mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-lg p-5 flex justify-between items-center mb-8">
          <Navigation />
          <div className="flex items-center gap-4">
            <AiOutlineSearch
              size={20}
              className="text-gray-400 hover:text-yellow-500"
            />
            <AiOutlineShoppingCart
              size={20}
              className="text-gray-400 hover:text-yellow-500"
            />
            <button
              onClick={() => handleClick(selectedRole)}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:text-yellow-500"
            >
              Login
            </button>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg shadow-lg p-14 flex ml-10">
          <div className="w-1/2 p-14">
            <h1 className="text-4xl font-bold mb-4">
              {selectedRole === "Student"
                ? "Join the millions learning to code with StudyNotion for free"
                : "Sign up to start teaching with StudyNotion"}
            </h1>
            <p className="text-gray-400 mb-4">
              {selectedRole === "Student" ? (
                <>
                  Build skills for today, tomorrow, and beyond.{" "}
                  <span className="text-cyan-400">
                    Education to future-proof your career.
                  </span>
                </>
              ) : (
                <>
                  Share your knowledge,{" "}
                  <span className="text-cyan-400">
                    inspire the next generation.
                  </span>
                </>
              )}
            </p>
            <div className="inline-flex bg-gray-700 rounded-full p-1 space-x-1">
              <button
                className={`px-4 py-2 rounded-full ${
                  selectedRole === "Student"
                    ? "bg-gray-900 text-white"
                    : "text-gray-400"
                }`}
                onClick={() => setSelectedRole("Student")}
              >
                Student
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  selectedRole === "Instructor"
                    ? "bg-gray-900 text-white"
                    : "text-gray-400"
                }`}
                onClick={() => setSelectedRole("Instructor")}
              >
                Instructor
              </button>
            </div>
            <SignUpForm role={selectedRole} />
          </div>
          <div className="w-1/2 pl-8">
            <img src={laptop} alt="Person with laptop" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
