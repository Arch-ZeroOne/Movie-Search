import React from "react";

const Searchbar = () => {
  return (
    <div className="text-white w-[100%] flex items-center mt-10">
      <input
        type="text"
        placeholder="Search a movie or a TV show"
        className="bg-[#1F2937] w-[80%] mr-auto ml-auto p-3 rounded-lg outline-none text-[1.3rem]"
      />
    </div>
  );
};

export default Searchbar;
