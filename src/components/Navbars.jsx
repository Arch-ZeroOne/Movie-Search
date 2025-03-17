import React from "react";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <div className="text-white list-none font-[Jetbrains_Mono] flex items-center justify-center gap-[10rem] text-[1.2rem] cursor-pointer">
      <Link to={"/"} className="hover:text0">
        Top rated
      </Link>
      <Link to={"Toprated"}>Movies</Link>
      <Link to={"Upcoming"}>Upcoming Movies</Link>
      <Link to={"Tvshows"}>Tv shows</Link>
    </div>
  );
};

export default Navbars;
