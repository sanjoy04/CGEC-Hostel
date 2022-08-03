import "../../App.css";
import "./Index.css";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Typed from "react-typed";
import { Container, Row, Col } from "react-bootstrap";
import {
  Heading,
  AboutText,
  MainContainer,
  IndexTop,
  RowIn,
} from "./IndexStyles";

import hostel_rooms from "../../images/hostel-rooms.jpg";
import hostel_beds from "../../images/hostel-beds.jpg";
import ragging_free from "../../images/ragging-free.png";
import { useNavigate } from "react-router-dom";

function Index() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";

    if (localStorage.getItem("email")) {
      navigate("/Home")
    }
  });

  return (
    <div className="App">
      <Navbar />
      <MainContainer className="main-container">
        <IndexTop>
          <Heading>
            <Typed
              strings={[
                "Hey!!!  Welcome to Sukanta Chhatrabas",
                "Explore your Life!",
                "Good Luck!",
              ]}
              typeSpeed={70}
              backSpeed={50}
              loop
            />
          </Heading>
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
        <RowIn>
          <Col className="section">
            <div className="cards">
              <div className="image">{<img src={hostel_rooms}></img>}</div>
              <div className="text">
                <p>In our hostel we have total 60 bed rooms</p>
              </div>
            </div>
          </Col>
          <Col className="section">
            <div className="cards">
              <div className="image">{<img src={hostel_beds}></img>}</div>
              <div className="text">
                <p>There we have 180 student capacity in our hostel</p>
              </div>
            </div>
          </Col>
          <Col className="section">
            <div className="cards">
              <div className="image">{<img src={ragging_free}></img>}</div>
              <div className="text">
                <p>Your hostell is completly ragging free</p>
              </div>
            </div>
          </Col>
        </RowIn>
      </MainContainer>
      <Footer />
    </div>
  );
}
export default Index;
