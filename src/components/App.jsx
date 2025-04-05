import React from "react";
import MainPage from "./MainPage";
import ContextProvider from "./ContextProvider/ContextProvider";
function App() {
  return (
    <ContextProvider>
      <MainPage />
    </ContextProvider>
  );
}

export default App;
