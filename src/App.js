import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import Navbar from './Components/Navbar';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from './Pages/IndexFiles/Index';
import About from './Pages/AboutPages/About';
import Contact from './Pages/ContactPages/Contact';
import Home from './Pages/HomePages/Home';
import Facilities from './Pages/FacilitiesPages/Facilities';

function App() {
    useEffect(() => {
        document.title = "Welcome to CGEC Boys Hostel";
    })
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/Index" element={<Index />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/*" element={<Index />} />
                <Route path="/Facilities" element={<Facilities/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
