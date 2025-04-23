import React, { useState, useEffect } from "react";
import { getTvShowById, getTvShowTrailer } from "../Api/FetchRequest";
import { useParams } from "react-router-dom";
import {
  useCurrentKey,
  useCurrentTrailer,
  useLoader
} from "../ContextProvider/ContextProvider";
import ScrollToTop from "../Scroll/ScrollToTop";
import MovieDetailsCard from "../MovieDetails/MovieDetailsCard";
import Spinner from "../Spinner/Spinner";

const TvDetails = () => {
  const [tv, setTv] = useState();
  const [video, setVideo] = useState();
  const { setHasTrailer } = useCurrentTrailer();
  const { setKey } = useCurrentKey();
  const { id } = useParams();
  const {loading,setLoading} = useLoader();

  useEffect(() => {
    setLoading(true);
    const getTvDetails = async () => {
      const request = await getTvShowById(id);
      setTv(request);
      setLoading(false);
    };
    getTvDetails();
  }, [id]);

  useEffect(() => {
    setLoading(true);
    const getTvVideo = async () => {
      const request = await getTvShowTrailer(id);
      setVideo(request.results);
      setLoading(false);
    };
    getTvVideo();
  }, [id]);

  useEffect(() => {
    if (video) {
      const filterTrailer = video.filter((tv) => tv.type === "Trailer");
      if (filterTrailer[0]) {
        setKey(filterTrailer[0].key);
        setHasTrailer(true);
      } else {
        setHasTrailer(false);
      }
    }
  }, [video]);

  return (
    <div>
      {loading && <Spinner/>}
      <ScrollToTop />
      {tv && (
        <MovieDetailsCard
          key={tv.id}
          backdrop_path={tv.backdrop_path}
          title={tv.name}
          poster_path={tv.poster_path}
          overview={tv.overview}
          vote_count={tv.vote_count}
          vote_average={tv.vote_average}
          release_date={tv.seasons[0].air_date}
          genres={tv.genres}
          movie_id={tv.id}
        />
      )}
    </div>
  );
};

export default TvDetails;
