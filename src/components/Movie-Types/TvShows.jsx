import React from "react";

function TvShows({ poster_path, name }) {
  return (
    <div className=" text-white font-[Jetbrains_Mono] p-3 text-center">
      <div className="w-70 h-100 flex flex-col items-center gap-5">
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className="w-auto h-[100%]"
          />
        ) : (
          <img src="public/no_poster/poster/error.jpg"></img>
        )}
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default TvShows;
