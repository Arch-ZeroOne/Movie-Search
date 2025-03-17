import React from "react";
import Searchbar from "./Searchbar";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import TopRated from "./Movie-Types/TopRated";
import Movies from "./Movie-Types/Movies";
import UpcomingMovies from "./Movie-Types/UpcomingMovies";
import TvShows from "./Movie-Types/TvShows";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import axios from "axios";
import Navbars from "./Navbars";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/discover/movie", {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGU4MTBlOTAwMDc0ZGI2ODBmNzJjZWNjODI1MTdhMCIsIm5iZiI6MTc0MjA1MDMxOS4xNSwic3ViIjoiNjdkNTk0MGY3OTBkNzg2MzNhMDEzN2U0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nKNQgx1xor8E42nVIUGUAfLexUCaCUK13T83LV6oQdY",
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGU4MTBlOTAwMDc0ZGI2ODBmNzJjZWNjODI1MTdhMCIsIm5iZiI6MTc0MjA1MDMxOS4xNSwic3ViIjoiNjdkNTk0MGY3OTBkNzg2MzNhMDEzN2U0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nKNQgx1xor8E42nVIUGUAfLexUCaCUK13T83LV6oQdY",
          },
        }
      )
      .then((response) => {
        setTopRated(response.data.results);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGU4MTBlOTAwMDc0ZGI2ODBmNzJjZWNjODI1MTdhMCIsIm5iZiI6MTc0MjA1MDMxOS4xNSwic3ViIjoiNjdkNTk0MGY3OTBkNzg2MzNhMDEzN2U0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nKNQgx1xor8E42nVIUGUAfLexUCaCUK13T83LV6oQdY",
          },
        }
      )
      .then((response) => {
        setUpcoming(response.data.results);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/discover/tv", {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGU4MTBlOTAwMDc0ZGI2ODBmNzJjZWNjODI1MTdhMCIsIm5iZiI6MTc0MjA1MDMxOS4xNSwic3ViIjoiNjdkNTk0MGY3OTBkNzg2MzNhMDEzN2U0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nKNQgx1xor8E42nVIUGUAfLexUCaCUK13T83LV6oQdY",
        },
      })
      .then((response) => {
        setTvShows(response.data.results);
      });
  });

  return (
    <BrowserRouter>
      <div className="grid grid-cols-1 gap-10">
        <Searchbar />
        <Navbars />
        <div className="grid grid-cols-4">
          <Routes>
            <Route
              path="/"
              element={movies.map((movie) => (
                <Movies poster_path={movie.poster_path} title={movie.title} />
              ))}
            />
            <Route
              path="Toprated"
              element={topRated.map((topRated) => (
                <TopRated
                  poster_path={topRated.poster_path}
                  title={topRated.title}
                />
              ))}
            />
            <Route
              path="Upcoming"
              element={upcoming.map((coming) => (
                <UpcomingMovies
                  poster_path={coming.poster_path}
                  title={coming.title}
                />
              ))}
            />
            <Route
              path="Tvshows"
              element={tvShows.map((show) => (
                <TvShows poster_path={show.poster_path} name={show.name} />
              ))}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
=======
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
>>>>>>> de19dcb2e690f24fd2a29e3b2ea1b19c718a8b1c
  );
};

export default App;
