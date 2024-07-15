import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../css/App.css";
import { NavbarHome } from "./components/header";
import "../css/navbar.css";
import "../css/Humming.css";
import HummingBlocks from "./screens/homePage/Humming";

function App() {
  return (
    <div>
      <Router>
        <NavbarHome />
        <HummingBlocks />
      </Router>
    </div>
  );
}

export default App;
