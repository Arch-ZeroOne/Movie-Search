import React, { use } from "react";
import { getSimilarMovies } from "../Api/FetchRequest.js";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import SimilarMoviesCard from "./SimilarMoviesCard.jsx";
const SimilarMovies = () => {
  const { id } = useParams();
  const [similar, setSimilar] = useState();

  useEffect(() => {
    const getSimilar = async () => {
      const similarMovies = await getSimilarMovies(id);
      setSimilar(similarMovies.results);
    };
    getSimilar();
  }, [id]);
  return (
    <div
      className="flex flex-col p-5 gap-4 overflow-x-auto
     overflow-y-hidden w-[90vw] ml-auto mr-auto"
    >
      <h1 className="text-2xl">Similar Movies</h1>
      <div className="flex whitespace-nowrap gap-5 items-center w-full ">
        {similar &&
          similar.map((movie) => (
            <Link to={`/Details/${movie.id}`} key={movie.id}>
              <SimilarMoviesCard
                title={movie.title}
                poster_path={movie.poster_path}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
