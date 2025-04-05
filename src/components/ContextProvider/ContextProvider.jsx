import React, { useEffect, useState, useContext } from "react";

const MovieContext = React.createContext();
const TopRatedContext = React.createContext();
const UpcomingContext = React.createContext();
const TvShowsContext = React.createContext();
const UpcomingCopyContext = React.createContext();
const TopRatedCopyContext = React.createContext();

export const useMovie = () => {
  return useContext(MovieContext);
};
export const useTopRated = () => {
  return useContext(TopRatedContext);
};
export const useUpcoming = () => {
  return useContext(UpcomingContext);
};
export const useTvShows = () => {
  return useContext(TvShowsContext);
};
export const useUpcomingCopy = () => {
  return useContext(UpcomingCopyContext);
};
export const useTopRatedCopy = () => {
  return useContext(TopRatedCopyContext);
};
export default function StateContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [upcomingCopy, setUpcomingCopy] = useState([]);
  const [topRatedCopy, setTopRatedCopy] = useState([]);

  return (
    <>
      <MovieContext.Provider value={{ movies, setMovies }}>
        <TopRatedContext.Provider value={{ topRated, setTopRated }}>
          <UpcomingContext.Provider value={{ upcoming, setUpcoming }}>
            <TvShowsContext.Provider value={{ tvShows, setTvShows }}>
              <UpcomingCopyContext.Provider
                value={{ upcomingCopy, setUpcomingCopy }}
              >
                <TopRatedCopyContext.Provider
                  value={{ topRatedCopy, setTopRatedCopy }}
                >
                  {children}
                </TopRatedCopyContext.Provider>
              </UpcomingCopyContext.Provider>
            </TvShowsContext.Provider>
          </UpcomingContext.Provider>
        </TopRatedContext.Provider>
      </MovieContext.Provider>
    </>
  );
}
