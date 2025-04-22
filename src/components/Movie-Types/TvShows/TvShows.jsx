import React, { useState, useEffect } from "react";
import { getTvShows } from "../../Api/FetchRequest";
import { useTvShows, useValue } from "../../ContextProvider/ContextProvider";
import TvShowsCard from "./TvShowsCard";
import { Link } from "react-router-dom";
function TvShows() {
  const { tvShows, setTvShows } = useTvShows();
  const { inputValue } = useValue();
  useEffect(() => {
    if (!inputValue) {
      const tv = async () => {
        const tvshows = await getTvShows();
        setTvShows(tvshows.results);
      };
      tv();
    }
  }, [inputValue]);
  return (
    <div className=" justify-items-center gap-10 cards w-full text-sm grid grid-cols-2 sm:grid-cols-2 md:max-lg:grid-cols-3 lg:grid-cols-4   xl:grid-cols-5 ">
      {tvShows &&
        tvShows.map((show) => (
          <Link to={`/Tvshows/${show.id}`} key={show.id}>
            <TvShowsCard name={show.name} poster_path={show.poster_path} />
          </Link>
        ))}
    </div>
  );
}

export default TvShows;
