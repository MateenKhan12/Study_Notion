import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen min-w-80   flex items-center justify-center  bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="text-gray-400 p-8  mb-40 mr-64 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="flex gap-4 ">
          <div className="mb-4">
            <label className="block  text-gray-400">First Name*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-2 p-2   bg-gray-700 rounded-md w-full"
              placeholder="Enter first name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Last Name*</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-2 p-2  bg-gray-700 rounded w-full"
              placeholder="Enter last name"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-400">Email Address*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 p-2  bg-gray-700 rounded w-full"
            placeholder="Enter email address"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400">Phone Number*</label>
          <div className="flex gap-5 mt-2">
            <select
              className="p-2  bg-gray-700 rounded-l w-18"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              required
            >
              <option value="+91">+91</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-2  bg-gray-700 rounded-r flex-1"
              placeholder="12345 67890"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-400">Create Password*</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-2 p-2  bg-gray-700 rounded w-full"
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400">Confirm Password*</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-2 p-2  bg-gray-700 rounded w-full"
            placeholder="Confirm Password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-white py-2 px-4 rounded w-full mt-4"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
