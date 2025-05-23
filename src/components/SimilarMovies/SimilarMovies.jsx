import React from "react";
import { getSimilarMovies, getSimilarTv } from "../Api/FetchRequest.js";
import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import SimilarMoviesCard from "./SimilarMoviesCard.jsx";
const SimilarMovies = () => {
  const { id } = useParams();
  const [similar, setSimilar] = useState();
  const [type, setType] = useState("");
  const location = useLocation();
  //Variable to get the current browser location or the url
  const splitPath = location.pathname.split("/");

  //Variable for the current path which will be dynamic because of conditional changes
  let path = "";

  //Check if  splitPath[1] is a number if true we are from the root (/) path else we are in other path besides the root
  if (Number(splitPath[1])) {
    path = "";
  } else {
    path = `/${splitPath[1]}`;
  }

  const getMovie = async () => {
    const similarMovies = await getSimilarMovies(id);
    setSimilar(similarMovies.results);
  };
  const getTv = async () => {
    const similarTv = await getSimilarTv(id);
    setSimilar(similarTv.results);
  };

  useEffect(() => {
    if (splitPath[1] === "Tvshows") {
      getTv();
      setType("TV Shows");
    } else {
      getMovie();
      setType("Movies");
    }
  }, [id]);
  return (
    <div
      className="flex flex-col p-5 gap-4 overflow-x-auto
     overflow-y-hidden w-[98vw] ml-auto mr-auto mb-10"
    >
      <h1 className="text-2xl">Similar {type}</h1>
      <div className="flex whitespace-nowrap gap-5 items-center w-full ">
        {similar &&
          similar.map((movie) => (
            <Link to={`${path}/${movie.id}`} key={movie.id}>
              {movie.title ? (
                <SimilarMoviesCard
                  title={movie.title}
                  poster_path={movie.poster_path}
                />
              ) : (
                <SimilarMoviesCard
                  title={movie.name}
                  poster_path={movie.poster_path}
                />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
