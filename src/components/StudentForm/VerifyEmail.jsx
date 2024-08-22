import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineClockCircle, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import Navigation from "./Navigation";

function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [code, setCode] = useState(new Array(6).fill(''));

  // Extract the role from the location state
  const role = location.state?.role || "Student";

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Verification code submitted:', code.join(''));
    // Pass the role to the next page if necessary
    navigate("/verification", { state: { role } });
  };

  return (
    <div className="min-h-screen mb-8 bg-gray-900 text-white">
      <div className="bg-gray-800 rounded-lg shadow-lg p-5 flex justify-between items-center mb-8">
        <Navigation />
        <div className="flex items-center gap-4">
          <AiOutlineSearch size={20} className="text-gray-400 hover:text-yellow-500" />
          <AiOutlineShoppingCart size={20} className="text-gray-400 hover:text-yellow-500" />
          <Link to="/signup" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:text-yellow-500">
            Sign up
          </Link>
        </div>
      </div>
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Verify email</h2>
          <p className="mb-6 text-gray-500">
            A verification code has been sent to you. Enter the code below.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center mb-6">
              {code.map((data, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    className="w-12 h-12 m-1 text-center border border-gray-700 bg-gray-900 rounded text-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                );
              })}
            </div>
            <button type="submit" className="w-full py-2 bg-yellow-500 text-black font-semibold rounded">
              Verify email
            </button>
          </form>
          <div className="flex justify-between mt-4">
            <Link to="/login" className="text-gray-400 hover:underline">
              ← Back to login
            </Link>
            <button className="text-cyan-500 gap-1 flex hover:underline">
              <AiOutlineClockCircle size={20} className="text-cyan-500 hover:text-yellow-500" />Resend it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
