import React, { useState } from "react";
import { Nav, Navbar, Container, Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Navbar_() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleCloseLogin = () => setShow1(false);
  const handleShowLogin = () => setShow1(true);

  const handleCloseRegister = () => setShow2(false);
  const handleShowRegister = () => setShow2(true);

  return (
    <>
      <Navbar
        className="nav_bar"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link>
              <Link className="title" to={"/"}>Sukanta Chhatrabas</Link>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="right_align" id="responsive-navbar-nav">
            <Nav className="nav_elements">
              <Nav.Link>
                <Link className="link" to={"/About"}>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to={"/Contact"}>
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to={"/"} onClick={handleShowLogin}>
                  Login/Register
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Login Madal */}
      <Modal centered show={show1} onHide={handleCloseLogin} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Form style={styles.form1style}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-grid gap-10" onClick={handleCloseLogin}>
            <Button variant="primary" type="submit" size="mg">
              Login
            </Button>
          </div>
          <Form.Text className="text-muted">
            Don't have an account?{" "}
            <Link to onClick={handleShowRegister}>
              Register
            </Link>
          </Form.Text>
        </Form>
      </Modal>
      {/* Register modal */}
      <Modal
        show={show2}
        size="lg"
        onHide={handleCloseRegister}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Form style={styles.form2style}>
          {/* name of the form */}
          <Form.Group className="mb-1" controlId="text">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          {/* email of the form */}
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-1" controlId="number">
            <Form.Label>Roll No</Form.Label>
            <Form.Control type="numeric" placeholder="Enter roll no" />
          </Form.Group>
          <div class="d-flex .flex-xxl-row justify-content--between">
            {/* Year of the form */}
            <Form.Group className="mb-1" controlId="text">
              <Form.Label>Year</Form.Label>
              <Form.Control type="text" placeholder="Enter year" />
            </Form.Group>
            {/* Semester of the form */}
            <Form.Group className="mb-1" controlId="text">
              <Form.Label>Semester</Form.Label>
              <Form.Control type="text" placeholder="Enter Semester" />
            </Form.Group>
          </div>
          {/* mobile no of the form */}
          <Form.Group className="mb-1" controlId="number">
            <Form.Label>Mobile No</Form.Label>
            <Form.Control type="numeric" placeholder="Enter mobile no" />
          </Form.Group>
          {/* password of the form */}

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* Confirm password */}
          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <div className="d-grid gap-10" onClick={handleCloseRegister}>
            <Button variant="primary" type="submit" size="mg">
              Register
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}
const styles = {
  form1style: {
    AlignItems: "center",
    padding: "20px",
    borderRadius: "5px",
    fontFamily: "sans-serif",
    fontSize: "16px",
    color: "#424242",
  },
  form2style: {
    AlignItems: "center",
    padding: "15px",
    borderRadius: "5px",
    fontFamily: "sans-serif",
    fontSize: "16px",
    color: "#424242",
  },
};
