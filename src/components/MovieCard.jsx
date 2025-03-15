import React from "react";

function MovieCard({ backdrop_path, title }) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <img
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          alt=""
          className="w-[25vw] h-[50vh]"
        />
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default MovieCard;
