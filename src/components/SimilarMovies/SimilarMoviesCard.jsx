import React from "react";
import noImage from "/fallbacks/no-image.jpg";
const SimilarMoviesCard = ({ title, poster_path }) => {
  const splitTitle = title.split(" ").join("").split("");

  if (splitTitle.length > 17) {
    const spliced = splitTitle.splice(0, 17).join("");
    title = `${spliced}...`;
  }
  return (
    <div className="flex flex-col items-center gap-2 w-70 shrink-0">
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          className="h-100 w-full"
        ></img>
      ) : (
        <img src={noImage} className="h-100 w-full"></img>
      )}
      <h1 className="text-lg">{title}</h1>
    </div>
  );
};

export default SimilarMoviesCard;
