import React, { useState, useContext } from "react";
const MovieContext = React.createContext();
const TopRatedContext = React.createContext();
const UpcomingContext = React.createContext();
const TvShowsContext = React.createContext();
const LocationContext = React.createContext();
const KeyContext = React.createContext();
const VisibilityContext = React.createContext();
const TrailerContext = React.createContext();
const FilteredUp = React.createContext();
const FilteredTop = React.createContext();
const InputValue = React.createContext();
const LoaderContext = React.createContext();

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
export const useFilteredUp = () => {
  return useContext(FilteredUp);
};
export const useFilteredTop = () => {
  return useContext(FilteredTop);
};
export const useValue = () => {
  return useContext(InputValue);
};
export const useLoader = () => {
  return useContext(LoaderContext);
}

//* Receives a children prop that contains what the context provider will wrap
export default function StateContextProvider({ children }) {
  //* Global states
  const [location, setLocation] = useState("");
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState("");
  const [hastrailer, setHasTrailer] = useState(false);
  const [loading,setLoading] = useState(false);

  //*Movies and Tv shows
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [filteredUp, setFilteredUp] = useState([]);
  const [filteredTop, setFilteredTop] = useState([]);
  const [inputValue, setInputValue] = useState();

  return (
    <>
      <LoaderContext.Provider value={{loading,setLoading}}>
      <InputValue.Provider value={{ inputValue, setInputValue }}>
        <FilteredUp.Provider value={{ filteredUp, setFilteredUp }}>
          <FilteredTop.Provider value={{ filteredTop, setFilteredTop }}>
            <TrailerContext.Provider value={{ hastrailer, setHasTrailer }}>
              <VisibilityContext value={{ visible, setVisible }}>
                <KeyContext value={{ key, setKey }}>
                  <LocationContext.Provider value={{ location, setLocation }}>
                    <MovieContext.Provider value={{ movies, setMovies }}>
                      <TopRatedContext.Provider
                        value={{ topRated, setTopRated }}
                      >
                        <UpcomingContext.Provider
                          value={{ upcoming, setUpcoming }}
                        >
                          <TvShowsContext.Provider
                            value={{ tvShows, setTvShows }}
                          >
                            {children}
                          </TvShowsContext.Provider>
                        </UpcomingContext.Provider>
                      </TopRatedContext.Provider>
                    </MovieContext.Provider>
                  </LocationContext.Provider>
                </KeyContext>
              </VisibilityContext>
            </TrailerContext.Provider>
          </FilteredTop.Provider>
        </FilteredUp.Provider>
      </InputValue.Provider>
      </LoaderContext.Provider>
    </>
  );
}
