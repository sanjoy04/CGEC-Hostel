import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import Navbar from './Components/Navbar';

function App() {
    useEffect(() => {
        document.title = "Welcome to CGEC Boys Hostel";
    })
    return (
        <div className="App">
            <Navbar/>
        hi hello
        </div>
    );
}

export default App;
