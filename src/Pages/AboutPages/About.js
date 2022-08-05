import "./About.css";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { Container, Col } from "react-bootstrap";
import Typed from "react-typed";
import {
  Heading1,
  Heading,
  AboutText,
  People,
  Peoples,
  MainContainer,
  AboutTop,
  RowIn1,
  ColRowMain,
  ColRow,
  Responsibitity,
  Heading2,
  Row,
} from "./AboutStyles";

import medical from "../../images/cgec_principal.jpg";
import hostel_room from "../../images/hostel.jpeg";
import bathroom from "../../images/hostel-bathroom.jpg";
import mess from "../../images/hostel1.jpg";
import indoor from "../../images/hostel2.jpg";
import outdoor from "../../images/hostel3.jpg";

function About() {
  return (
    <div className="App About">
      <Navbar />
      <AboutTop className="AboutTop">
        <Heading1>
          <span>HEY!!</span>
          <br />
          <span>YOU ARE ABOUT TO KNOW</span>
          <br />
          <span>LOTS OF THINGS ABOUT</span>
        </Heading1>
        <Heading1>
          <Typed
            className="typing-text"
            strings={[" SUKANTA CHHATRABAS CGEC", " LET'S GO"]}
            typeSpeed={120}
            backSpeed={50}
            loop
          />
        </Heading1>
      </AboutTop>
      <MainContainer className="MainContainer">
        <RowIn1 className="Row TopRow">
          <ColRowMain className="ColRowMain">
            <h4>
              Well furnished <span>Bed Rooms</span>
            </h4>
            <ColRow className="about">
              <div className="img">
                {<img src={hostel_room} alt="Hostel"></img>}
              </div>
              <div className="about-text">
                We have world's top class hostel bedroom. Where there is no
                almirah. And the room floor is rough welding floor. By any
                chance if you fall down then Your body will burn.
              </div>
            </ColRow>
          </ColRowMain>
          <ColRowMain className="ColRowMain">
            <h4>
              Top Class <span>Canteen</span>
            </h4>
            <ColRow className="principal-corner">
              <div className="img">
                {<img src={mess} alt="Principal"></img>}
              </div>
              <div className="about-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                cupiditate quod saepe rerum quidem molestias praesentium facilis
                labore
              </div>
            </ColRow>
          </ColRowMain>
        </RowIn1>
        <RowIn1 className="Row">
          <ColRowMain className="ColRowMain">
            <h4>
              Hygenic <span>Bathroom</span>
            </h4>
            <ColRow className="about">
              <div className="img">
                {<img src={bathroom} alt="Hostel"></img>}
              </div>
              <div className="about-text">
              We have topclass bathrooms in the world where No one vomits in
              the basin. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Hic
              </div>
            </ColRow>
          </ColRowMain>
          <ColRowMain className="ColRowMain">
            <h4>
              Medical <span>Service</span>
            </h4>
            <ColRow className="principal-corner">
              <div className="img">
                {<img src={medical} alt="Principal"></img>}
              </div>
              <div className="about-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                cupiditate quod saepe rerum quidem molestias praesentium facilis
                labore
              </div>
            </ColRow>
          </ColRowMain>
        </RowIn1>
        <RowIn1 className="Row">
          <ColRowMain className="ColRowMain">
            <h4>
              Indoor <span>Games</span>
            </h4>
            <ColRow className="about">
              <div className="img">
                {<img src={indoor} alt="Hostel"></img>}
              </div>
              <div className="about-text">
                The college is situated in a prime location in the Cooch Behar
                District. The college, being well connected from any part of the
                Cooch Behar
              </div>
            </ColRow>
          </ColRowMain>
          <ColRowMain className="ColRowMain">
            <h4>
              Outdoor <span>Games</span>
            </h4>
            <ColRow className="principal-corner">
              <div className="img">
                {<img src={outdoor} alt="Principal"></img>}
              </div>
              <div className="about-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                cupiditate quod saepe rerum quidem molestias praesentium facilis
                labore
              </div>
            </ColRow>
          </ColRowMain>
        </RowIn1>
        {/*<Responsibitity>
          <Heading2>Persons with responsibilities</Heading2>
          <Container className="Container">
            <Row>
              <Col className="col">
                <Heading>Hostel Caretakers</Heading>
                <Peoples>
                  <People>
                    <img
                      src="https://img.icons8.com/color/48/undefined/circled-user-male-skin-type-4--v1.png"
                      height="30px"
                    />{" "}
                    Nihar Ranjan Dey
                  </People>
                  <People>
                    <img
                      src="https://img.icons8.com/color/48/undefined/circled-user-male-skin-type-4--v1.png"
                      height="30px"
                    />{" "}
                    Nihar Ranjan Dey
                  </People>
                  <People>
                    <img
                      src="https://img.icons8.com/color/48/undefined/circled-user-male-skin-type-4--v1.png"
                      height="30px"
                    />{" "}
                    Nihar Ranjan Dey
                  </People>
                  <People>
                    <img
                      src="https://img.icons8.com/color/48/undefined/circled-user-male-skin-type-4--v1.png"
                      height="30px"
                    />{" "}
                    Nihar Ranjan Dey
                  </People>
                </Peoples>
              </Col>
              <Col className="col">
                <Heading>Mess Comitee</Heading>
                <Peoples>
                  <People>
                    <img
                      src="https://img.icons8.com/color/48/undefined/circled-user-male-skin-type-4--v1.png"
                      height="30px"
                    />{" "}
                    Taranga Garai
                  </People>
                  <People>
                    <img
                      src="https://img.icons8.com/color/48/undefined/circled-user-male-skin-type-4--v1.png"
                      height="30px"
                    />{" "}
                    Sajamal Gayen
                  </People>
                  <People>
                    <img
                      src="https://img.icons8.com/color/48/undefined/circled-user-male-skin-type-4--v1.png"
                      height="30px"
                    />{" "}
                    SK Nejamuddin
                  </People>
                  <People>
                    <img
                      src="https://img.icons8.com/color/48/undefined/circled-user-male-skin-type-4--v1.png"
                      height="30px"
                    />{" "}
                    Sajamal Gayen
                  </People>
                </Peoples>
              </Col>
              <Col className="col">
                <Heading>Developer Team</Heading>
                <Peoples>
                  <People>
                    <img
                      src="https://img.icons8.com/color/48/undefined/circled-user-male-skin-type-4--v1.png"
                      height="30px"
                    />{" "}
                    Sanjoy Roy
                  </People>
                  <People>
                    <img
                      src="https://img.icons8.com/color/48/undefined/circled-user-male-skin-type-4--v1.png"
                      height="30px"
                    />{" "}
                    Dipantan Chakroborty
                  </People>
                  <People>
                    <img
                      src="https://img.icons8.com/color/48/undefined/circled-user-male-skin-type-4--v1.png"
                      height="30px"
                    />{" "}
                    Tinku Mahato
                  </People>
                </Peoples>
              </Col>
            </Row>
          </Container>
  </Responsibitity>*/}
      </MainContainer>
      <Footer />
    </div>
  );
}

export default About;
