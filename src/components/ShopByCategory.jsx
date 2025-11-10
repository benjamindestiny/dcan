import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopByCategory = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  const categories = [
    {
      title: "Electronics",
      image:
        "https://images.unsplash.com/photo-1510557880182-3d4d3c0b6d9f?auto=format&fit=crop&w=800&q=80",
      linkText: "Shop gadgets",
    },
    {
      title: "Fashion",
      image:
        "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=800&q=80",
      linkText: "Explore styles",
    },
    {
      title: "Home & Kitchen",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      linkText: "Upgrade your home",
    },
    {
      title: "Beauty & Care",
      image:
        "https://images.unsplash.com/photo-1500839941678-aae14dbfae9a?auto=format&fit=crop&w=800&q=80",
      linkText: "Discover products",
    },
    {
      title: "Toys & Games",
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31b?auto=format&fit=crop&w=800&q=80",
      linkText: "Playtime fun",
    },
    {
      title: "Books",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      linkText: "Start reading",
    },
    {
      title: "Groceries",
      image:
        "https://images.unsplash.com/photo-1606813909355-c118f3c16c25?auto=format&fit=crop&w=800&q=80",
      linkText: "Shop essentials",
    },
    {
      title: "Sports & Fitness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      linkText: "Stay active",
    },
  ];

  const bestSellers = [
    {
      title: "Smart Blender",
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1621939514649-1c8f4b86c2b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Modern Lamp",
      price: "$49.50",
      image:
        "https://images.unsplash.com/photo-1578898887932-ec2fbd3fe7e6?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cookware Set",
      price: "$129.99",
      image:
        "https://images.unsplash.com/photo-1601050690597-3b73a0a4b9a7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Coffee Maker",
      price: "$79.99",
      image:
        "https://images.unsplash.com/photo-1588763699414-2b7a4b20e30e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-[#e3e6e6] py-10 px-6">
      {/* Category Section */}
      <h1
        className="text-2xl font-bold mb-8 text-center"
        data-aos="fade-down"
      >
        Shop by Category
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div data-aos="fade-up" data-aos-delay={index * 100} key={index}>
            <CategoryCard
              title={cat.title}
              image={cat.image}
              linkText={cat.linkText}
            />
          </div>
        ))}
      </div>

      {/* Best Sellers Section */}
      <div className="mt-14">
        <h2
          className="text-2xl font-bold mb-6 text-center"
          data-aos="fade-up"
        >
          Best Sellers in Home & Kitchen
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {bestSellers.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-700 mt-2">{item.price}</p>
                <button className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
