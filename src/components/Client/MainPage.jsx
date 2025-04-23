import React from "react";
import Searchbar from "../Search/Searchbar.jsx";
import Navbars from "./Navbars.jsx";
import Movies from "../Movie-Types/Movies/Movies.jsx";
import TopRated from "../Movie-Types/TopRated/TopRated.jsx";
import TvShows from "../Movie-Types/TvShows/TvShows.jsx";
import UpcomingMovies from "../Movie-Types/UpcomingMovies/UpcomingMovies.jsx";
import BrowserPath from "../Browser/BrowserPath.jsx";
import MovieDetails from "../MovieDetails/MovieDetails.jsx";
import TvDetails from "../TvShowDetails/TvDetails.jsx";
import Localstorage from "../Localstorage/Localstorage.jsx";
import { Routes, Route } from "react-router-dom";
import { motion } from "motion/react";
import { useCurrentLocation } from "../ContextProvider/ContextProvider.jsx";

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
              <h1 className="text-white font-[Winky_Rough]  text-[18px] md:text-left">
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
              <h1 className="text-white font-[Winky_Rough]  text-[18px] md:text-left">
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
              <h1 className="text-white font-[Winky_Rough]  text-[17px] md:text-left">
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
              <h1 className="text-white font-[Winky_Rough]  text-[17px] md:text-left">
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
