import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CardStack from "./components/CardStack";
import MovieNotFound from "./components/MovieNotFound";

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=b1cf3638&s=";

const imdbNums = [
  "tt2975590",
  "tt27550022",
  "tt5433140",
  "tt0944947",
  "tt10872600",
  "tt4633694",
  "tt10919420",
  "tt1475582",
  "tt1515091",
];

const App = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("Avengers");
  const [currentPage, setCurrentPage] = useState(1);
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    const getData = async (search, page) => {
      const response = await fetch(url + search + "&page=" + page);
      const res = await response.json();
      res.Response === "True" ? setSuccess(true) : setSuccess(false); 
      setData(res.Search);
    };
    getData(searchValue, currentPage);
  }, [currentPage, searchValue]);

  const handleSearch = (value) => {
    setSearchValue(value);
    setCurrentPage(1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  console.log(data);
  console.log(success);


  return (
    <div className="bg-gradient-to-r h-fit from-indigo-500 via-purple-500 to-pink-500">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {success ? <CardStack data={data} /> : <MovieNotFound />}

      <div className="flex justify-center">
        <button
          className="py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none"
          onClick={goToPreviousPage}
        >
          Previous
        </button>
        <div className="py-2 px-4 border border-gray-300">{currentPage}</div>
        <button
          className="py-2 px-4 rounded-r-lg border border-gray-300 focus:outline-none"
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
