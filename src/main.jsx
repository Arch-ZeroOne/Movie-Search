import { createRoot } from "react-dom/client";
import "./output.css";
import "./assets/css/scrollbar.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
