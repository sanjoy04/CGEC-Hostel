import "../../App.css";
import { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import {
  Box,
  Container,
  Row,
  Column,
  OuterRow,
  Heading,
  InnerBox,
} from "./HomeStyle";

import slider1 from "../../images/MAKAUT.jpg";

function Home() {
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";
  });
  return (
    <div className="bg">
      <Navbar />
      <Box>
        <Container>
          <OuterRow>
            <Column>
              <Row>
                <Column>
                  <InnerBox>
                    <Heading>Room Change</Heading>
                  </InnerBox>
                </Column>
                <Column>
                  <InnerBox>
                    <Heading>Complaints</Heading>
                  </InnerBox>
                </Column>
                <Column>
                  <InnerBox>
                    <Heading>Fooding</Heading>
                  </InnerBox>
                </Column>
              </Row>
              <Row>
                <Column>
                  <InnerBox>
                    <Heading>Room Change</Heading>
                  </InnerBox>
                </Column>
                <Column>
                  <InnerBox>
                    <Heading>Complaints</Heading>
                  </InnerBox>
                </Column>
                <Column>
                  <InnerBox>
                    <Heading>Fooding</Heading>
                  </InnerBox>
                </Column>
              </Row>
            </Column>
            <Column>
              <h3>Notice</h3>
              <Row>Notic</Row>
              <Row>Notic</Row>
              <Row>Notic</Row>
              <Row>Notic</Row>
              <Row>Notic</Row>
              <Row>Notic</Row>
            </Column>
          </OuterRow>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}

export default Home;
