import "../../App.css";
import "./Index.css";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Typed from "react-typed";
// import { Container, Row, Col } from "react-bootstrap";
import {
  Heading,
  AboutText,
  MainContainer,
  IndexTop,
  RowIn,
  RowIn1,
  ColRow,
  ColRowMain,
  Col,
} from "./IndexStyles";

import hostel_rooms from "../../images/hostel-rooms.jpg";
import hostel_beds from "../../images/hostel-beds.jpg";
import ragging_free from "../../images/ragging-free.png";
import cgec_principal from "../../images/cgec_principal.jpg";
import cgec_hostel from "../../images/hostel.jpeg";
import { useNavigate } from "react-router-dom";

function Index() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";

    if (localStorage.getItem("email")) {
      navigate("/Home");
    }
  });

  return (
    <div className="App index">
      <Navbar />
      <IndexTop className="indexTop">
        <Heading>
          <span>HEY!!</span>
          <br />
          <span>WELCOME TO SUKANTA CHHATRABAS</span>
          <br />
          <span>COME ON & LET'S ...</span>
        </Heading>
        <Heading>
          <Typed
            className="typing-text"
            strings={[" STAY TOGETHER", " BUILD CAREER", " GROW TOGETHER"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </Heading>
      </IndexTop>
      <MainContainer className="main-container">
        <RowIn1 className="hostel-corner">
          <ColRowMain>
            <h4>
              About <span>Hostel</span>
            </h4>
            <ColRow className="about">
              <div className="img">{<img src={cgec_hostel} alt= "Hostel"></img>}</div>
              <div className="about-text">
                The college is situated in a prime location in the Cooch Behar
                District. The college, being well connected from any part of the
                Cooch Behar
              </div>
            </ColRow>
          </ColRowMain>
          <ColRowMain>
            <h4>
              Principal's <span>Corner</span>
            </h4>
            <ColRow className="principal-corner">
              <div className="img">{<img src={cgec_principal} alt="Principal"></img>}</div>
              <div className="about-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                cupiditate quod saepe rerum quidem molestias praesentium facilis
                labore 
              </div>
            </ColRow>
          </ColRowMain>
        </RowIn1>
      </MainContainer>

      <RowIn className="about-cards">
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
      <Footer />
    </div>
  );
}
export default Index;
