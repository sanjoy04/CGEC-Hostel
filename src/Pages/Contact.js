// import './App.css';
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact() {
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";
  });
  return (
    <div className="App">
      <Navbar />
      <h1>Contact</h1>
      <Footer/>
    </div>
  );
}

export default Contact;
