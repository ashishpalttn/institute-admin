import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import axios from "axios";

const Header = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        { withCredentials: true }
      );
      alert("You have been logged out successfully");
      // Redirect to login page or another route
      window.location.href = "http://localhost:3000/login";
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Logout failed");
    }
  };

  return (
    <header className="bg-sky-700 text-white p-4 shadow-md">
      <div className=" flex justify-between items-center">
        {/* Menu Icon for Mobile */}
        <button className="md:hidden lg:hidden p-2" onClick={toggleSidebar}>
          <RiMenuFill size={30} />
        </button>

        {/* Institute Admin Title */}
        <div className=" text-xl font-bold lg:text-2xl">Institute Admin</div>

        {/* Search and Profile Section */}
        <div className="flex items-center space-x-4">
          {/* Search Input (Hidden on Small Screens) */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block px-4 py-2 rounded-md bg-sky-600 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          {/* Profile Picture with Dropdown */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2">
                <a
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Profile
                </a>
                <button onClick={handleLogout}>
                  {" "}
                  <a className="block px-4 py-2 hover:bg-gray-200">Logout</a>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
