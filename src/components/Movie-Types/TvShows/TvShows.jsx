import React, { useState, useEffect } from "react";
import { getTvShows } from "../../Api/FetchRequest";
import { useTvShows } from "../../ContextProvider/ContextProvider";
import TvShowsCard from "./TvShowsCard";
function TvShows() {
  const { tvShows, setTvShows } = useTvShows();
  useEffect(() => {
    const tv = async () => {
      const tvshows = await getTvShows();
      setTvShows(tvshows.results);
    };
    tv();
  }, []);
  return (
    <div className="grid grid-cols-1 justify-items-center gap-10 cards w-full text-sm sm:grid-cols-2 max-sm:grid-cols-1 md:max-lg:grid-cols-3 lg:grid-cols-4   xl:grid-cols-5 ">
      {tvShows &&
        tvShows.map((show) => (
          <TvShowsCard name={show.name} poster_path={show.poster_path} />
        ))}
    </div>
  );
}

export default TvShows;
