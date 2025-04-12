import React from "react";

function MovieDetailsCard({ backdrop_path, title, overview, poster_path }) {
  const backdrop = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const poster = `https://image.tmdb.org/t/p/original/${poster_path}`;

  console.log(backdrop);
  return (
    <>
      <div
        className=" bg-cover ml-auto mr-auto "
        style={{
          background: `url(${backdrop})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "700px",
        }}
      >
        <h1 className="text-white">{title}</h1>
      </div>
    </>
  );
}

export default MovieDetailsCard;
