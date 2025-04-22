import React, { useEffect, useState } from "react";
import { getTopRated } from "../../Api/FetchRequest";
import { Link } from "react-router-dom";
import {
  useTopRated,
  useValue,
  useFilteredTop,
} from "../../ContextProvider/ContextProvider";

import TopRatedCard from "./TopRatedCard";
const TopRated = () => {
  const { topRated, setTopRated } = useTopRated();
  const { inputValue } = useValue();
  const { setFilteredTop } = useFilteredTop();
  useEffect(() => {
    if (!inputValue) {
      const topRated = async () => {
        const topRate = await getTopRated();
        setTopRated(topRate.results);
        setFilteredTop(topRate.results);
      };
      topRated();
    }
  }, [inputValue]);

  return (
    <div className="mb-5 grid grid-cols-2 justify-items-center gap-10 md:gap-8 cards w-full text-sm  md:max-lg:grid-cols-3  lg:grid-cols-4   xl:grid-cols-5 2xl:gap-15  ">
      {topRated &&
        topRated.map((movie) => (
          <Link key={movie.id} to={`/${movie.id}`}>
            <TopRatedCard
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
            />
          </Link>
        ))}
    </div>
  );
};

export default TopRated;
