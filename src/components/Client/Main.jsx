import { createRoot } from "react-dom/client";
import "../../assets/css/output.css";
import "../../assets/css/loader.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
