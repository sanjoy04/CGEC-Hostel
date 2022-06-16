import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { Container, Col } from "react-bootstrap";
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
    <div className="bg">
      <Navbar />
      <MainContainer>
        <AboutTop>
          <Heading1>About the hostel</Heading1>
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
        </AboutTop>
        <Responsibitity>
          <Heading2>Person with responsibilities</Heading2>
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
                    Sajamal Gayen
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
                    Sajamal Gayen
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
                    Dipa Chakroborty
                  </People>
                  <People>
                    <img
                      src="https://img.icons8.com/color/48/undefined/circled-user-male-skin-type-4--v1.png"
                      height="30px"
                    />{" "}
                    Bapi Mahato
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
