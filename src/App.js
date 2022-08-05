import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./Pages/IndexFiles/Index";
import About from "./Pages/AboutPages/About";
import Contact from "./Pages/ContactPages/Contact";
import Home from "./Pages/HomePages/Home";
import Facilities from "./Pages/FacilitiesPages/Facilities";
import FAQ from "./Pages/FAQ";
import Complain from "./Pages/Admin/Complains";
import Login from "./Pages/Admin/Login";
import Meal from "./Pages/Admin/Meal";
import RoomChange from "./Pages/Admin/RoomChange";
import Students from "./Pages/Admin/Students";
import Admin from "./Pages/Admin";

function App() {
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Index" element={<Index />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/*" element={<Index />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/admin" element={<Admin />} />
        {/* admin */}
        <Route path="admin">
          <Route path="Complain" element={<Complain />} />
          <Route path="Login" element={<Login />} />
          <Route path="Meal" element={<Meal />} />
          <Route path="RoomChange" element={<RoomChange />} />
          <Route path="Students" element={<Students />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
