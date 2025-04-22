import React from "react";
import CastCard from "./CastCard";
import { getMovieCast, getTvCasts } from "../Api/FetchRequest";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Cast({ id }) {
  const [cast, setCasts] = useState();
  const location = useLocation().pathname.split("/");

  useEffect(() => {
    if (location[1] === "Tvshows") {
      const requestCast = async () => {
        const cast = await getTvCasts(id);
        setCasts(cast);
      };
      requestCast();
    } else {
      const requestCast = async () => {
        const cast = await getMovieCast(id);
        setCasts(cast);
      };
      requestCast();
    }
  }, [id]);

  return (
    <div className="w-[98vw]  ml-auto mr-auto items-center flex p-5 overflow-x-auto overflow-y-hidden scrollbar-custom">
      <CastCard {...cast} />
    </div>
  );
}

export default Cast;
