import React, { useEffect, useState } from "react";
import logo from "../../../public/images/remove.png";
import human from "../../../public/images/3d-movie.png";
import like from "../../../public/images/like.png";
import release from "../../../public/images/video-player.png";
import rating from "../../../public/images/star.png";
import {
  useCurrentKey,
  useVisibility,
} from "../ContextProvider/ContextProvider";
import Trailer from "../Trailer/Trailer";
function MovieDetailsCard({
  backdrop_path,
  title,
  poster_path,
  overview,
  vote_count,
  release_date,
  vote_average,
  genres,
}) {
  const { key } = useCurrentKey();
  const { visible } = useVisibility();
  const backdrop = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  const poster = `https://image.tmdb.org/t/p/original/${poster_path}`;

  useEffect(() => {
    console.log("CLicked");
  }, [visible]);
  return (
    <div className="text-white">
      <div
        style={{
          background: `url(${backdrop})`,
          height: "700px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Nav>
          <img
            src={logo}
            className="h-15 hover:opacity-50 cursor-pointer"
          ></img>
        </Nav>
        {visible && <Trailer id={key} />}

        <div>
          <Poster
            poster={poster}
            title={title}
            vote={vote_count}
            release_date={release_date}
            vote_average={vote_average}
            concept={genres}
          />
          <Synopsis overview={overview} title={title} />
        </div>
      </div>
    </div>
  );
}

const Nav = ({ children }) => {
  return (
    <section className="flex  items-center justify-between p-5">
      {children}
    </section>
  );
};

const Poster = ({
  poster,
  title,
  vote,
  release_date,
  vote_average,
  concept,
}) => {
  return (
    <div className="flex p-5  gap-3 font-mono items-center justify-between">
      <div className="flex gap-5 items-center">
        <img src={poster} alt="Movie Poster" className="h-100 w-70 " />
        <section className="flex flex-col gap-8 ">
          <h1 className="font-bold text-4xl   ">{title}</h1>
          <div className="flex flex-col gap-5">
            <span className="flex items-center gap-2">
              <img src={like} alt="Like" className="h-8" />
              <p className="font-medium ">{vote}</p>
            </span>
            <span className="flex items-center gap-2">
              <img src={rating} alt="Rating" className="h-8 gap-2" />
              <p>{vote_average}</p>
            </span>
            <span className="flex items-center gap-2">
              <img src={release} alt="Release" className="h-8" />
              <p className="font-medium">{release_date}</p>
            </span>
            <Genres genre={concept} />
          </div>
        </section>
      </div>
      <WatchTrailer />
    </div>
  );
};
const Synopsis = ({ overview, title }) => {
  return (
    <div className="flex flex-col p-5 gap-2">
      <h1 className="font-bold text-3xl">{title} Synopsis:</h1>
      <p className="font-medium w-[70%] p-1 text-md">{overview}</p>
    </div>
  );
};

const Genres = ({ genre }) => {
  const concepts = genre.map((movie, index) =>
    index + 1 !== genre.length ? (
      <p className="font-medium" key={index}>
        {movie.name},
      </p>
    ) : (
      <p className="font-medium" key={index}>
        {movie.name}
      </p>
    )
  );

  return (
    <div className="flex items-center gap-3">
      <h3 className="font-bold">Genres:</h3>
      <div className="flex items-center gap-2">{concepts}</div>
    </div>
  );
};

const WatchTrailer = () => {
  const { visible, setVisible } = useVisibility();

  useEffect(() => {
    console.log(visible);
  }, [visible]);
  return (
    <div
      className="flex flex-col justify-center items-center h-25 w-28 bg-black shadow-2xl hover:opacity-50 cursor-pointer gap-3 rounded-lg"
      onClick={() => setVisible(!visible)}
    >
      <i className="fa-solid fa-play text-4xl"></i>
      <h3 className="text-xs">Watch Trailer</h3>
    </div>
  );
};
export default MovieDetailsCard;
