import { use, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useVisibility } from "../ContextProvider/ContextProvider";

const ScrollToTop = () => {
  //destructures the pathname key
  const { pathname } = useLocation();
  const { setVisible } = useVisibility();

  //listens to route change then scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(false);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
