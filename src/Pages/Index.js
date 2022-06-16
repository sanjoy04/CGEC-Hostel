
import '../App.css';
import { useEffect, useState } from "react";
import Navbar_ from '../Components/Navbar';
import Footer from '../Components/Footer';
import Slider from '../Components/Slider';

function Index() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";
  });

  return (

    <div className="App">
      <Navbar_ />
      <div className='parallax'></div>
<<<<<<< HEAD
      {/* <Slider /> */}
=======
      <Slider />
>>>>>>> 1e8029b06d1c05b482aa73aac800c04c78a1070d
      <Footer />
    </div>

  );

}
export default Index;

