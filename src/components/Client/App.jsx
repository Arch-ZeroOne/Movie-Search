import MainPage from "./MainPage.jsx";
import ContextProvider from "../ContextProvider/ContextProvider.jsx";
import "overlayscrollbars/overlayscrollbars.css";
function App() {
  return (
    <ContextProvider>
      <MainPage />
    </ContextProvider>
  );
}

export default App;
