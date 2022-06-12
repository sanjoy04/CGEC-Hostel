import React, { useState } from "react";
import { Nav, Navbar, Container, Modal, Button,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Nav.css'

export default function Navbar_() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>


      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to={'index'}>CGEC - HOSTEL</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link></Nav.Link>
              <Nav.Link></Nav.Link>
              <Nav.Link></Nav.Link>
              <Nav.Link></Nav.Link>
            </Nav>
            <Nav className="nav_bar">
              <Link to={"/About"}>About</Link>
              <Link to={"/Contact"}>Contact</Link>
              <Link to={""} onClick={handleShow}>Login</Link>
              <Link to={""}>signup</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title >Login</Modal.Title>
        </Modal.Header>
        <Form style={styles.formstyle}>
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
          <div className="d-grid gap-10" onClick={handleClose}>
          <Button variant="primary" type="submit" size="mg" >
            Submit
          </Button>
          </div>
        </Form>
    </Modal>
    </>
    
  );
}
const styles = {
  formstyle: {
    AlignItems: "center",
    padding: "20px",
    borderRadius: "5px",
    fontFamily: "sans-serif",
    fontSize: "16px",
    color: "#424242",
  
  }
}
