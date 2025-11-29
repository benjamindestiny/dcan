import React from "react";

const sections = [
  {
    title: "Best Sellers in Clothing, Shoes & Jewelry",
    products: [
      { name: "Men’s Classic Sneakers", image: "https://source.unsplash.com/800x800/?sneakers", price: "$49.99", rating: 4.7 },
      { name: "Women’s Summer Dress", image: "https://source.unsplash.com/800x800/?summer-dress", price: "$39.99", rating: 4.5 },
      { name: "Luxury Wrist Watch", image: "https://source.unsplash.com/800x800/?wristwatch", price: "$120.00", rating: 4.8 },
      { name: "Leather Handbag", image: "https://source.unsplash.com/800x800/?handbag", price: "$89.99", rating: 4.6 },
      // ... your other products
    ]
  },
  {
    title: "Best Sellers in Electronics",
    products: [
      { name: "Smartphone", image: "https://source.unsplash.com/800x800/?smartphone", price: "$599.00", rating: 4.8 },
      { name: "Wireless Earbuds", image: "https://source.unsplash.com/800x800/?earbuds", price: "$129.00", rating: 4.7 },
      // ...
    ]
  },
  {
    title: "Best Sellers in Beauty & Personal Care",
    products: [
      { name: "Skincare Set", image: "https://source.unsplash.com/800x800/?skincare", price: "$59.99", rating: 4.8 },
      // ...
    ]
  }
];

const BestSellersInItems = () => {
  return (
    <div className="bg-[#f9f9f9] py-12 px-6">
      {sections.map((section, i) => (
        <div key={i} className="mb-10">
          <h2 className="text-2xl font-bold mb-5">{section.title}</h2>

          <div className="flex gap-5 overflow-x-auto pb-4">
            {section.products.map((p, i) => (
              <div key={i} className="min-w-[220px] bg-white rounded-lg shadow">
                <img src={p.image} className="w-full h-56 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-blue-600 font-bold">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// 🔥 Expose all products as 1 array so App can search through them
BestSellersInItems.getAllProducts = () => {
  return sections.flatMap((section) => section.products);
};

export default BestSellersInItems;
