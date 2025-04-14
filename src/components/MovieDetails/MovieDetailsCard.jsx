import React from "react";
import logo from "../../../public/images/remove.png";
import human from "../../../public/images/3d-movie.png";
import like from "../../../public/images/like.png";
import release from "../../../public/images/video-player.png";
import rating from "../../../public/images/star.png";
function MovieDetailsCard({
  backdrop_path,
  title,
  poster_path,
  overview,
  vote_count,
  release_date,
  vote_average,
}) {
  const backdrop = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  const poster = `https://image.tmdb.org/t/p/original/${poster_path}`;
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
          <div className="flex items-center">
            <img src={human} className="h-15"></img>
            <h2 className="font-mono">Movie Search</h2>
          </div>
        </Nav>

        <Poster
          poster={poster}
          title={title}
          vote={vote_count}
          release_date={release_date}
          vote_average={vote_average}
        />
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

const Poster = ({ poster, title, vote, release_date, vote_average }) => {
  return (
    <div className="flex p-10 items-center gap-8 bg-t">
      <img src={poster} alt="Movie Poster" className="h-100 w-80 shadow-2xs " />
      <section className="flex flex-col gap-8 items-center">
        <h1 className="font-bold text-3xl">{title}</h1>
        <div className="flex flex-col gap-5">
          <span className="flex items-center gap-2">
            <img src={like} alt="Like" className="h-10" />
            <p className="font-medium">{vote}</p>
          </span>
          <span className="flex items-center gap-2">
            <img src={rating} alt="Rating" className="h-10 gap-2" />
            <p>{vote_average}</p>
          </span>
          <span className="flex items-center gap-2">
            <img src={release} alt="Release" className="h-10" />
            <p className="font-medium">{release_date}</p>
          </span>
        </div>
      </section>
    </div>
  );
};
export default MovieDetailsCard;
