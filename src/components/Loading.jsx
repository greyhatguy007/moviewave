import React from "react";

const Loading = () => {
  return (
      <div className="flex flex-col items-center h-screen">
          <div className="pt-48 pb-8">
              <p className="text-3xl md:text-6xl">Loading...</p>
          </div>
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-black"></div>
      </div>
    </div>
  );
};

export default Loading;
