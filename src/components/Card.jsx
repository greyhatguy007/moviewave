import React from "react";

const Card = ({ movie }) => {
  const { Title, Year, Type, Poster } = movie;

  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-[11/12] =duration-300 md:hover:shadow-2xl md:hover:shadow-black transform transition-transform md:hover:scale-105">
        {Poster !== "N/A" ? (
          <img
            src={Poster}
            alt={Title}
            className="w-full h-[105] object-cover"
          />
        ) : (
          <img
            src="noImage.png"
            alt="Not Found"
            className="w-full h-1/4 object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{Title}</h3>
          <p className="text-gray-500 text-sm mb-2">{Year}</p>
          <p className="text-gray-500 text-sm">{Type}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
