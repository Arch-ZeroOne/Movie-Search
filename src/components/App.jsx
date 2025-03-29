//* Solved the issue of not being able to useLocation in the react router by transfering the <BrowserRouter /> to the outermost component which is in this case is 'main.jsx';
//* Got the location of the current path using the useLocation() from the react router library
import Searchbar from "./Searchbar";
import React, { useEffect, useState } from "react";
import TopRated from "./Movie-Types/TopRated";
import Movies from "./Movie-Types/Movies";
import UpcomingMovies from "./Movie-Types/UpcomingMovies";
import TvShows from "./Movie-Types/TvShows";

import {
  getMovies,
  getTopRated,
  getTvShows,
  getUpcoming,
} from "./Api/FetchRequest";
import Navbars from "./Navbars";
//*Imports needed for React router to be able to use the components
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

export const MovieContext = React.createContext();
export const TopRatedContext = React.createContext();
export const UpcomingContext = React.createContext();
export const TvShowsContext = React.createContext();

const App = () => {
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [location, setLocation] = useState("");
  const browserPath = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    const browser_path = {
      path: browserPath.pathname,
    };
    const arrayHolder = [];
    arrayHolder[0] = browser_path;
    localStorage.setItem("Location", JSON.stringify(arrayHolder));
  }, [location]);

  useEffect(() => {
    const item = localStorage.getItem("Location");
    navigate(item.pathname);
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
  });

  return (
    <div className="flex flex-col items-center gap-5 ">
      <MovieContext.Provider value={{ movies, setMovies }}>
        <TopRatedContext.Provider value={{ topRated, setTopRated }}>
          <UpcomingContext.Provider value={{ upcoming, setUpcoming }}>
            <TvShowsContext.Provider value={{ tvShows, setTvShows }}>
              <Searchbar current_place={location} onChange={setResult} />

              <Navbars />
              <h1 className="text-white font-mono  text-lg md:text-left">
                {location}
              </h1>
              <div className="grid grid-cols-1 justify-items-center gap-10 cards w-full text-sm sm:grid-cols-2 max-sm:grid-cols-1 md:max-lg:grid-cols-3 lg:grid-cols-4   xl:grid-cols-5">
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
    </div>
  );
};

export default App;
