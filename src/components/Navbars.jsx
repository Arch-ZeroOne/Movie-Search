import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbars = () => {
  const location = useLocation();

  return (
    <div className="text-white list-none font-mono text-sm flex-col  flex items-center justify-around md:max-lg:flex-row md:max-lg:text-md md:max-lg:gap-auto lg:flex-row gap-auto w-[80%] sm:flex-row gap-3">
      <Link to={"/"} className="max-sm:w-full text-center">
        {location.pathname === "/" ? (
          <li className=" rounded-xl p-2 bg-blue-600">Top Rated</li>
        ) : (
          <li className="hover:bg-violet-800 rounded-xl p-2"> Top Rated</li>
        )}
      </Link>
      <Link to={"/Movies"} className="max-sm:w-full text-center">
        {location.pathname === "/Movies" ? (
          <li className=" rounded-xl p-2 bg-blue-600">Movies</li>
        ) : (
          <li className="hover:bg-violet-800 rounded-xl p-2"> Movies</li>
        )}
      </Link>
      <Link to={"/Upcoming"} className="max-sm:w-full text-center">
        {location.pathname === "/Upcoming" ? (
          <li className=" rounded-xl p-2 bg-blue-600">Upcoming Movies</li>
        ) : (
          <li className="hover:bg-violet-800 rounded-xl p-2">
            {" "}
            Upcoming Movies
          </li>
        )}
      </Link>
      <Link to={"/Tvshows"} className="max-sm:w-full text-center">
        {location.pathname === "/Tvshows" ? (
          <li className=" rounded-xl p-2 bg-blue-600">TV Shows</li>
        ) : (
          <li className="hover:bg-violet-800 rounded-xl p-2"> TV Shows</li>
        )}
      </Link>
    </div>
  );
};

export default Navbars;
