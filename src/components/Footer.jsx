import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#232F3E] dark:bg-gray-900 text-white mt-16 pt-12 pb-6">

      {/* TOP SECTION: LINKS */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-lg mb-4">Get to Know Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition">About DCAN</li>
            <li className="hover:text-white transition">Careers</li>
            <li className="hover:text-white transition">Press Releases</li>
            <li className="hover:text-white transition">Our Services</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-lg mb-4">Make Money</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition">Sell Products</li>
            <li className="hover:text-white transition">Become an Affiliate</li>
            <li className="hover:text-white transition">Advertise with Us</li>
            <li className="hover:text-white transition">Partner With DCAN</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-lg mb-4">Customer Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition">Your Orders</li>
            <li className="hover:text-white transition">Returns & Refunds</li>
            <li className="hover:text-white transition">Shipping Rates</li>
            <li className="hover:text-white transition">Help Center</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact & Socials</h3>
          <ul className="space-y-2 text-gray-300 mb-4">
            <li>Email: support@dcan.com</li>
            <li>Phone: +234 800 000 0000</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-blue-400 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-400 transition" />
            <FaTwitter className="cursor-pointer hover:text-blue-300 transition" />
            <FaTiktok className="cursor-pointer hover:text-gray-300 transition" />
          </div>
        </div>
      </div>

      {/* LINE */}
      <div className="border-t border-gray-600 my-8"></div>

      {/* BOTTOM SECTION */}
      <div className="text-center text-gray-400">
        <p>© {new Date().getFullYear()} DCAN Marketplace. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
