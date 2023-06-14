import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const DetailedCard = () => {
  const { imdbID } = useParams();
  const [detailsEnabled, setDetailsEnabled] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const [rates, setRates] = useState([]);

  const navigate = useNavigate();

  const getMovieDetails = async (imdbID) => {
    const response = await fetch(
      `https://www.omdbapi.com/?y=&plot=full&r=json&apikey=c032e2d7&i=${imdbID}`
    );
    const res = await response.json();
    setMovieDetails(res);
    setRates(res.Ratings);
  };

  useEffect(() => {
    getMovieDetails(imdbID);
  }, [imdbID]);

  return (
    <div
      className="flex flex-col items-center justify-center bg-gradient-to-r h-fit from-indigo-500 via-purple-500 to-pink-500 py-7 pb-40"
      onClick={() => setDetailsEnabled(!detailsEnabled)}
      // onMouseEnter={() => setDetailsEnabled(true)}
      // onMouseLeave={() => setDetailsEnabled(false)}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-[11/12]  w-10/12 md:w-6/12 p-7 ">
        <div>
          {movieDetails.Poster !== "N/A" ? (
            <img
              loading="lazy"
              src={movieDetails.Poster}
              alt={movieDetails.Title}
              className="w-full h-3/5 object-fill"
            />
          ) : (
            <img
              src="https://greyhatguy007.github.io/moviewave/noImage.png"
              alt="Not Found"
              className="w-full h-3/5 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{movieDetails.Title}</h3>
            <p className="text-gray-500 text-sm mb-2">{movieDetails.Year}</p>
            <p className="text-gray-500 text-sm">{movieDetails.Type}</p>
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
          </div>
        </div>
      </div>
      <button
        className="bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95 my-11"
        onClick={() => navigate(-1)}
      >
        Back to List
      </button>
    </div>
  );
};

export default DetailedCard;
