import React from "react";
import Login from "./Login/Login.js";
import "./App.css";
import UnsplashImages from "./Login/UnsplashImages.js";

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import "animate.css";

function App() {
  return (
    <div
      className="p-d-flex p-flex-row"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div
        className="p-d-flex p-jc-center p-ai-center"
        style={{ width: "30%" }}
      >
        <Login></Login>
      </div>
      <div
        className="p-d-flex p-jc-start p-ai-center"
        style={{ width: "70%", background: "#333" }}
      >
        <UnsplashImages></UnsplashImages>
      </div>
    </div>
  );
}

export default App;
