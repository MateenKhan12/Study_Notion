import React, { useState } from "react";
import laptop from "../../assets/laptop.png";
import Navigation from "./Navigation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(
    location.state && location.state.role ? location.state.role : "Student"
  );

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    console.log(`Role change to: ${role}`);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Navigate to verify email page with the role state
    navigate("/verify-email", { state: { role: selectedRole } });
    // navigate("/home", { state: { role: selectedRole } });
    // navigate("/homepage");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="container">
        <div className="bg-gray-800 rounded-lg shadow-lg p-5 flex justify-between items-center mb-8">
          <Navigation />
          <div className="flex items-center gap-4">
            <AiOutlineSearch size={20} className="text-gray-400 hover:text-yellow-500" />
            <AiOutlineShoppingCart size={20} className="text-gray-400 hover:text-yellow-500" />
            <Link
              to={{ pathname: "/signup", state: { role: selectedRole } }}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:text-yellow-500"
            >
              Sign up
            </Link>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg mr-24 ml-28 shadow-lg p-8 flex">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
            <p className="text-gray-400 mb-4">
              {selectedRole === "Student" ? (
                <>
                  Build skills for today, tomorrow, and beyond.
                  <span className="text-cyan-400 italic mr-96">
                    Education <span className="block">to future-proof your career.</span>
                  </span>
                </>
              ) : (
                <>
                  Discover your passions,
                  <span className="text-cyan-400 italic mr-96 block">Be Unstoppable</span>
                </>
              )}
            </p>
            <div className="inline-flex mb-4 bg-gray-700 rounded-full p-1 space-x-1">
              <button
                className={`px-4 py-2 rounded-full ${selectedRole === "Student" ? "bg-gray-900 text-white" : "text-gray-400"}`}
                onClick={() => handleRoleChange("Student")}
              >
                Student
              </button>
              <button
                className={`px-4 py-2 rounded-full ${selectedRole === "Instructor" ? "bg-gray-900 text-white" : "text-gray-400"}`}
                onClick={() => handleRoleChange("Instructor")}
              >
                Instructor
              </button>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  {selectedRole === "Student" ? "Student Email Address *" : "Instructor Email Address *"}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  placeholder={selectedRole === "Student" ? "Enter student email address" : "Enter instructor email address"}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-400 mb-2">Password *</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter Password"
                />
              </div>
              <div className="mb-4 text-right">
                <Link to="/resetpassword" className="text-cyan-400">Forgot password?</Link>
              </div>
              <button type="submit" className="w-full py-2 bg-yellow-500 text-black font-bold rounded-lg">
                Sign in {selectedRole === "Student" ? "as Student" : "as Instructor"}
              </button>
            </form>
          </div>
          <div className="w-1/2 pl-8">
            <img src={laptop} alt="Person with laptop" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
