import React from "react";
import Card from "./Card";

const CardStack = ({ data }) => {
  if (data === "False") {
    return <p>No movies found.</p>;
  }
  return (
    <div className="container mx-auto py-8 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-10">
        {data.map((movie) => (
          <Card key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default CardStack;
