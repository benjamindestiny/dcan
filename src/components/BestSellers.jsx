import React from "react";

const BestSellers = () => {
  const products = [
    {
      name: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1601050690597-2f66f89f10b2?auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
    },
    {
      name: "Fashion & Style",
      image:
        "https://images.unsplash.com/photo-1623251848573-6c9cf59e65b2?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
    },
    {
      name: "Smartphone",
      image:
        "https://images.unsplash.com/photo-1582719471137-c3967ffb1b68?auto=format&fit=crop&w=800&q=80",
      rating: 4.2,
    },
    {
      name: "Technology Gadgets",
      image:
        "https://images.unsplash.com/photo-1606813902789-9f5b37f47b09?auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
    {
      name: "HeadPhones",
      image:
        "https://images.unsplash.com/photo-1629904853693-89f4e8d6a7a3?auto=format&fit=crop&w=800&q=80",
      rating: 3.9,
    },
    {
      name: "Toys & Games",
      image:
        "https://images.unsplash.com/photo-1606813902789-9f5b37f47b09?auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
    },
    {
      name: "Phones",
      image:
        "https://images.unsplash.com/photo-1606813902789-9f5b37f47b09?auto=format&fit=crop&w=800&q=80",
      rating: 4.1,
    },
    {
      name: "Watches",
      image:
        "https://images.unsplash.com/photo-1606813902789-9f5b37f47b09?auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
    {
      name: "Books",
      image:
        "https://images.unsplash.com/photo-1606813902789-9f5b37f47b09?auto=format&fit=crop&w=800&q=80",
      rating: 3.3,
    },
    {
      name: "Beauty & Care Products",
      image:
        "https://images.unsplash.com/photo-1606813902789-9f5b37f47b09?auto=format&fit=crop&w=800&q=80",
      rating: 4,
    },
  ];

  return (
    <div className="bg-[#f7f7f7] py-10 px-6">
      <h2 className="text-5xl font-bold mb-8 text-center text-gray-800">
        Best Sellers
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">
                {product.name}
              </h3>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-lg">
                  {"★".repeat(Math.floor(product.rating))}
                </span>
                <span className="text-gray-400 text-lg">
                  {"☆".repeat(5 - Math.floor(product.rating))}
                </span>
                <span className="text-sm text-gray-600 ml-1">
                  ({product.rating})
                </span>
              </div>
              <p className="text-lg font-bold text-gray-900 mb-3">
                {product.price}
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm cursor-pointer font-medium transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
