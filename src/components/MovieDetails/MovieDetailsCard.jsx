import React, { use, useEffect, useState } from "react";
import human from "../../../public/images/3d-movie.png";
import like from "../../../public/images/like.png";
import release from "../../../public/images/video-player.png";
import rating from "../../../public/images/star.png";
import closeBig from "../../../public/close/close-big.png";
import { useNavigate, useParams } from "react-router-dom";
import Cast from "../Casts/Cast";
import closeSmall from "../../../public/close/close-small.png";
import SimilarMovies from "../SimilarMovies/SimilarMovies";
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
  movie_id,
}) {
  //*Global States
  const { key } = useCurrentKey();
  const { visible } = useVisibility();

  //* Poster and backdrops
  const backdrop = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  const poster = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <div className="text-white flex flex-col gap-2">
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0,0,0),transparent), url(${backdrop})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Nav>
          <img
            src={closeSmall}
            className="h-15 p-2 hover:opacity-50 cursor-pointer"
          ></img>
        </Nav>
        {visible && <Trailer trailer={key} />}

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
      <Cast id={movie_id} />
      <SimilarMovies />
    </div>
  );
}

const Nav = ({ children }) => {
  const navigate = useNavigate();
  const { setVisible } = useVisibility();

  const navigateBack = () => {
    const currentLocation = window.location.pathname.split("/");
    const getRoot = currentLocation[1];

    if (!currentLocation[0] && Number(currentLocation[1])) {
      navigate("/");
    } else {
      navigate(`/${getRoot}`);
    }
    setVisible(false);
  };

  return (
    <section
      className="flex  items-center justify-between p-5 "
      onClick={navigateBack}
    >
      {children}
    </section>
  );
};
//! Handles the rendering of the poster including the title, the vote ,release date, votes ,concept (genre),
const Poster = ({
  poster,
  title,
  vote,
  release_date,
  vote_average,
  concept,
}) => {
  return (
    <div className="flex p-5   items-center justify-center gap-2 flex-col md:flex-row md:justify-around  ">
      <div className="flex flex-col gap-5 items-center md:flex-row ">
        <img src={poster} alt="Movie Poster" className="h-100 w-70 " />
        <section className="flex flex-col gap-8 items-center justify-center ">
          <h1 className="font-bold text-4xl   ">{title}</h1>
          <div className="flex flex-col gap-5">
            <span className="flex items-center gap-2">
              <img src={like} alt="Like" className="h-6" />
              <p className="font-medium ">{vote}</p>
            </span>
            <span className="flex items-center gap-2">
              <img src={rating} alt="Rating" className="h-6 gap-2" />
              <p>{vote_average}</p>
            </span>
            <span className="flex items-center gap-2">
              <img src={release} alt="Release" className="h-6" />
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
    <div className="flex flex-col p-5 gap-2 items-center md:items-start ">
      <h1 className="font-bold text-3xl">{title} Synopsis:</h1>
      <p className="font-medium w-[70%] p-1 text-md text-center md:text-left">
        {overview}
      </p>
    </div>
  );
};

const Genres = ({ genre }) => {
  //* Maps the genre and turn it into a
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
  const media = window.matchMedia("(max-width:640px)");
  const [change, setChange] = useState(false);
  const { setVisible } = useVisibility();

  const checkMatch = (e) => {
    if (e.matches) {
      setChange(true);
    } else {
      setChange(false);
    }
  };
  media.addEventListener("change", checkMatch);

  return (
    <div>
      {change ? (
        <div
          className="text-white h-[20px] font-bold gap-2 p-2 flex items-center "
          onClick={() => setVisible(true)}
        >
          <i className="fa-solid fa-play"></i>
          <p>Watch Trailer</p>
        </div>
      ) : (
        <div
          className=" flex flex-col justify-center items-center h-25 w-28 bg-black shadow-2xl hover:opacity-50 cursor-pointer gap-3 rounded-lg"
          onClick={() => setVisible(true)}
        >
          <i className="fa-solid fa-play text-4xl"></i>
          <h3 className="text-xs">Watch Trailer</h3>
        </div>
      )}
    </div>
  );
};
export default MovieDetailsCard;
