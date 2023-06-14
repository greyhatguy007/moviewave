import React from "react";
import Card from "./Card";
import Loading from "./Loading";

import Aos from "aos";
import "aos/dist/aos.css"

Aos.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init", 
  animatedClassName: "aos-animate", 
  useClassNames: false,
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99, 
  offset: 120, 
  delay: 50, 
  duration: 600, 
  easing: "ease", 
  once: false, 
  mirror: false, 
  anchorPlacement: "top-bottom",
});

const CardStack = ({ data, loading }) => {
  if (loading) { 
    return <Loading/>
  }
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
