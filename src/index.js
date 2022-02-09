import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LolApp from "./LolApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LolApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
