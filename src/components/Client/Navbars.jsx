import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbars = () => {
  const location = useLocation();

  return (
    <div className="text-white list-none font-[Winky_Rough]  flex justify-center gap-2 sm:gap-5  text-md  w-[80%] md:gap-10 ">
      <Link to={"/"} className="max-sm:w-full text-center ">
        {location.pathname === "/" ? (
          <li className=" rounded-xl p-2 bg-blue-600 text-sm md:text-[17px]">
            Top Rated
          </li>
        ) : (
          <li className="hover:bg-violet-800 rounded-xl p-2 text-sm md:text-[17px]">
            Top Rated
          </li>
        )}
      </Link>
      <Link to={"/Movies"} className="max-sm:w-full text-center">
        {location.pathname === "/Movies" ? (
          <li className=" rounded-xl p-2 bg-blue-600 text-sm md:text-lg text-[17px]">
            Movies
          </li>
        ) : (
          <li className="hover:bg-violet-800 rounded-xl p-2 text-sm md:text-[17px]">
            Movies
          </li>
        )}
      </Link>
      <Link to={"/Upcoming"} className="max-sm:w-full text-center">
        {location.pathname === "/Upcoming" ? (
          <li className=" rounded-xl p-2 bg-blue-600 text-sm md:text-[17px]">
            Upcoming Movies
          </li>
        ) : (
          <li className="hover:bg-violet-800 rounded-xl p-2 text-sm md:text-[17px]">
            Upcoming Movies
          </li>
        )}
      </Link>
      <Link to={"/Tvshows"} className="max-sm:w-full text-center">
        {location.pathname === "/Tvshows" ? (
          <li className=" rounded-xl p-2 bg-blue-600 text-sm md:text-[17px]">
            TV Shows
          </li>
        ) : (
          <li className="hover:bg-violet-800 rounded-xl p-2 text-sm md:text-[17px]">
            {" "}
            TV Shows
          </li>
        )}
      </Link>
    </div>
  );
};

export default Navbars;
