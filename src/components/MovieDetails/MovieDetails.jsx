import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, getMovieTrailer } from "../Api/FetchRequest";
import { useCurrentKey,useCurrentTrailer,useLoader } from "../ContextProvider/ContextProvider";
import ScrollToTop from "../Scroll/ScrollToTop";
import MovieDetailsCard from "./MovieDetailsCard";
import Spinner from "../Spinner/Spinner.jsx";

function MovieDetails() {
  //* Gets the dynamic id in the browser url
  const { id } = useParams();
  //* Gets the current movie key
  const { setKey } = useCurrentKey();
  //* Gets the current Trailer
  const { setHasTrailer } = useCurrentTrailer();
  const {loading,setLoading} = useLoader();
  const [movieDetails, setMovieDetails] = useState();
  const [trailers, setTrailers] = useState();
  const [trailerId, setTrailerId] = useState();

  const get_movie_trailer = async () => {
    setLoading(true);
    const vidDetails = await getMovieTrailer(id);
    setTrailers(vidDetails.results);
    setLoading(false);
  };

  //*Handles the filtering of movies and tv shows
  useEffect(() => {
    setLoading(true);
    const getMovieDetails = async () => {
      const details = await getMovieById(id);
      setMovieDetails(details);
      setLoading(false);
    };
    getMovieDetails();
  }, [id]);

  //* Handles the request of movies  trailers
  useEffect(() => {
    get_movie_trailer();
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
      {loading && <Spinner/>}
      <ScrollToTop />
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
