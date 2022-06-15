// import './App.css';
import { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  FooterEndText,
} from "./HomeStyle";

import slider1 from "../../images/hostel1.jpg";

function Home() {
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";
  });
  return (
    <div className="App">
      <Navbar />
      <Box>
        <Container>
          <Row>
            <img src={slider1} />
          </Row>
          <Row>
            <Column>
              <Heading>Room Change</Heading>
            </Column>
            <Column>
              <Heading>Complaints</Heading>
            </Column>
            <Column>
              <Heading>Fooding</Heading>
            </Column>
          </Row>
        </Container>
        <hr />
        <FooterEndText>
          Copyright © All Rights Reserved | Developed by DST
        </FooterEndText>
      </Box>
      <Footer />
    </div>
  );
}

export default Home;
