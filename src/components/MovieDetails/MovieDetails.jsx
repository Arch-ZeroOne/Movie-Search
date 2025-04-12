import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByExternalId, getExternalId } from "../Api/FetchRequest";
import MovieDetailsCard from "./MovieDetailsCard";
function MovieDetails() {
  const { id } = useParams();
  const [externalId, setExternalId] = useState();
  const [details, setDetails] = useState();

  useEffect(() => {
    const getExternal = async () => {
      const received = await getExternalId(id);
      setExternalId(received.imdb_id);
    };
    getExternal();
  }, [id]);

  useEffect(() => {
    if (externalId) {
      const getMovieId = async () => {
        const getMovie = await getByExternalId(externalId);
        const result = getMovie;
        console.log(result.movie_results);
        setDetails(result.movie_results);
      };
      getMovieId();
    }
  }, [externalId]);

  return (
    <div>
      {details && (
        <MovieDetailsCard
          backdrop_path={details[0].backdrop_path}
          title={details[0].title}
          overview={details[0].overview}
          poster_path={details[0].poster_path}
        />
      )}
    </div>
  );
}

export default MovieDetails;
