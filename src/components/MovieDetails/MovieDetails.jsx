import React, { useEffect, useState } from "react";
import MovieDetailsCard from "./MovieDetailsCard";
import { useParams } from "react-router-dom";
import Trailer from "../Trailer/Trailer";
import { getMovieById, getVideo } from "../Api/FetchRequest";
import { filter, tr } from "motion/react-client";

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const [trailers, setTrailers] = useState();
  const [trailerId, setTrailerId] = useState();

  useEffect(() => {
    const getDetails = async () => {
      const details = await getMovieById(id);
      setMovieDetails(details);
    };
    getDetails();
  }, [id]);

  useEffect(() => {
    const getVideoDetails = async () => {
      const vidDetails = await getVideo(id);
      setTrailers(vidDetails.results);
    };
    getVideoDetails();
  }, [id]);

  useEffect(() => {
    if (trailers) {
      const filterTrailer = trailers.filter(
        (trailer) => trailer.type === "Trailer" && trailer.name === "Trailer"
      );

      setTrailerId(filterTrailer[0].key);
    }
  }, [trailers]);

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
          genres={movieDetails.genres}
        />
      )}
      {trailerId && <Trailer id={trailerId} />}
    </div>
  );
}

export default MovieDetails;
