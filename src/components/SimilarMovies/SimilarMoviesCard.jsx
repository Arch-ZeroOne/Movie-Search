import React from "react";

const SimilarMoviesCard = ({ title, poster_path }) => {
  return (
    <div className="flex flex-col items-center gap-2 w-70 shrink-0">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        className="h-100 w-full"
      ></img>
      <h1 className="text-lg ">{title}</h1>
    </div>
  );
};

export default SimilarMoviesCard;
