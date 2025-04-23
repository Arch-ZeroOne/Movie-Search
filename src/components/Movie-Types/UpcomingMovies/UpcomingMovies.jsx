import React, { useState, useEffect } from "react";
import { getUpcoming } from "../../Api/FetchRequest";
import { Link } from "react-router-dom";
import {
  useUpcoming,
  useValue,
  useFilteredUp,
  useLoader,
} from "../../ContextProvider/ContextProvider";
import UpcomingMoviesCard from "./UpcomingMoviesCard";
import Spinner from "../../Spinner/Spinner.jsx";

const UpcomingMovies = () => {
  const { upcoming, setUpcoming } = useUpcoming();
  const { inputValue } = useValue();
  const { setFilteredUp } = useFilteredUp();
  const {loading,setLoading} = useLoader();

  useEffect(() => {
    if (!inputValue) {
      setLoading(true);
      const upcoming = async () => {
        const upcoming = await getUpcoming();
        setUpcoming(upcoming.results);
        setFilteredUp(upcoming.results);
        setLoading(false);
      };
      upcoming();
    }
  }, [inputValue]);

  return (
      <>
        {loading && <Spinner/>}
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
      </>
  );
};

export default UpcomingMovies;
