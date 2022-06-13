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
      <Container className="contact-body">
        <Row>
          <Col className="col col-md-4">
            <div class="info-content">
              <h4>Address</h4>
              <div class="text">
               
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
          <Col className="col col-md-4">
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
          <Col className="col col-md-4">
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
          <Col className="col col-md-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d947.4095284512034!2d89.46173892637432!3d26.29597633000579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m3!3m2!1d26.296093499999998!2d89.4627278!4m0!5e0!3m2!1sen!2sin!4v1655140945250!5m2!1sen!2sin" height={"400"}></iframe>
          </Col>
          <Col className="col col-md-6">
            <Form className="form-body">
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
              <Button className="submit" variant="primary" type="submit">
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
