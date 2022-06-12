import '../App.css';
import { useEffect } from "react";

function Index() {
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";
  });
  return (
    <div className="App">
      <h1>Index</h1>
      <div className="parallax"></div>
    </div>
    
  );
}

export default Index;
