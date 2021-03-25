import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import ServiceWorkerWrapper from "./serviceWorkerWrapper"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ServiceWorkerWrapper/>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// serviceWorkerRegistration.register();
