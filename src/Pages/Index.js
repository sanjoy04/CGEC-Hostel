// import './App.css';

import { useEffect } from "react";
import Navbar from "../Components/Navbar";

function Index() {
    useEffect(() => {
        document.title = "Welcome to CGEC Boys Hostel";
    })
    return (
        
        <div className="App">
            <Navbar />

        </div>
    );
}

export default Index;
