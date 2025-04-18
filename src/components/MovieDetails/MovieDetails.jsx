import React, { useEffect, useState } from "react";
import MovieDetailsCard from "./MovieDetailsCard";
import { useParams } from "react-router-dom";
import { getMovieById, getVideo, getTvShowById } from "../Api/FetchRequest";
import { useCurrentKey } from "../ContextProvider/ContextProvider";
import { useCurrentTrailer } from "../ContextProvider/ContextProvider";
function MovieDetails() {
  //* Gets the dynamic id in the browser url
  const { id } = useParams();
  //* Gets the current movie key
  const { setKey } = useCurrentKey();
  //* Gets the current Trailer
  const { setHasTrailer } = useCurrentTrailer();

  const [movieDetails, setMovieDetails] = useState();
  const [trailers, setTrailers] = useState();
  const [trailerId, setTrailerId] = useState();

  const currentLocation = window.location.pathname;

  //*Handles the filtering og movies and tv shows
  useEffect(() => {
    const getDetails = async () => {
      if (currentLocation.includes("tvshows")) {
        const details = await getTvShowById(id);
        setMovieDetails(details);
      } else {
        const details = await getMovieById(id);
        setMovieDetails(details);
      }
    };
    getDetails();
  }, [id]);

  //* Handles the request of movies
  useEffect(() => {
    const getVideoDetails = async () => {
      const vidDetails = await getVideo(id);
      setTrailers(vidDetails.results);
    };
    getVideoDetails();
  }, [id]);

  //* Filters the trailer and getting the first one
  useEffect(() => {
    if (trailers) {
      const filter = trailers.filter((trailer) => trailer.type === "Trailer");

      //* Checks if the trailer is empty
      if (filter.length > 0) {
        setTrailerId(filter[0].key);
        setHasTrailer(true);
      } else {
        setHasTrailer(false);
      }
    }
  }, [trailers]);

  //* Sets the current trailer key
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
          movie_id={movieDetails.id}
        />
      )}
    </div>
  );
}

export default MovieDetails;
