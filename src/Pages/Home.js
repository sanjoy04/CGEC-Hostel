import './App.css';
import { useEffect } from "react";
import Navbar from '../Components/Navbar';

function Home() {
    useEffect(() => {
        document.title = "Welcome to CGEC Boys Hostel";
    })
    return (
        <div className="App">

        </div>
    );
}

export default Home;
