import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
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
  );
};

export default Pagination;
