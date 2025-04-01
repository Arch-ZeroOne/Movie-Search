//* Solved the issue of not being able to useLocation in the react router by transfering the <BrowserRouter /> to the outermost component which is in this case is 'main.jsx';
//* Got the location of the current path using the useLocation() from the react router library
import Searchbar from "./Searchbar";
import React, { useEffect, useState } from "react";
import TopRated from "./Movie-Types/TopRated";
import Movies from "./Movie-Types/Movies";
import UpcomingMovies from "./Movie-Types/UpcomingMovies";
import TvShows from "./Movie-Types/TvShows";
import { motion, useScroll } from "framer-motion";

import {
  getMovies,
  getTopRated,
  getTvShows,
  getUpcoming,
} from "./Api/FetchRequest";
import Navbars from "./Navbars";
//*Imports needed for React router to be able to use the components
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import axios from "axios";

export const MovieContext = React.createContext();
export const TopRatedContext = React.createContext();
export const UpcomingContext = React.createContext();
export const TvShowsContext = React.createContext();
export const ValueContext = React.createContext();

const App = () => {
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [location, setLocation] = useState("");
  const [value, setValue] = useState("");
  const browserPath = useLocation();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    //* If the path change it sets the location state to the name of the url path
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

  //* Fetching movies
  useEffect(() => {
    const movie = async () => {
      const movies = await getMovies();
      setMovies(movies.results);
    };
    movie();
  }, []);

  //*Fetching the the top rate movies
  useEffect(() => {
    const topRated = async () => {
      const topRate = await getTopRated();

      setTopRated(topRate.results);
    };
    topRated();
  }, []);

  //* Fetching the upcoming movies
  useEffect(() => {
    const upcoming = async () => {
      const upcoming = await getUpcoming();
      setUpcoming(upcoming.results);
    };
    upcoming();
  }, []);

  const setResult = (event) => {
    handleSearchQuery(event.target.value);
  };

  //* Fetching the tv shows
  useEffect(() => {
    const tv = async () => {
      const tvshows = await getTvShows();
      setTvShows(tvshows.results);
    };
    tv();
  }, []);

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
        <ValueContext.Provider value={{ setValue }}>
          <MovieContext.Provider value={{ setMovies }}>
            <TopRatedContext.Provider value={{ setTopRated }}>
              <UpcomingContext.Provider value={{ setUpcoming }}>
                <TvShowsContext.Provider value={{ setTvShows }}>
                  <Searchbar current_place={location} onChange={setResult} />
                  <Navbars />
                  <h1 className="text-white font-mono  text-lg md:text-left">
                    {location}
                  </h1>
                  <div className="grid grid-cols-1 justify-items-center gap-10 cards w-full text-sm sm:grid-cols-2 max-sm:grid-cols-1 md:max-lg:grid-cols-3 lg:grid-cols-4   xl:grid-cols-5 ">
                    <Routes>
                      <Route
                        path="/"
                        element={topRated.map((topRated) => (
                          <TopRated
                            poster_path={topRated.poster_path}
                            title={topRated.title}
                          />
                        ))}
                      />
                      <Route
                        path="Movies"
                        element={movies.map((movie) => (
                          <Movies
                            poster_path={movie.poster_path}
                            title={movie.title}
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
                          <TvShows
                            poster_path={show.poster_path}
                            name={show.name}
                          />
                        ))}
                      />
                    </Routes>
                  </div>
                </TvShowsContext.Provider>
              </UpcomingContext.Provider>
            </TopRatedContext.Provider>
          </MovieContext.Provider>
        </ValueContext.Provider>
      </div>
    </motion.div>
  );
};

export default App;
