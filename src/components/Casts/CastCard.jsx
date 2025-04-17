import React, { use } from "react";
import { useEffect, useState } from "react";
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
      const generateCard = casts.map((cast) => (
        <div className="flex flex-col gap-5 w-100 ">
          <img
            src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
            className="h-100 full"
          ></img>
          <div className="flex items-center flex-col">
            <h2 className="text-xl">{cast.name}</h2>
            <h2>as</h2>
            <h2>{cast.character}</h2>
          </div>
        </div>
      ));
      setCard(generateCard);
    }
  }, [casts]);

  return (
    <div>
      <h1 className="text-2xl">Casts</h1>
      <div className="flex  whitespace-nowrap  justify-between   items-center gap-5   overflow-x-auto overflow-y-hidden">
        {card && card}
      </div>
    </div>
  );
}

export default CastCard;
