import MainPage from "./MainPage.jsx";
import ContextProvider from "../ContextProvider/ContextProvider.jsx";
import MovieDetails from "../MovieDetails/MovieDetails.jsx";
import "overlayscrollbars/overlayscrollbars.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <ContextProvider>
      <MainPage />
    </ContextProvider>
  );
}

export default App;
