// import './App.css';
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = "Welcome to CGEC Boys Hostel";
    })
    return (
        <div className="App">
<h1>Home</h1>
        </div>
    );
}

export default Home;
