import React, { useEffect } from "react";
import MainPage from "./MainPage";
import ContextProvider from "./ContextProvider/ContextProvider";
import MovieDetails from "./MovieDetails/MovieDetails";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();

  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={`/movie/${location.pathname}`} element={<MovieDetails />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
