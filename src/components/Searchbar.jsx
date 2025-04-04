import React, { useContext, useEffect, useState } from "react";
import {
  MovieContext,
  TopRatedContext,
  UpcomingContext,
  TvShowsContext,
  ValueContext,
  UpcomingCopy,
  TopRatedCopy,
} from "./App";
import axios from "axios";

const Searchbar = ({ current_place }) => {
  //Used the context from the states in the app
  //When the context is changed here it automatically affects the context in the main file in short: It updates
  const { movies, setMovies } = useContext(MovieContext);
  const { topRated, setTopRated } = useContext(TopRatedContext);
  const { upcoming, setUpcoming } = useContext(UpcomingContext);
  const { tvShows, setTvShows } = useContext(TvShowsContext);
  const { topRatedCopy } = useContext(TopRatedCopy);
  const { upcomingCopy } = useContext(UpcomingCopy);
  const { setValue } = useContext(ValueContext);
  const [inputValue, setIputValue] = useState("");

  const handleChange = (event) => {
    setIputValue(event.target.value);
  };

  useEffect(() => {
    let url = "",
      lowercased = "",
      filtered = "";
    if (inputValue) {
      switch (current_place) {
        case "TV Shows":
          url = `https://api.themoviedb.org/3/search/tv?query=${inputValue}&include_adult=false&language=en-US&page=1`;
          break;
        case "Movies":
          url = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`;
          break;
        case "Home":
          //*Updating the title values to lowercase
          lowercased = topRatedCopy.map((item) => ({
            ...item,
            title: item.title.toLowerCase(),
          }));

          //*filtering the values by the value of the input
          filtered = lowercased.filter((item) =>
            item.title.includes(inputValue.toLowerCase())
          );

          setTopRated(filtered);
          break;

        case "Upcoming":
          //*Updating the title values to lowercase
          lowercased = upcomingCopy.map((item) => ({
            ...item,
            title: item.title.toLowerCase(),
          }));

          //*filtering the values by the value of the input
          filtered = lowercased.filter((item) =>
            item.title.includes(inputValue.toLowerCase())
          );

          setUpcoming(filtered);
          break;
      }
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
    if (url) {
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
            default:
              setTvShows(response.data.results);
              break;
          }
        });
    }
  }, [inputValue]);

  return (
    <div className="w-[80%] text-white p-5 text-sm">
      <input
        type="text"
        placeholder={`Search in ${current_place}`}
        onChange={handleChange}
        className="bg-[#1F2937] mr-auto ml-auto font-mono w-full p-3 rounded-lg text-sm max-sm:text-center"
      />
    </div>
  );
};

export default Searchbar;
