import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white  flex justify-center border-gray-100 p-4 w-1/2 mx-auto rounded-lg">
      <div className="flex items-center gap-2 justify-between w-1/2">
        {/* Search Bar - Icon only button with rounded input */}
        <div className="flex items-center space-x-2 w-full">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search quizzes, books..."
              className="w-full border border-gray-200 px-4 py-2 pl-10 rounded-full outline-none 
                        focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all
                        text-gray-700 placeholder-gray-400"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button
            className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 
                            transition-colors shadow-sm flex items-center justify-center"
          >
            <FaSearch />
          </button>
        </div>

        {/* User Profile - Simplified */}
        {/* <div className="flex items-center space-x-3 cursor-pointer">
          <FaUserCircle className="text-3xl text-indigo-600 hover:text-indigo-700 transition-colors" />
          <span className="font-medium text-gray-800">Jaya Kishori</span>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
