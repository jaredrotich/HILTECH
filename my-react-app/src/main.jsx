import React from "react";
import ReactDom from "react-router-dom";
import App from "./App";
import "./App.css"


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);