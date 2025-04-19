import { use, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  //destructures the pathname key
  const { pathname } = useLocation();

  //listens to route change then scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
