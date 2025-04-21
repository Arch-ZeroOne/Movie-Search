import React from "react";
import Searchbar from "./Search/Searchbar";
import Navbars from "./Navbars";
import Movies from "./Movie-Types/Movies/Movies";
import TopRated from "./Movie-Types/TopRated/TopRated";
import TvShows from "./Movie-Types/TvShows/TvShows";
import UpcomingMovies from "./Movie-Types/UpcomingMovies/UpcomingMovies";
import BrowserPath from "./Browser/BrowserPath";
import MovieDetails from "./MovieDetails/MovieDetails";
import TvDetails from "./TvShowDetails/TvDetails";
import Localstorage from "./Localstorage/Localstorage";
import { Routes, Route } from "react-router-dom";
import { motion } from "motion/react";
import { useCurrentLocation } from "./ContextProvider/ContextProvider";

const MainPage = () => {
  const { location } = useCurrentLocation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div>
        <BrowserPath />
        <Localstorage />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col justify-items-center items-center gap-5">
              <Searchbar current_place={location} />
              <Navbars />
              <h1 className="text-white font-mono  text-lg md:text-left">
                {location}
              </h1>
              <TopRated />
            </div>
          }
        />

        <Route
          path="/Movies"
          element={
            <div className="flex flex-col justify-items-center items-center gap-5">
              <Searchbar current_place={location} />
              <Navbars />
              <h1 className="text-white font-mono  text-lg md:text-left">
                {location}
              </h1>
              <Movies />
            </div>
          }
        />

        <Route
          path="/Upcoming"
          element={
            <div className="flex flex-col justify-items-center items-center gap-5">
              <Searchbar current_place={location} />
              <Navbars />
              <h1 className="text-white font-mono  text-lg md:text-left">
                {location}
              </h1>
              <UpcomingMovies />
            </div>
          }
        />
        <Route
          path="/Tvshows"
          element={
            <div className="flex flex-col justify-items-center items-center gap-5">
              <Searchbar current_place={location} />
              <Navbars />
              <h1 className="text-white font-mono  text-lg md:text-left">
                {location}
              </h1>
              <TvShows />
            </div>
          }
        />

        <Route path="/:id" element={<MovieDetails />} />
        <Route path="/Movies/:id" element={<MovieDetails />} />
        <Route path="/Upcoming/:id" element={<MovieDetails />} />
        <Route path="/Tvshows/:id" element={<TvDetails />} />
        <Route path="/Details/:id" element={<MovieDetails />} />
      </Routes>
    </motion.div>
  );
};

export default MainPage;
