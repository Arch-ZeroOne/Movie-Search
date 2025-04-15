import React, { useEffect, useState } from "react";
import MovieDetailsCard from "./MovieDetailsCard";
import { useParams } from "react-router-dom";
import { getMovieById, getVideo } from "../Api/FetchRequest";
import { filter, tr } from "motion/react-client";
import { useCurrentKey } from "../ContextProvider/ContextProvider";

function MovieDetails() {
  const { id } = useParams();
  const { setKey } = useCurrentKey();
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
      const filter = trailers.filter((trailer) => trailer.type === "Trailer");
      setTrailerId(filter[0].key);
    }
  }, [trailers]);

  useEffect(() => {
    if (trailerId) {
      setKey(trailerId);
    }
  }, [trailerId]);

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
    </div>
  );
}

export default MovieDetails;
