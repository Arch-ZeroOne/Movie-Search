import React from "react";
import noImage from "/fallbacks/no-image.jpg";
function MoviesCard({ poster_path, title }) {
  return (
    <div className=" text-white font-[Jetbrains_Mono]  text-center">
      <div className="h-100 flex flex-col items-center gap-4">
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className="w-auto h-[100%]"
          />
        ) : (
          <img src={noImage} alt="poster_error"></img>
        )}
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default MoviesCard;
