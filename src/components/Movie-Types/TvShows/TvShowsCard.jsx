import React from "react";

function TvShowsCard({ poster_path, name }) {
  return (
    <div className=" text-white font-[Jetbrains_Mono]  text-center">
      <div className=" h-100 flex flex-col items-center gap-4">
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className="w-auto h-[100%]"
          />
        ) : (
          <img src="public/no_poster/poster_error.jpg" alt="poster_error"></img>
        )}
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default TvShowsCard;
