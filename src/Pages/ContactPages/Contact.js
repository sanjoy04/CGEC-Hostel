// import './App.css';
import { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Container, Col, Row, Button } from "react-bootstrap";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import {
  Address,
  Heading,
  Text,
  Line,
  Body,
  Submit,
  Phone,
  Mail,
} from "./ContactStyles";

function Contact() {
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";
  });
  return (
    <div className="App">
      <Navbar />
      <Container className="contact-body">
        <Row className="contact">
          <Col className="col col-md-4">
            <Address class="info-content">
              <Heading>Address</Heading>
              <Text class="text">
                <Line>Harinchawra,</Line>

                <Line>
                  <strong>Post-</strong> Ghughumari,
                </Line>

                <Line>
                  <strong>District-</strong> Cooch Behar,
                </Line>

                <Line>West Bengal</Line>

                <Line>736170</Line>
              </Text>
            </Address>
          </Col>
          <Col className="col col-md-4">
            <Phone class="info-content">
              <Heading>Phone</Heading>
              <Text class="text">
                <Line>
                  <strong>Principal Office:</strong> +91 03582-233040
                </Line>

                <Line>
                  <strong>Registrar Officer:</strong> +91 03582-233042
                </Line>

                <Line>
                  <strong>Security Guards:</strong> +91 03582-233041
                </Line>
              </Text>
            </Phone>
          </Col>
          <Col className="col col-md-4">
            <Mail class="info-content">
              <Heading>Email</Heading>
              <Text class="text">
                <Line></Line>
                <Line>Principlecgec@gmail.com</Line>
              </Text>
            </Mail>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3 col col-md-6">
            <iframe className="form-body"
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=cgec%20boy's%20&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </Col>
          <Col className="mt-3 col col-md-6">
            <Form className="form-body">
              <Body className="body">
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
                  <Form.Control
                    type="text"
                    placeholder="Enter your subject here"
                  />
                </Form.Group>
                <Submit className="submit">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Submit>
              </Body>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;
