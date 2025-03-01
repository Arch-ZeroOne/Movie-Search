import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Test from "./components/Test.jsx";
import "./output.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Test />
  </StrictMode>
);
