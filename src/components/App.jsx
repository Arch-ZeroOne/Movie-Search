import React from "react";
import Searchbar from "./Searchbar";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [movies, createMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGU4MTBlOTAwMDc0ZGI2ODBmNzJjZWNjODI1MTdhMCIsIm5iZiI6MTc0MjA1MDMxOS4xNSwic3ViIjoiNjdkNTk0MGY3OTBkNzg2MzNhMDEzN2U0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nKNQgx1xor8E42nVIUGUAfLexUCaCUK13T83LV6oQdY",
      },
    };
    axios
      .request(options)
      .then((res) => {
        createMovies(res.data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-10">
      <Searchbar />
      <div className="grid grid-cols-3 text-white gap-10 font-[Jetbrains_Mono]">
        {movies.map((movie) => (
          <MovieCard title={movie.title} backdrop_path={movie.backdrop_path} />
        ))}
      </div>
    </div>
  );
};

export default App;
