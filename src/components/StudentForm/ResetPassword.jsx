// src/components/ResetPassword.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import Navigation from "./Navigation";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email submitted:", email);
    navigate("/resendemail");
  };

  return (
    <div className="min-h-screen mb-8 bg-gray-900 text-white">
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
          <Link
            to="/signup"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:text-yellow-500"
          >
            Sign up
          </Link>
        </div>
      </div>
      <div className="rounded-lg shadow-lg p-28 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-4">Reset your password</h2>
          <p className="mb-6 text-gray-500">
            Have no fear. We'll email you instructions to reset your password.
            If you don't have access to your email we can try account recovery.
          </p>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Email Address *</label>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-700 text-white"
              placeholder="youremailaddress@gmail.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 text-black font-semibold rounded mt-4"
          >
            Reset Password
          </button>
          <div className="mt-4">
            <Link to="/login" className="text-gray-400 hover:underline">
              ← Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
