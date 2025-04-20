import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const LocalStorage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  //*Prevent overwriting
  useEffect(() => {
    const location = JSON.parse(localStorage.getItem("Route"));
    if (location) {
      const current = location[0].route;
      navigate(current);
    }
  }, []);

  //* Saving sessions to localstorage
  useEffect(() => {
    const route = [{ route: pathname }];
    localStorage.setItem("Route", JSON.stringify(route));
  }, [pathname]);

  return null;
};

export default LocalStorage;
