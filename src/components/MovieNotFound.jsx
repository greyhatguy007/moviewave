import React from "react";

const MovieNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-gray-700 my-8 text-8xl">No movies found.</p>
      
      <p className="text-gray-700 text-6xl">Try another Search</p>
    </div>
  );
};

export default MovieNotFound;
