import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container, Modal, Button, Form } from "react-bootstrap";
// import swal from 'sweetalert';
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Navbar_() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [warning, setWarning] = useState();

  const [registerName, setRegisterName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [semester, setSemester] = useState("");
  const [year, setYear] = useState("");
  const [department, setDepartment] = useState("");
  const [roll, setRoll] = useState("");

  const handleCloseLogin = () => setShow1(false);
  const handleShowLogin = () => {
    setShow2(false);
    setShow1(true)
    setLoginEmail("");
    setLoginPassword("")
  };

  // useEffect(() => {
  //   if (warning) {
  //     swal("Error", warning, "error");
  //     setWarning();
  //   }
  // }, [warning]);

  const handleCloseRegister = () => setShow2(false);
  const handleShowRegister = () => {
    setShow1(!show1)
    setShow2(true)
    setLoginEmail("");
    setLoginPassword("")
  };

  function login() {
    // email validation regular expression
    if (loginEmail === "") {
      setWarning("Email is required");
      return;
    }
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(loginEmail)) {
      setWarning("Invalid email");
      return;
    }
    // password validation
    if (loginPassword === "") {
      setWarning("Password is required");
      return;
    }

    // if all is well, send request to server


  }

  function signup() {

  }

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
                <Link className="link" to={""}>
                  Galary
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link className="link" to={"/About"}>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to={"/Facilities"}>
                  Facilities
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to={"/Contact"}>
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to={""} onClick={handleShowLogin}>
                  <img src="https://img.icons8.com/color/48/undefined/circled-user-male-skin-type-4--v1.png" height={"30px"} />
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
            <Form.Control value={loginEmail} onChange={e => setLoginEmail(e.target.value)} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={loginPassword} onChange={e => setLoginPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>

          <div className="d-grid gap-10">
            <Button onClick={login} variant="primary" size="sm">
              Login
            </Button>
          </div>

          <Form.Text className="text-muted d-flex justify-content-center mt-3">
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
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Form style={styles.form2style}>
          {/* name of the form */}
          <div class="row">
            <Form.Group className="mb-1 col col-md-6" controlId="text">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            {/* email of the form */}
            <Form.Group className="mb-1 col col-md-6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </div>

          <div class="row">
            <Form.Group className="mb-1 col col-md-6" controlId="number">
              <Form.Label>Roll No</Form.Label>
              <Form.Control type="numeric" placeholder="Enter roll no" />
            </Form.Group>
            {/* Year of the form */}
            <Form.Group className="mb-1 col col-md-6" controlId="text">
              <Form.Label>Year</Form.Label>
              <Form.Control type="text" placeholder="Enter year" />
            </Form.Group>
          </div>

          <div class="row">
            {/* Semester of the form */}
            <Form.Group className="mb-1 col col-md-6" controlId="text">
              <Form.Label>Semester</Form.Label>
              <Form.Control type="text" placeholder="Enter Semester" />
            </Form.Group>
            {/* mobile no of the form */}
            <Form.Group className="mb-1 col col-md-6" controlId="number">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control type="numeric" placeholder="Enter mobile no" />
            </Form.Group>
          </div>

          <div class="row">
            {/* password of the form */}
            <Form.Group className="mb-1 col col-md-6" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* Confirm password */}
            <Form.Group className="mb-1 col col-md-6" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control onChange={e => console.log(e.target.value)} type="password" placeholder="Confirm Password" />
            </Form.Group>
          </div>

          <div className="d-flex justify-content-center mt-3" onClick={handleCloseRegister}>
            <Button variant="primary" type="submit" size="lg">
              Register
            </Button>
          </div>
          <Form.Text className="text-muted d-flex justify-content-center mt-3">
            Already have an account?{" "}
            <Link to onClick={handleShowLogin}>
              Login
            </Link>
          </Form.Text>
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
    padding: "25px",
    borderRadius: "5px",
    fontFamily: "sans-serif",
    fontSize: "16px",
    color: "#424242",

  },
};
