import React from "react";
import CategoryCard from "./CategoryCard";

const ShopByCategory = () => {
  const categories = [
    {
      title: "Electronics",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=60",
      linkText: "Shop now",
    },
    {
      title: "Fashion",
      image:
        "https://images.unsplash.com/photo-1520975918318-3e05a46e93f2?auto=format&fit=crop&w=800&q=60",
      linkText: "Explore styles",
    },
    {
      title: "Beauty & Care",
      image:
        "https://images.unsplash.com/photo-1500839941678-aae14dbfae9a?auto=format&fit=crop&w=800&q=60",
      linkText: "Discover products",
    },
    {
      title: "Home & Kitchen",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      linkText: "Upgrade your home",
    },
  ];

  return (
    <div className="bg-[#e3e6e6] py-10 px-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Shop by Category</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <CategoryCard
            key={index}
            title={cat.title}
            image={cat.image}
            linkText={cat.linkText}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
