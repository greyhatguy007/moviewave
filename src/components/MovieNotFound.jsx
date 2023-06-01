import React from "react";

const MovieNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <p className="text-gray-700 mt-7 my-5 text-6xl md:text-9xl">OOPS !</p>
      <p className="text-gray-700 mt-3 text-2xl md:text-4xl">No Matches Found</p>
      <p className="text-gray-700 mt-4 text-xl md:text-3xl">
        You have Reached the end of Search
      </p>
      <p className="text-gray-700 my-8 text-3xl"></p>

      <p className="text-gray-700 text-4xl md:text-6xl">Try another Search</p>
    </div>
  );
};

export default MovieNotFound;
