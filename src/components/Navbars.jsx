import React from "react";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <div className="text-white list-none font-mono text-sm flex-col  flex items-center justify-around md:max-lg:flex-row md:max-lg:text-md md:max-lg:gap-auto lg:flex-row gap-auto w-[80%]">
      <Link to={"/"} className="max-sm:w-full text-center">
        <li className="hover:bg-blue-600 rounded-xl p-2 w-full">Top rated</li>
      </Link>
      <Link to={"Movies"} className="max-sm:w-full text-center">
        <li className="hover:bg-blue-600 rounded-xl p-2"> Movies</li>
      </Link>
      <Link to={"Upcoming"} className="max-sm:w-full text-center">
        <li className="hover:bg-blue-600 rounded-xl p-2">Upcoming Movies</li>
      </Link>
      <Link to={"Tvshows"} className="max-sm:w-full text-center">
        <li className="hover:bg-blue-600 rounded-xl p-2">Tv shows</li>
      </Link>
    </div>
  );
};

export default Navbars;
