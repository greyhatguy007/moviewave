import React, { useState, useEffect } from "react";

const Card = ({ movie }) => {
  const [success, setSuccess] = useState(false);
  const [detailsEnabled, setDetailsEnabled] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [rates, setRates] = useState(null);

  const { Title, Year, Type, Poster, imdbID } = movie;

  const getMovieDetails = async (imdbID) => {
    const response = await fetch(
      `https://www.omdbapi.com/?y=&plot=full&r=json&apikey=c032e2d7&i=${imdbID}`
    );
    const res = await response.json();
    setRates(res.Ratings);
    if (res.Response === "True") {
      setMovieDetails(res);
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  useEffect(() => {
    if (detailsEnabled) {
      getMovieDetails(imdbID);
    }
  }, [detailsEnabled, imdbID]);

  return (
    <div
      className=""
      onClick={() => setDetailsEnabled(!detailsEnabled)}
      // onMouseEnter={() => setDetailsEnabled(true)}
      // onMouseLeave={() => setDetailsEnabled(false)}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-[11/12] =duration-300 md:hover:shadow-2xl md:hover:shadow-black transform transition-transform md:hover:scale-105">
        {success && detailsEnabled && movieDetails ? (
          <div>
            {movieDetails.Poster !== "N/A" ? (
              <img
                src={movieDetails.Poster}
                alt={Title}
                className="w-full h-[105] object-cover"
              />
            ) : (
              <img
                src="https://greyhatguy007.github.io/moviewave/noImage.png"
                alt="Not Found"
                className="w-full h-1/4 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{Title}</h3>
              <p className="text-gray-500 text-sm mb-2">{Year}</p>
              <p className="text-gray-500 text-sm">{Type}</p>
              {/* Display additional movie details */}
              <p className="my-1"> Genre : {movieDetails.Genre}</p>
              <p className="my-1"> Rating : {movieDetails.Rated}</p>
              <p className="my-1"> Languages : {movieDetails.Language}</p>
              <br />
              <p className="font-semibold">
                {" "}
                IMDb : {movieDetails.imdbRating}/10
              </p>

              {rates.map((rate) => (
                <p className="font-semibold" key={rate.Source}>
                  {rate.Source} : {rate.Value}
                </p>
              ))}

              <br />
              <p className="text-gray-700 text-base">{movieDetails.Plot}</p>
              <p className="text-gray-700 text-base">
                Director: {movieDetails.Director}
              </p>
              <br />
              <p className="my-2"> Awards : {movieDetails.Awards}</p>
              <p className="my-2"> BoxOffice : {movieDetails.BoxOffice}</p>
              {/* Add more movie details as desired */}
              <br />

              <a className="my-1 block text-blue-500"
                href={`https://www.primevideo.com/search/ref=atv_nb_sug?ie=UTF8&phrase=${Title.replace(" ","+")}`}
              >
                Search on Amazon Prime
              </a>
              
              <a className="my-1 block text-blue-500" href={`https://www.netflix.com/`}>
                Search on Netflix
              </a>
            </div>
          </div>
        ) : (
          <div>
            {Poster !== "N/A" ? (
              <img
                src={Poster}
                alt={Title}
                className="w-full h-[105] object-cover"
              />
            ) : (
              <img
                src="https://greyhatguy007.github.io/moviewave/noImage.png"
                alt="Not Found"
                className="w-full h-[105] object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{Title}</h3>
              <p className="text-gray-500 text-sm mb-2">{Year}</p>
              <p className="text-gray-500 text-sm">{Type}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
