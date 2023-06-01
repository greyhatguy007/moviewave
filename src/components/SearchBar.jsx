import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <div className="flex justify-center pb-3">
      <div className="bg-white rounded-lg px-3 ">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search Movie"
          className="mx-4 px-1 py-1  focus:outline-none md:py-2 lg:text-3xl lg-py-3"
        />
        <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white px-2 rounded-md md:px-3 md:py-1 lg:py-1.5 lg:mr-2">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
