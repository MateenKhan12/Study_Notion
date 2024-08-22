// src/components/ResetPassword.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"; 
import Navigation from "./Navigation";

function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const isPasswordValid = () => {
    return (
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^a-zA-Z0-9]/.test(password)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Password reset successfully");
    navigate("/passwordcreated");
    setTimeout(() => {
      navigate("/resetcomplete"); // After 1 second, navigate to the 'passwordcreated' page
    }, 1000);
  };

  return (
    <div className="min-h-screen mb-8  bg-gray-900 text-white">
      <div className="bg-gray-800 rounded-lg shadow-lg p-5 flex justify-between items-center mb-8">
        <Navigation />
        <div className="flex  items-center gap-4">
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
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        
        <h2 className="text-2xl font-bold mb-4">Choose new password</h2>
        <p className="mb-6 text-gray-500">
          Almost done. Enter your new password and you're all set.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">New password *</label>
            <input
              type="password"
              value={password}
              onChange={handleChangePassword}
              className="w-full p-2 bg-gray-700 text-white rounded"
              placeholder="New password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Confirm new password *</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
              className="w-full p-2 bg-gray-700 text-white rounded"
              placeholder="Confirm new password"
              required
            />
          </div>
          <div className="mb-6  text-sm">
            <p className={`flex items-center ${/[a-z]/.test(password) ? "text-green-400" : "text-gray-500"}`}>
              <span className="mr-2">•</span> one lowercase character
            </p>
            <p className={`flex items-center ${/[A-Z]/.test(password) ? "text-green-400" : "text-gray-500"}`}>
              <span className="mr-2">•</span> one uppercase character
            </p>
            <p className={`flex items-center ${/[^a-zA-Z0-9]/.test(password) ? "text-green-400" : "text-gray-500"}`}>
              <span className="mr-2">•</span> one special character
            </p>
            <p className={`flex items-center ${/[0-9]/.test(password) ? "text-green-400" : "text-gray-500"}`}>
              <span className="mr-2">•</span> one number
            </p>
            <p className={`flex items-center ${password.length >= 8 ? "text-green-400" : "text-gray-500"}`}>
              <span className="mr-2">•</span> 8 character minimum
            </p>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 text-black font-semibold rounded"
            disabled={!isPasswordValid() || password !== confirmPassword}
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
    </div>
  );
}

export default NewPassword;
