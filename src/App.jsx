import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CardStack from "./components/CardStack";
import Pagination from "./components/Pagination";
import MovieNotFound from "./components/MovieNotFound";
import RandomMovie from "./components/RandomMovie";
import Footer from "./components/Footer";


const url = "https://www.omdbapi.com/?i=tt3896198&apikey=b1cf3638&s=";


const App = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState(RandomMovie());
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
    setSearchValue(value.trim());
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
      />
      <Footer/>
    </div>
  );
};

export default App;
