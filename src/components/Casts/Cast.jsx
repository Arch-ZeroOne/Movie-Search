import React from "react";
import CastCard from "./CastCard";
import { getMovieCast } from "../Api/FetchRequest";
import { useEffect, useState } from "react";
function Cast({ id }) {
  const [cast, setCasts] = useState();
  useEffect(() => {
    const requestCast = async () => {
      const cast = await getMovieCast(id);
      setCasts(cast);
    };
    requestCast();
  }, [id]);

  return (
    <div className="w-full">
      <CastCard {...cast} />
    </div>
  );
}

export default Cast;
