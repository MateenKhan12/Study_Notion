import React, { useState } from "react";
import Navigation from "./Navigation";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

function ResendEmail() {
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
    // navigate("/passwordcreated");
    setTimeout(() => {
      navigate("/passwordcreated"); // After 1 second, navigate to the 'passwordcreated' page
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
      <div className="p-28 rounded-lg shadow-lg pr-32 ">
        <div className="ml-96  items-center pb-20 justify-center bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="p-5  ">
            <h2 className="text-2xl font-bold mb-4">Check email</h2>
            <p className="mb-6 text-gray-500">
              We have sent the reset email to youremailaccount@gmail.com
            </p>
          </div>

          <div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full py-2 bg-yellow-500 text-black font-semibold rounded mt-4"
            >
              Resend email
            </button>
          </div>
          <div className="mt-4">
            <Link to="/login" className="text-gray-400 hover:underline">
              ← Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResendEmail;
