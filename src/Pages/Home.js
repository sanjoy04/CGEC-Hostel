// import './App.css';
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";
  });
  return (
    <div className="App">
      <Navbar />
      <h1>Home</h1>
      <Footer />
    </div>
  );
}

export default Home;
