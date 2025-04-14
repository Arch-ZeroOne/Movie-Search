import React, { useEffect, useState } from "react";
import MovieDetailsCard from "./MovieDetailsCard";
import { useParams } from "react-router-dom";
import { getMovieById } from "../Api/FetchRequest";

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      const details = await getMovieById(id);

      setMovieDetails(details);
    };
    getDetails();
  }, [id]);

  useEffect(() => {
    console.log(movieDetails);
  }, [movieDetails]);

  return (
    <div>
      {movieDetails && (
        <MovieDetailsCard
          key={movieDetails.id}
          backdrop_path={movieDetails.backdrop_path}
          title={movieDetails.title}
          poster_path={movieDetails.poster_path}
          overview={movieDetails.overview}
          vote_count={movieDetails.vote_count}
          release_date={movieDetails.release_date}
          vote_average={movieDetails.vote_average}
        />
      )}
    </div>
  );
}

export default MovieDetails;
