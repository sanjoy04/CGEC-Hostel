import "../../App.css";
import "./Index.css";
import { useEffect, useState } from "react";
import Navbar_ from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Slider from "../../Components/Slider";

function Index() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";
  });

  return (
    <div className="bg">
      <Navbar_ />
      <div className="parallax"></div>
      <Footer />
    </div>
  );
}
export default Index;
