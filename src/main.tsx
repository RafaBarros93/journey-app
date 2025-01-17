import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./pages/app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
