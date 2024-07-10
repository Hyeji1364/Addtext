import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./App";
import "./assets/scss/vars.scss"; // 글로벌 스타일

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  document.getElementById("root")
);
