import React, { useEffect } from "react";
import { searchMovie, searchTv } from "../Api/FetchRequest";
import {
  useMovie,
  useTopRated,
  useTvShows,
  useUpcoming,
  useFilteredUp,
  useFilteredTop,
  useValue,
} from "../ContextProvider/ContextProvider";

const Searchbar = ({ current_place }) => {
  const { setMovies } = useMovie();
  const { setTopRated } = useTopRated();
  const { setUpcoming } = useUpcoming();
  const { setTvShows } = useTvShows();
  const { filteredUp } = useFilteredUp();
  const { filteredTop } = useFilteredTop();
  const { inputValue, setInputValue } = useValue();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  //Handles the API request for searching movies
  useEffect(() => {
    if (inputValue) {
      const searchMovies = async () => {
        const movie = await searchMovie(inputValue);
        setMovies(movie.results);
      };
      const searchTvShow = async () => {
        const tv = await searchTv(inputValue);
        setTvShows(tv.results);
      };
      searchMovies();
      searchTvShow();
    }
  }, [inputValue]);

  //Handles the filtering of state
  useEffect(() => {
    if (inputValue) {
      const filtered_top = filteredTop.filter((movie) =>
        movie.title.includes(inputValue)
      );
      const filtered_upc = filteredUp.filter((movie) =>
        movie.title.includes(inputValue)
      );
      setTopRated(filtered_top);
      setUpcoming(filtered_upc);
    }
  }, [inputValue]);

  return (
    <div className="w-[80%] text-white p-5 text-sm">
      <input
        type="text"
        placeholder={`Search in ${current_place}`}
        className="bg-[#1F2937] mr-auto ml-auto font-[Winky_Rough] w-full p-3 rounded-lg  text-[16px]   max-sm:text-center"
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchbar;
