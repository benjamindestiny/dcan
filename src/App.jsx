import React from "react";
import Navbar from "./components/Navbar.jsx";
import HeroCarousel from "./components/HeroCarousel.jsx";
import ShopByCategory from "./components/ShopByCategory.jsx";
import BestSellers from "./components/BestSellers.jsx"

const App = () => {
  return (
    <div className="bg-[#e3e6e6] min-h-screen">
      <Navbar />
      <HeroCarousel />
      <ShopByCategory />
      <BestSellers />
    </div>
  );
};

export default App;
