import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from './Pages/Index';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
