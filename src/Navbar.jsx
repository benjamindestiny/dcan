import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white flex items-center shadow-md px-8">
      {/* Logo */}
      <img
        src="/IMAGES/logo/Yellow_Orange_Illustration_Mart_Logo-removebg-preview.png"
        alt="logo"
        className="cursor-pointer h-30 w-35"
      />

      {/* Location Icon */}
      <img
        src="/IMAGES/logo/free-location-icon-2952-thumb-removebg-preview.png"
        alt="location"
        className="h-8 w-8 mx-4"
      />

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search Dcan"
          className="w-200 h-10 border border-gray-300 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 mx-1"
        />

        <img
          src="/IMAGES/logo/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector__1_-removebg-preview.png"
          alt="search"
          className="absolute bg-orange-500 right-1 cursor-pointer top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-md"
        />
      </div>

      {/* Flag English Icon */}
      <img
        src="/IMAGES/logo/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.png"
        alt="flag"
        className="h-5 w-7 mx-4"
      />

      {/* User Icon */}
      <img
        src="/IMAGES/logo/10-104902_simple-user-icon-user-icon-white-png-transparent-removebg-preview.png"
        alt="user"
        className="h-10 w-10 mx-4"
      />

      {/* Cart Icon */}
      <img
        src="/IMAGES/logo/pngtree-shopping-cart-logo-design-vector-png-image_16169123-removebg-preview.png"
        alt="cart"
        className="h-12 w-12 ml-2 mx-4"
      />
    </div>
  );
};

export default Navbar;
