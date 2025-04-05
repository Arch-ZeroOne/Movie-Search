import React, { useEffect } from "react";
import { getMovies } from "../../Api/FetchRequest";
import { useMovie } from "../../ContextProvider/ContextProvider";
import MoviesCard from "./MoviesCard";
function Movies() {
  const { movies, setMovies } = useMovie();
  useEffect(() => {
    const movie = async () => {
      const movies = await getMovies();
      setMovies(movies.results);
    };
    movie();
  }, []);

  return (
    <div className="grid grid-cols-1 justify-items-center gap-10 cards w-full text-sm sm:grid-cols-2 max-sm:grid-cols-1 md:max-lg:grid-cols-3 lg:grid-cols-4   xl:grid-cols-5 ">
      {movies &&
        movies.map((movie) => (
          <MoviesCard poster_path={movie.poster_path} title={movie.title} />
        ))}
    </div>
  );
}

export default Movies;
