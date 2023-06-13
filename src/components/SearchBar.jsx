import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.length >= 3) {
      onSearch(event.target.value); 
    }
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <div className="flex justify-center align-middle pb-3">
      <div className="bg-white rounded-xl px-3 ">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search Movies / Series"
          className="mx-4 px-1 py-2  focus:outline-none md:py-2 lg:py-4 lg:w-96 lg:text-xl bg-white"
        />
        <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white px-2 rounded-md md:px-3 md:py-1 ">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
