import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";  // Utilisation de HashRouter
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>  {/* Remplacer BrowserRouter par HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
