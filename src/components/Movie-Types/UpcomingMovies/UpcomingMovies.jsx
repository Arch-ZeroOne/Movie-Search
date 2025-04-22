import React, { useState, useEffect } from "react";
import { getUpcoming } from "../../Api/FetchRequest";
import { Link } from "react-router-dom";
import {
  useUpcoming,
  useValue,
  useFilteredUp,
} from "../../ContextProvider/ContextProvider";
import UpcomingMoviesCard from "./UpcomingMoviesCard";

const UpcomingMovies = () => {
  const { upcoming, setUpcoming } = useUpcoming();
  const { inputValue } = useValue();
  const { setFilteredUp } = useFilteredUp();

  useEffect(() => {
    if (!inputValue) {
      const upcoming = async () => {
        const upcoming = await getUpcoming();
        setUpcoming(upcoming.results);
        setFilteredUp(upcoming.results);
      };

      upcoming();
    }
  }, [inputValue]);

  return (
    <div className="justify-items-center gap-10 cards w-full text-sm grid grid-cols-2   md:max-lg:grid-cols-3 lg:grid-cols-4   xl:grid-cols-5 ">
      {upcoming &&
        upcoming.map((movie) => (
          <Link to={`/Upcoming/${movie.id}`} key={movie.id}>
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
