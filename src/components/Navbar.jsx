import React from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-[#131921] text-white px-6 py-3">
      {/* LEFT - Logo + Location */}
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="DCAN Logo"
          className="w-20 cursor-pointer transition-transform duration-200 hover:scale-105 hover:brightness-110"
        />

        <div className="flex items-center gap-1 cursor-pointer">
          <MdLocationOn className="text-white text-lg" />
          <div>
            <p className="text-xs text-gray-300">Deliver to</p>
            <h4 className="text-sm font-semibold">Nigeria</h4>
          </div>
        </div>
      </div>

      {/* MIDDLE - Search Bar */}
      <div className="flex flex-1 mx-8 max-w-2xl">
        <input
          type="text"
          placeholder="Search DCAN..."
          className="flex-1 p-2 rounded-l-md outline-none  text-black bg-white"
        />
        <button className="bg-[#febd69] hover:bg-[#f3a847] p-2 px-4 rounded-r-md">
          <FaSearch className="text-black text-lg" />
        </button>
      </div>

      {/* RIGHT - Sign Up, Orders, Cart */}
      <div className="flex items-center gap-6">
        {/* Sign Up Button */}
        <button className="bg-[#f08804] hover:bg-[#febd69] text-black font-semibold cursor-pointer px-4 py-1.5 rounded-md transition duration-200">
          Sign In
        </button>

        {/* Orders Section */}
        <div className="cursor-pointer text-left">
          <p className="text-xs text-gray-300">Returns</p>
          <h4 className="text-sm font-semibold">& Orders</h4>
        </div>

        {/* Cart Icon */}
        <div className="relative cursor-pointer flex items-center">
          <FaShoppingCart className="text-2xl transition-transform duration-200 hover:scale-110 hover:text-[#febd69]" />
          <span className="absolute -top-2 -right-2 bg-[#f08804] text-black text-xs font-bold rounded-full px-1.5">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
