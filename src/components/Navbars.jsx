import React from "react";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <div className="text-white list-none font-[Jetbrains_Mono] flex items-center justify-around gap-auto text-[1.2rem] cursor-pointer max-sm:text-[2rempx] max-sm:flex max-sm:flex-col ">
      <Link to={"/"} className="max-sm:w-[100%] text-center">
        <li className="hover:bg-blue-600 rounded-xl p-2 w-[100%]">Top rated</li>
      </Link>
      <Link to={"Movies"} className="max-sm:w-[100%] text-center">
        <li className="hover:bg-blue-600 rounded-xl p-2"> Movies</li>
      </Link>
      <Link to={"Upcoming"} className="max-sm:w-[100%] text-center">
        <li className="hover:bg-blue-600 rounded-xl p-2">Upcoming Movies</li>
      </Link>
      <Link to={"Tvshows"} className="max-sm:w-[100%] text-center">
        <li className="hover:bg-blue-600 rounded-xl p-2">Tv shows</li>
      </Link>
    </div>
  );
};

export default Navbars;
