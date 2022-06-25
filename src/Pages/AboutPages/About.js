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
  Responsibitity,
  Heading2,
  Row,
} from "./AbouStyles";

function About() {
  return (
    <div className="App">
      <Navbar />
      <MainContainer>
        <AboutTop>
          <Heading1>
            <Typed
              strings={["About the hostel", "Explore your Life!", "Good Luck!"]}
              typeSpeed={70}
              backSpeed={50}
              loop
            />
          </Heading1>
          <AboutText>
            A hostel is a place where students live to study or for work. It is
            usually supervised by a hostel manager and residents. Students
            living in hostels experience their hostel life. These hostels
            eventually became their homes. Hostels are primarily built, taking
            into account the needs of struggling students and working-class
            officials. It provides people with adequate housing, shelter, and
            food at affordable prices. The hostel mainly consists of one bed, a
            room shared by two or three people, a kitchen and a shared bathroom.
          </AboutText>
        </AboutTop>
        <Responsibitity>
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
        </Responsibitity>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default About;
