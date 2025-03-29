import React, { useContext, useEffect, useState } from "react";
import {
  MovieContext,
  TopRatedContext,
  UpcomingContext,
  TvShowsContext,
} from "./App";
import axios from "axios";
export const ValueContext = React.createContext();

const Searchbar = ({ current_place }) => {
  //Used the context from the states in the app
  //When the context is changed here it automatically affects the context in the main file in short: It updates
  const { movies, setMovies } = useContext(MovieContext);
  const { topRated, setTopRated } = useContext(TopRatedContext);
  const { upcoming, setUpcoming } = useContext(UpcomingContext);
  const { tvShows, setTvShows } = useContext(TvShowsContext);

  const handleChange = (event) => {
    let url = "";
    if (event.target.value !== "") {
      console.log("Has value");
      url = `https://api.themoviedb.org/3/search/movie?query=${event.target.value}&include_adult=false&language=en-US&page=1`;
    } else {
      switch (current_place) {
        case "Home":
          url =
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
          break;
        case "Movies":
          url = "https://api.themoviedb.org/3/discover/movie";
          break;
        case "Upcoming":
          url =
            "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
          break;
        case "TV Shows":
          url = "https://api.themoviedb.org/3/discover/tv";
          break;
      }
    }

    axios
      .get(url, {
        headers: {
          accept: "application/json",
          Authorization:
            '"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGU4MTBlOTAwMDc0ZGI2ODBmNzJjZWNjODI1MTdhMCIsIm5iZiI6MTc0MjA1MDMxOS4xNSwic3ViIjoiNjdkNTk0MGY3OTBkNzg2MzNhMDEzN2U0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.nKNQgx1xor8E42nVIUGUAfLexUCaCUK13T83LV6oQdY',
        },
      })
      .then((response) => {
        switch (current_place) {
          case "Home":
            setTopRated(response.data.results);
            break;
          case "Movies":
            setMovies(response.data.results);
            break;
          case "Upcoming":
            setUpcoming(response.data.results);
            break;
          case "TV Shows":
            setTvShows(response.data.results);
            break;
        }
      });

    setInputValue(event.target.value);
  };

  return (
    <div className="w-[80%] text-white p-5 text-sm">
      <input
        type="text"
        placeholder={`Search in ${current_place}`}
        onChange={handleChange}
        className="bg-[#1F2937] mr-auto ml-auto font-mono w-full p-3 rounded text-sm "
      />
    </div>
  );
};

export default Searchbar;
