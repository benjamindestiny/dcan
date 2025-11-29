import React from "react";

const BestSellers = () => {
  const products = [
    {
      name: "Kitchen Essentials",
      image:
        "https://images.unsplash.com/photo-1606813909355-c118f3c16c25?auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      price: "$49.99",
    },
    {
      name: "Fashion & Style",
      image:
        "https://images.unsplash.com/photo-1612423284934-d4f9aaae2d4f?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      price: "$79.99",
    },
    {
      name: "Smartphone",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      rating: 4.2,
      price: "$499.99",
    },
    {
      name: "Technology Gadgets",
      image:
        "https://images.unsplash.com/photo-1555617981-3e1e6e72dc2a?auto=format&fit=crop&w=800&q=80",
      rating: 5,
      price: "$129.99",
    },
    {
      name: "Headphones",
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80",
      rating: 3.9,
      price: "$89.99",
    },
    {
      name: "Toys & Games",
      image:
        "https://images.unsplash.com/photo-1611309454921-16a6c0f4e6aa?auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      price: "$24.99",
    },
    {
      name: "Phones",
      image:
        "https://images.unsplash.com/photo-1580910051073-22a94f7a7c1a?auto=format&fit=crop&w=800&q=80",
      rating: 4.1,
      price: "$399.99",
    },
    {
      name: "Watches",
      image:
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
      rating: 5,
      price: "$199.99",
    },
    {
      name: "Books",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      rating: 3.3,
      price: "$14.99",
    },
    {
      name: "Beauty & Care Products",
      image:
        "https://images.unsplash.com/photo-1619454016518-697bc231e8e4?auto=format&fit=crop&w=800&q=80",
      rating: 4,
      price: "$29.99",
    },
    {
      name: "Smart Home Devices",
      image:
        "https://images.unsplash.com/photo-1581093588401-22c9e3a142f8?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      price: "$149.99",
    },
    {
      name: "Gaming Consoles",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      rating: 5,
      price: "$499.99",
    },
    {
      name: "Fitness Equipment",
      image:
        "https://images.unsplash.com/photo-1599058918143-38e9efae7dfd?auto=format&fit=crop&w=800&q=80",
      rating: 4.4,
      price: "$159.99",
    },
    {
      name: "Laptops & PCs",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      price: "$899.99",
    },
    {
      name: "Furniture & Decor",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      price: "$349.99",
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

              <p className="text-blue-600 font-bold mb-2">{product.price}</p>

              <div className="flex items-center mb-3">
                <span className="text-yellow-400 text-lg">
                  {"★".repeat(Math.floor(product.rating))}
                </span>
                <span className="text-gray-300 text-lg">
                  {"☆".repeat(5 - Math.floor(product.rating))}
                </span>
                <span className="text-sm text-gray-600 ml-1">
                  ({product.rating})
                </span>
              </div>

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
