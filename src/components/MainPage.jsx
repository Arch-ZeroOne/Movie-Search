//* Solved the issue of not being able to useLocation in the react router by transfering the <BrowserRouter /> to the outermost component which is in this case is 'main.jsx';
//* Got the location of the current path using the useLocation() from the react router library
import Searchbar from "./Searchbar";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Navbars from "./Navbars";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Movies from "./Movie-Types/Movies/Movies";
import TopRated from "./Movie-Types/TopRated/TopRated";
import TvShows from "./Movie-Types/TvShows/TvShows";
import UpcomingMovies from "./Movie-Types/UpcomingMovies/UpcomingMovies";
import { useCurrentLocation } from "./ContextProvider/ContextProvider";
const MainPage = () => {
  const { location, setLocation } = useCurrentLocation();
  const browserPath = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (browserPath.pathname === "/") {
      setLocation("Home");
    } else if (browserPath.pathname === "/Movies") {
      setLocation("Movies");
    } else if (browserPath.pathname === "/Upcoming") {
      setLocation("Upcoming");
    } else if (browserPath.pathname === "/Tvshows") {
      setLocation("TV Shows");
    }
  }, [browserPath]);

  const setResult = (event) => {
    handleSearchQuery(event.target.value);
  };

  //*Prevent overwriting
  useEffect(() => {
    const location = JSON.parse(localStorage.getItem("Route"));
    if (location) {
      const current = location[0].route;
      navigate(current);
    }
  }, []);

  //* Saving sessions to localstorage
  useEffect(() => {
    const route = [{ route: browserPath.pathname }];
    localStorage.setItem("Route", JSON.stringify(route));
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center gap-5 ">
        <Searchbar current_place={location} />
        <Navbars />
        <h1 className="text-white font-mono  text-lg md:text-left">
          {location}
        </h1>
        <div>
          <Routes>
            <Route path="/" element={<TopRated />} />
            <Route path="Movies" element={<Movies />} />
            <Route path="Upcoming" element={<UpcomingMovies />} />
            <Route path="Tvshows" element={<TvShows />} />
          </Routes>
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
