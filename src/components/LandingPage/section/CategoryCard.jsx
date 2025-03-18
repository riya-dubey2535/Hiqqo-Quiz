import React from "react";

export const CategoryCard = ({ title, description, icon, className }) => {
  return (
    <div
      className={`p-7 rounded-lg shadow-md ${className} flex justify-between flex-col `}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h2 className="text-2xl font-bold mb-2 text-center ">{title}</h2>{" "}
      <p className="text-gray-700 text-center m-4">{description}</p>
    </div>
  );
};
