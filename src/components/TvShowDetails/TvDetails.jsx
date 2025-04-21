import React, { useState, useEffect } from "react";
import { getTvShowById, getTvShowTrailer } from "../Api/FetchRequest";
import { useParams } from "react-router-dom";
import {
  useCurrentKey,
  useCurrentTrailer,
} from "../ContextProvider/ContextProvider";
import ScrollToTop from "../Scroll/ScrollToTop";
import MovieDetailsCard from "../MovieDetails/MovieDetailsCard";

const TvDetails = () => {
  const [tv, setTv] = useState();
  const [video, setVideo] = useState();
  const { setHasTrailer } = useCurrentTrailer();
  const { setKey } = useCurrentKey();
  const { id } = useParams();

  useEffect(() => {
    const getTvDetails = async () => {
      const request = await getTvShowById(id);
      setTv(request);
    };
    getTvDetails();
  }, [id]);

  useEffect(() => {
    const getTvVideo = async () => {
      const request = await getTvShowTrailer(id);
      setVideo(request.results);
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
      <ScrollToTop />
      {tv && (
        <MovieDetailsCard
          key={tv.id}
          backdrop_path={tv.backdrop_path}
          title={tv.title}
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
