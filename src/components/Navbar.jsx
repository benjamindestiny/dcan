import React, { useState } from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaMoon,
  FaSun,
  FaBars,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import logo from "../assets/logo.png";

const Navbar = ({searchFunc, setSearchFunc}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-[#131921] h-35 dark:bg-gray-900 text-white shadow-md">
      <div className="flex items-center pb-30 justify-between px-6 py-4">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-6">
          {/* Mobile Menu */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>

          {/* Bigger Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-32 cursor-pointer transition-transform duration-200 hover:scale-110 hover:brightness-110"
          />

          {/* Location */}
          <div className="hidden md:flex items-center gap-2 cursor-pointer">
            <MdLocationOn className="text-xl" />
            <div>
              <p className="text-xs text-gray-300">Deliver to</p>
              <h4 className="text-sm font-semibold">Nigeria</h4>
            </div>
          </div>
        </div>

        {/* MIDDLE SEARCH BAR */}
        <div className="hidden md:flex flex-1 mx-6 max-w-3xl">
          <input
            type="text"
            placeholder="Search DCAN..."
            className="flex-1 p-2 rounded-l-md shadow-black outline-none text-black bg-white hover:outline-1 focus:outline-none focus:ring-2 focus:ring-[#febd69]"
            value={searchFunc}
            onChange={(e) => setSearchFunc(e.target.value)}
          />
          <button className="bg-[#febd69] cursor-pointer hover:bg-[#f3a847] p-3 rounded-r-md transition">
            <FaSearch className="text-black text-lg" />
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-6">
          {/* Language */}
          <div className="hidden md:flex flex-col cursor-pointer">
            <span className="text-xs text-gray-300">Language</span>
            <select className="bg-transparent text-white text-sm cursor-pointer outline-none">
              <option className="text-black">EN</option>
              <option className="text-black">Spanish</option>
              <option className="text-black">Chinese</option>
              <option className="text-black">Portuguese</option>
            </select>
          </div>

          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="bg-gray-700 cursor-pointer hover:bg-gray-600 p-2 rounded-full transition-all duration-300"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 text-xl animate-spin" />
            ) : (
              <FaMoon className="text-white text-xl" />
            )}
          </button>

          {/* Account */}
          <div className="hidden md:block text-left cursor-pointer">
            <p className="text-xs text-gray-300">Hello, Sign in</p>
            <h4 className="text-sm font-semibold">Account & Lists</h4>
          </div>

          {/* Orders */}
          <div className="hidden md:block text-left cursor-pointer">
            <p className="text-xs text-gray-300">Returns</p>
            <h4 className="text-sm font-semibold">& Orders</h4>
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-2xl hover:scale-110 hover:text-[#febd69] transition" />
            <span className="absolute -top-2 -right-2 bg-[#f08804] text-black text-xs font-bold rounded-full px-1.5">
              0
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-[#232f3e] dark:bg-gray-800 p-4 space-y-4 animate-slideDown">
          <input
            type="text"
            placeholder="Search DCAN..."
            className="w-full p-2 rounded-md text-black"
          />

          <button className="w-full bg-[#f08804] text-black py-2 rounded-md">
            Sign In
          </button>

          <div className="border-t border-gray-600 pt-3">
            <p className="text-gray-300">Categories</p>
            <ul className="text-white space-y-2 mt-2">
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home</li>
              <li>Beauty</li>
              <li>Kitchen</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
