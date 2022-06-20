import "../../App.css";
import "./Index.css";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Slider from "../../Components/Slider";
import {
  Heading,
  AboutText,
  MainContainer,
  IndexTop,
} from "./IndexStyles";

function Index() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";
  });

  return (
    <div className="App">
      <Navbar />
      <MainContainer className="main-container">
        <IndexTop>
          <Heading>Hey!!!  Welcome to Sukanta Chhatrabas</Heading>
          <AboutText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quasi
            aperiam eaque impedit dolor deserunt eos cumque dicta harum!
            Voluptates, quas? Dicta alias labore accusantium quas repudiandae,
            facere voluptates ex et inventore sed amet sequi non ea molestiae
            esse. Ex rerum neque nulla, eos facere ratione optio exercitationem
            reiciendis blanditiis! Aut adipisci sunt ut, quaerat hic alias
            delectus provident? Aut enim minima veritatis recusandae! Et,
            blanditiis adipisci dolore neque sit quis sequi magnam iste repellat
            nostrum perspiciatis asperiores cum? Ratione qui velit, impedit
            provident architecto atque consequuntur! Ipsa nihil maxime soluta
            ipsum fugit nostrum id aliquid facilis in, voluptatibus deleniti.
          </AboutText>
        </IndexTop>
      </MainContainer>
      <Slider/>
      <Footer />
    </div>
  );
}
export default Index;
