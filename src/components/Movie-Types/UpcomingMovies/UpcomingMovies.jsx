import React, { useState, useEffect } from "react";
import { getUpcoming } from "../../Api/FetchRequest";
import { Link } from "react-router-dom";
import {
  useUpcoming,
  useUpcomingCopy,
} from "../../ContextProvider/ContextProvider";
import UpcomingMoviesCard from "./UpcomingMoviesCard";

const UpcomingMovies = () => {
  const { upcoming, setUpcoming } = useUpcoming();
  const { setUpcomingCopy } = useUpcomingCopy();
  useEffect(() => {
    const upcoming = async () => {
      const upcoming = await getUpcoming();
      setUpcoming(upcoming.results);
      setUpcomingCopy(upcoming.results);
    };
    upcoming();
  }, []);

  return (
    <div className="grid grid-cols-1 justify-items-center gap-10 cards w-full text-sm sm:grid-cols-2 max-sm:grid-cols-1 md:max-lg:grid-cols-3 lg:grid-cols-4   xl:grid-cols-5 ">
      {upcoming &&
        upcoming.map((movie) => (
          <Link to={`/Upcoming/${movie.id}`}>
            <UpcomingMoviesCard
              title={movie.title}
              poster_path={movie.poster_path}
            />
          </Link>
        ))}
    </div>
  );
};

export default UpcomingMovies;
