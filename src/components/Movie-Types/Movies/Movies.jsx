import React, { useEffect } from "react";
import { getMovies } from "../../Api/FetchRequest";
import { useMovie, useValue } from "../../ContextProvider/ContextProvider";
import MoviesCard from "./MoviesCard";
import { Link } from "react-router-dom";
function Movies() {
  const { movies, setMovies } = useMovie();
  const { inputValue } = useValue();
  useEffect(() => {
    if (!inputValue) {
      const movie = async () => {
        const movies = await getMovies();
        setMovies(movies.results);
      };
      movie();
    }
  }, [inputValue]);

  return (
    <>
      <div className="grid grid-cols-2 justify-items-center gap-10 cards w-full text-sm   md:max-lg:grid-cols-3 lg:grid-cols-4   xl:grid-cols-5 ">
        {movies &&
          movies.map((movie) => (
            <Link to={`/Movies/${movie.id}`} key={movie.id}>
              <MoviesCard poster_path={movie.poster_path} title={movie.title} />
            </Link>
          ))}
      </div>
    </>
  );
}

export default Movies;
