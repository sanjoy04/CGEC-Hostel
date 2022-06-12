import './App.css';
import { useEffect } from "react";
import Navbar from '../Components/Navbar';

function About() {
    useEffect(() => {
        document.title = "Welcome to CGEC Boys Hostel";
    })
    return (
        <div className="App">

        </div>
    );
}

export default About;
