import React from "react";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <div className="text-white list-none font-[Jetbrains_Mono] flex items-center justify-center gap-[10rem] text-[1.2rem] cursor-pointer ">
      <Link to={"/"}>
        <li className="hover:bg-blue-600 rounded-xl p-2">Top rated</li>
      </Link>
      <Link to={"Movies"}>
        <li className="hover:bg-blue-600 rounded-xl p-2"> Movies</li>
      </Link>
      <Link to={"Upcoming"}>
        <li className="hover:bg-blue-600 rounded-xl p-2">Upcoming Movies</li>
      </Link>
      <Link to={"Tvshows"}>
        <li className="hover:bg-blue-600 rounded-xl p-2">Tv shows</li>
      </Link>
    </div>
  );
};

export default Navbars;
