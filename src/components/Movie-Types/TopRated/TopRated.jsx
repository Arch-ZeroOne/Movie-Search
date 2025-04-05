import React, { useEffect, useState } from "react";
import { getTopRated } from "../../Api/FetchRequest";
import {
  useTopRated,
  useTopRatedCopy,
} from "../../ContextProvider/ContextProvider";

import TopRatedCard from "./TopRatedCard";
const TopRated = () => {
  const { topRated, setTopRated } = useTopRated();
  const { setTopRatedCopy } = useTopRatedCopy();
  useEffect(() => {
    const topRated = async () => {
      const topRate = await getTopRated();
      setTopRated(topRate.results);
      setTopRatedCopy(topRate.results);
    };
    topRated();
  }, []);

  return (
    <div className="grid grid-cols-1 justify-items-center gap-10 cards w-full text-sm sm:grid-cols-2 max-sm:grid-cols-1 md:max-lg:grid-cols-3 lg:grid-cols-4   xl:grid-cols-5 ">
      {topRated &&
        topRated.map((movie) => (
          <TopRatedCard poster_path={movie.poster_path} title={movie.title} />
        ))}
    </div>
  );
};

export default TopRated;
