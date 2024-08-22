import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [activeLink, setActiveLink] = useState("Catalog");
  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="bg-gray-800  flex justify-between items-center ">
      <div className="text-white ">
        <h1 className="w-full text-3xl font-bold px-20 hover:text-yellow-500">
          StudyNotion
        </h1>
      </div>
      <div className="text-gray-400 px-64 space-x-4">
        <Link
          to="/home"
          className={`hover:text-yellow-500 ${
            activeLink === "Home" ? "text-yellow-500" : ""
          }`}
          onClick={() => handleClick("Home")}
        >
          Home
        </Link>
        <Link
          to="/catalog"
          className={`hover:text-yellow-500 ${
            activeLink === "Catalog" ? "text-yellow-500" : ""
          }`}
          onClick={() => handleClick("Catalog")}
        >
          Catalog
        </Link>
        <Link
          to="/about"
          className={`hover:text-yellow-500 ${
            activeLink === "About" ? "text-yellow-500" : ""
          }`}
          onClick={() => handleClick("About")}
        >
          About us
        </Link>
        <Link
          to="/contact"
          className={`hover:text-yellow-500 ${
            activeLink === "Contact" ? "text-yellow-500" : ""
          }`}
          onClick={() => handleClick("Contact")}
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
