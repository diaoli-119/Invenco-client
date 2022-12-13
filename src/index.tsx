import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RoutePath } from "./Routes/Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RoutePath />
  </React.StrictMode>
);
