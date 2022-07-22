
import '../App.css';
import { useEffect } from "react";
import Navbar_ from '../Components/Navbar';
import Footer from '../Components/Footer';

function Index() {
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";
  });

  return (

    <div className="App">
      <Navbar_ />
      <Footer />
    </div>

  );

}
export default Index;

