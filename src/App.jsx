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
import useLocalStorage from "./components/useLocalStorage";



const url = "https://www.omdbapi.com/?i=tt3896198&apikey=b1cf3638&s=";


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useLocalStorage("searchValue",RandomMovie());
  const [currentPage, setCurrentPage] = useState(1);
  const [success, setSuccess] = useState(true);
  const [pageDisabled, setPageDisabled] = useState(false);  

  useEffect(() => {
    const getData = async (search, page) => {
      setLoading(true);
      const response = await fetch(url + search + "&page=" + page);
      const res = await response.json();
      res.Response === "True" ? setSuccess(true) : setSuccess(false);
      setData(res.Search);
      setPageDisabled(false);
      if (parseInt(res.totalResults) <= 10) {
        setPageDisabled(true);
      }
      setLoading(false);
    };
    getData(searchValue, currentPage);
  }, [currentPage, searchValue]);

  const handleSearch = (value) => {
    let sval = value.trim();
    if( sval === ""){
      sval = RandomMovie();
    }
    setSearchValue(sval);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gradient-to-r h-fit from-indigo-500 via-purple-500 to-pink-500">
      <Header />
      <SearchBar onSearch={handleSearch} searchValue={ searchValue} />
      {success ? <CardStack data={data} loading={loading} /> : <MovieNotFound setPageDisabled={ setPageDisabled} />}
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        pageDisabled={pageDisabled}
      />
      <Footer/>
    </div>
  );
};

export default App;
