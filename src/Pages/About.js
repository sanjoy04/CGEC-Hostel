import "../App.css";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";

import { useLocation } from "react-router-dom";

function About() {
  return (
    <div className="App">
      <Navbar />
      <h1>About</h1>
    </div>
  );
}

export default About;
