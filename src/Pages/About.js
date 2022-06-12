import '../App.css';
import { useEffect } from "react";
import { useLocation } from 'react-router-dom'


function About() {
    const location = useLocation()
    const { from } = location.state
    useEffect(() => {
        document.title = "Welcome to CGEC Boys Hostel";
        console.log(location.state.name);
    }, [])
    return (
        <div className="App">
            <h1>Hi {location.state.name}</h1>
        </div>
    );
}

export default About;
