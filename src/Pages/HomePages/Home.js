import "../../App.css";
import "./Home.css";
import { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import section from "../../images/section.png";

import slider1 from "../../images/MAKAUT.jpg";

function Home() {
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";
  });
  return (
    <div className="App">
      <Navbar />
      <div className="fullBody">
        <Container className="home-body">
          <div className="body">
            <Row>
              <Col sm={8} className="">
                <Row>
                  <Col className="section">
                    <div className="outerCard">
                      <span className="card ">
                        <img src={section}></img>
                      </span>
                      <span className="heading">Room Change</span>
                    </div>
                  </Col>
                  <Col className="section">
                    <div className="outerCard">
                      <span className="card ">
                        <img src={section}></img>
                      </span>
                      <span className="heading">Room Change</span>
                    </div>
                  </Col>
                  <Col className="section">
                    <div className="outerCard">
                      <span className="card ">
                        <img src={section}></img>
                      </span>
                      <span className="heading">Room Change</span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="section">
                    <div className="outerCard">
                      <span className="card ">
                        <img src={section}></img>
                      </span>
                      <span className="heading">Room Change</span>
                    </div>
                  </Col>
                  <Col className="section">
                    <div className="outerCard">
                      <span className="card ">
                        <img src={section}></img>
                      </span>
                      <span className="heading">Room Change</span>
                    </div>
                  </Col>
                  <Col className="section">
                    <div className="outerCard">
                      <span className="card ">
                        <img src={section}></img>
                      </span>
                      <span className="heading">Room Change</span>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={4}>
                <div className="notice border border-primary">
                  <h3>Notice</h3>
                  <p>Notice</p>
                  <p>Notice</p>
                  <p>Notice</p>
                  <p>Notice</p>
                  <p>Notice</p>
                  <p>Notice</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
