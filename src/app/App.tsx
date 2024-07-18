import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../css/App.css";
import { NavbarHome } from "./components/header";
import "../css/navbar.css";
import "../css/Humming.css";
import "../css/AI.css";
import "../css/video.css";
import "../css/diversity.css";
import "../css/musicPlay.css";
import "../css/picture.css";
import "../css/huhming.css";
import "../css/imgCollection.css";

import ProfessionalAI from "./screens/homePage/Ai";
import VideoGraphytoon from "./screens/homePage/GrapVideo";
import Diversity from "./screens/homePage/Diversity";
import PlayDirection from "./screens/homePage/MusicPlay";
import Picture from "./screens/homePage/Picture";
import HuhmingBlock from "./screens/homePage/Huhming";
import ImageCollection from "./screens/homePage/ImgCollection";
import HummingBlocks from "./screens/homePage/Humming";

function App() {
  return (
    <div>
      <Router>
        <NavbarHome />
        <Diversity />
        <VideoGraphytoon />
        <ProfessionalAI />
        <PlayDirection />
        <HummingBlocks />
        <HuhmingBlock />
        <Picture />
        <ImageCollection />
      </Router>
    </div>
  );
}

export default App;
