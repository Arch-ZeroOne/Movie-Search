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
    <div className="w-[98vw]  ml-auto mr-auto items-center flex p-5 overflow-x-auto overflow-y-hidden">
      <CastCard {...cast} />
    </div>
  );
}

export default Cast;
