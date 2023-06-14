import React from "react";

const Pagination = ({
  pageDisabled,
  currentPage,
  onPageChange,
  goToPreviousPage,
  goToNextPage,
}) => {
  return (
    <div className="flex justify-center pt-9 pb-16 font-semibold ">
      <button
        className="py-2 px-4 rounded-l-full border border-gray-300  mx-3 w-40 md:hover:bg-white md:hover:text-black  shadow-black active:bg-white active:text-black disabled:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-gray-300 disabled:hover:text-gray-400"
        disabled={currentPage === 1}
        onClick={goToPreviousPage}
      >
        Previous Page
      </button>
      <div className="py-2 px-4 mx-3 border border-gray-300 rounded-md ">
        {currentPage}
      </div>
      <button
        className="py-2 px-4 rounded-r-full border border-gray-300 focus:outline-none mx-3 w-40 md:hover:bg-white md:hover:text-black  shadow-black active:bg-white active:text-black disabled:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-gray-300 disabled:hover:text-gray-400"
        onClick={goToNextPage}
        disabled={pageDisabled}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
