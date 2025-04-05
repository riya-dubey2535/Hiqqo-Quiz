import React, { useContext } from "react";
import { FaBook, FaChartBar, FaSignOutAlt, FaPlus } from "react-icons/fa";
import { DataProvider } from "../../App";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ onCreateQuiz }) => {
  const { page, setPage, setToken } = useContext(DataProvider);
  const nav = useNavigate();
  return (
    <aside className="w-64 bg-gray-100 h-[95%] p-5 flex flex-col justify-between fixed">
      <div>
        <button
          onClick={() => onCreateQuiz(true)}
          className="flex btn items-center justify-center bg-indigo-600 text-white w-full py-2 mt-5 rounded-md"
        >
          <FaPlus className="mr-2" /> Create a quiz
        </button>

        <nav className="mt-5">
          <ul className="space-y-2">
            <li
              onClick={() => setPage("my-library")}
              className="flex items-center p-3 rounded-md cursor-pointer hover:bg-gray-200"
            >
              <FaBook className="mr-3 text-gray-600" /> My Library
            </li>
            <li
              onClick={() => setPage("reports")}
              className="flex items-center p-3 rounded-md cursor-pointer hover:bg-gray-200"
            >
              <FaChartBar className="mr-3 text-gray-600" /> Reports
            </li>
          </ul>
        </nav>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          nav("/login");
          setToken(null);
        }}
        className="flex items-center text-red-600 p-3"
      >
        <FaSignOutAlt className="mr-3" /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
