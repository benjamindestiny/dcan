import React from "react";
import Navbar from "./components/Navbar.jsx";
import HeroCarousel from "./components/HeroCarousel.jsx";
import ShopByCategory from "./components/ShopByCategory.jsx";
import BestSellers from "./components/BestSellers.jsx"
import BestSellersInItems from "./components/BestSellersInItems.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [searchFunc, setSearchFunc] = React.useState("");
  return (
    <div className="bg-[#e3e6e6] min-h-screen">
      <Navbar searchFunc={searchFunc} setSearchFunc={setSearchFunc} />
      <HeroCarousel searchFunc={searchFunc} />
      <ShopByCategory searchFunc={searchFunc} />
      <BestSellers searchFunc={searchFunc}/>
      <BestSellersInItems searchFunc={searchFunc} />
      <Footer />
    </div>
  );
};

export default App;
