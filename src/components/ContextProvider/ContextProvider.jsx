import React, { useEffect, useState, useContext } from "react";
import Trailer from "../Trailer/Trailer";

const MovieContext = React.createContext();
const TopRatedContext = React.createContext();
const UpcomingContext = React.createContext();
const TvShowsContext = React.createContext();
const UpcomingCopyContext = React.createContext();
const TopRatedCopyContext = React.createContext();
const LocationContext = React.createContext();
const KeyContext = React.createContext();
const VisibilityContext = React.createContext();
const TrailerContext = React.createContext();

//* Custom Hooks for using the global context
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
export const useCurrentLocation = () => {
  return useContext(LocationContext);
};
export const useCurrentKey = () => {
  return useContext(KeyContext);
};
export const useVisibility = () => {
  return useContext(VisibilityContext);
};
export const useCurrentTrailer = () => {
  return useContext(TrailerContext);
};
//* Receives a children prop that contains what the context provider will wrap
export default function StateContextProvider({ children }) {
  //* Global states
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [upcomingCopy, setUpcomingCopy] = useState([]);
  const [topRatedCopy, setTopRatedCopy] = useState([]);
  const [location, setLocation] = useState("");
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState("");
  const [hastrailer, setHasTrailer] = useState(false);
  return (
    <>
      <TrailerContext.Provider value={{ hastrailer, setHasTrailer }}>
        <VisibilityContext value={{ visible, setVisible }}>
          <KeyContext value={{ key, setKey }}>
            <LocationContext.Provider value={{ location, setLocation }}>
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
            </LocationContext.Provider>
          </KeyContext>
        </VisibilityContext>
      </TrailerContext.Provider>
    </>
  );
}
