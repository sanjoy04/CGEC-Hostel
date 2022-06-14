
import '../App.css';
import { useEffect, useState } from "react";
import Navbar_ from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Carousel } from 'bootstrap';



function Index() {
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";
  });

  return (
    <div className='App'>
      <Navbar_ />
      <div className='parallax'></div>
      <Footer />
    </div>
  )



}

export default Index;

