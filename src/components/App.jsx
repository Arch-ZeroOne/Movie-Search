import React, { useEffect } from "react";
import MainPage from "./MainPage";
import ContextProvider from "./ContextProvider/ContextProvider";
import MovieDetails from "./MovieDetails/MovieDetails";
import "overlayscrollbars/overlayscrollbars.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();

  return (
    <ContextProvider>
      <MainPage />
    </ContextProvider>
  );
}

export default App;
