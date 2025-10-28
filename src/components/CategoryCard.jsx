import React from "react";

const CategoryCard = ({ title, image, linkText }) => {
  return (
    <div className="bg-white rounded-md shadow-sm hover:shadow-md p-4 transition-transform duration-200 hover:scale-105 cursor-pointer">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <p className="text-sm text-blue-600 hover:underline">{linkText}</p>
    </div>
  );
};

export default CategoryCard;
