// import './App.css';
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./Contact.css";
import Form from "react-bootstrap/Form";

function Contact() {
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";
  });
  return (
    <div className="App">
      <Navbar />
      <h3>Contact</h3>
      <Container className="">
        <Row>
          <Col>
            <div class="info-content">
              <h4>Address</h4>
              <div class="text">
                <p></p>
                <p>Harinchawra,</p>

                <p>
                  <strong>Post-</strong> Ghughumari,
                </p>

                <p>
                  <strong>District-</strong> Cooch Behar,
                </p>

                <p>West Bengal</p>

                <p>736170</p>
              </div>
            </div>
          </Col>
          <Col>
            <div class="info-content">
              <h4>Phone</h4>
              <div class="text">
                <p>
                  <strong>Principal Office:</strong> +91 03582-233040
                </p>

                <p>
                  <strong>Registrar Officer:</strong> +91 03582-233042
                </p>

                <p>
                  <strong>Security Guards:</strong> +91 03582-233041
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div class="info-content">
              <h4>Email</h4>
              <div class="text">
                <p></p>
                <p>Principlecgec@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <div class="col-md-6">
              <div id="googlemap" style="width:100%; height:350px;">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14308.096242982443!2d89.4601434!3d26.29332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe4952b5891bb2389!2sCooch%20Behar%20Government%20Engineering%20College!5e0!3m2!1sen!2sin!4v1630304221764!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div> */}
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control type="text" placeholder="Enter your subject here" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;
