import React from "react";
import MainPage from "./MainPage";
import ContextProvider from "./ContextProvider/ContextProvider";
import "overlayscrollbars/overlayscrollbars.css";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();

  return (
    <ContextProvider>
      <MainPage />
    </ContextProvider>
  );
}

export default App;
