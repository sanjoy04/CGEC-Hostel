// import './App.css';
import { useEffect } from "react";
import Navbar from "../Components/Navbar";

function Contact() {
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";
  });
  return (
    <div className="App">
      <Navbar />
      <h1>Contact</h1>
    </div>
  );
}

export default Contact;
