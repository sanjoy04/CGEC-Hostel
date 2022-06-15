
import '../App.css';
import { useEffect, useState } from "react";
import Navbar_ from '../Components/Navbar';
import Footer from '../Components/Footer';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from '../Components/Slider';


function Index() {

  const [index, setIndex] = useState(0);


  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // }



  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";


  });

  return (

    <div>
      <div>
        <Navbar_ />
      </div>
      <div>
        <Slider />
      </div>

      <div>
        <Footer />
      </div>
    </div>

  );

}
export default Index;

