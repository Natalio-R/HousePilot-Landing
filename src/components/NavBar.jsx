import React from "react";
import Logo from "../assets/Logo.png";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b-2 border-gray-200">
      <div className="px-6 py-4 lg:px-32 lg:py-6 flex items-center justify-between">
        <div className="flex items-center justify-center">
          <img src={Logo} className="w-12 h-12 mr-4" alt="House Pilot Logo" />
          <h2 className="text-3xl font-medium">House Pilot</h2>
        </div>
        <div className="block lg:hidden">
          <a href="/" className="flex flex-col gap-2">
            <div className="w-10 h-1 bg-black rounded-full"></div>
            <div className="w-10 h-1 bg-black rounded-full"></div>
            <div className="w-10 h-1 bg-black rounded-full"></div>
          </a>
        </div>
        <div className="hidden lg:block">
          <nav className="flex items-center justify-center gap-6">
            <ul className="flex items-center justify-center gap-4">
              <li className="px-4 py-2 text-lg text-gray-400 font-medium hover:text-black rounded-md cursor-pointer transition">
                <a href="/">Home</a>
              </li>
              <li className="px-4 py-2 text-lg text-gray-400 font-medium hover:text-black rounded-md cursor-pointer transition">
                <a href="#features">Features</a>
              </li>
              <li className="px-4 py-2 text-lg text-gray-400 font-medium hover:text-black rounded-md cursor-pointer transition">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="px-4 py-2 text-lg text-gray-400 font-medium hover:text-black rounded-md cursor-pointer transition">
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
            <button className="px-6 py-3 text-white text-lg font-medium bg-black hover:text-black hover:bg-white border-2 border-black rounded-lg cursor-pointer transition">
              Download
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
