<<<<<<< HEAD
import '../App.css';

function About() {

    return (
        <div className="App">
            <h1>About</h1>
        </div>
    );
=======
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
>>>>>>> 79d1147b3ab67bf4537198681943cbb5bbaa13ad
}

export default About;
