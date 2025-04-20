import { useEffect } from "react";
import { useCurrentLocation } from "../ContextProvider/ContextProvider";
import { useLocation } from "react-router-dom";
const BrowserPath = () => {
  const { setLocation } = useCurrentLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setLocation("Home");
        break;
      case "/Movies":
        setLocation("Movies");
        break;
      case "/Upcoming":
        setLocation("Upcoming");
        break;
      case "Tvshows":
        setLocation("TV Shows");
        break;
    }
  }, [pathname]);
  return null;
};

export default BrowserPath;
