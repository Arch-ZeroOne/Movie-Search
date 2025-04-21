import React, { use } from "react";
import { useEffect, useState } from "react";
import noCast from "/fallbacks/no-image.jpg";
function CastCard(props) {
  const [casts, setCasts] = useState();
  const [card, setCard] = useState();
  const getCast = props.cast;
  useEffect(() => {
    if (getCast) {
      const filterCast = getCast.map((item) => {
        return {
          name: item.name,
          character: item.character,
          profile_path: item.profile_path,
        };
      });
      setCasts(filterCast);
    }
  }, [getCast]);

  useEffect(() => {
    if (casts) {
      const generateCard = casts.map((cast, index) => (
        <div className="flex flex-col gap-3 w-50" key={index}>
          {cast.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
              className="h-80 full"
            ></img>
          ) : (
            <img src={noCast} className="h-80 full"></img>
          )}
          <div className="flex flex-col text-lg">
            <h2>{cast.name} as</h2>
            <h2>{cast.character}</h2>
          </div>
        </div>
      ));
      setCard(generateCard);
    }
  }, [casts]);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl ">Cast</h1>
      <div className="flex  whitespace-nowrap items-center gap-5 ">
        {card && card}
      </div>
    </div>
  );
}

export default CastCard;
