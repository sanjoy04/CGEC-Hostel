import React, { useEffect, useState, useCallback } from "react";
import {
  Nav,
  Navbar,
  Container,
  Modal,
  Button,
  Form,
  Spinner,
} from "react-bootstrap";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import { API_URL } from "../Constants";

const names = ["Sukanta Chhatrabas - H2", "সুকান্ত ছাত্রাবাস - হোস্টেল ২"];

export default function Navbar_() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  // for login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [warning, setWarning] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate(); //dynamically redirect to another page
  const [newName, setnewName] = useState("");

  const [selectedItems, setSelectedItems] = useState("");

  const handleCloseLogin = () => setShow1(false);
  const handleShowLogin = () => {
    setShow2(false);
    setShow1(true);
    setLoginEmail("");
    setLoginPassword("");
  };

  useEffect(() => {
    const loggedin = localStorage.getItem("email");
    if (loggedin) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (warning) {
      swal("Error", warning, "error");
      setWarning();
    }
  }, [warning]);

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  const handleCloseRegister = () => setShow2(false);
  const handleShowRegister = () => {
    setShow1(!show1);
    setShow2(true);
    setLoginEmail("");
    setLoginPassword("");
  };

  function login() {
    // email validation regular expression
    if (loginEmail === "") {
      setWarning("Email is required");
      return;
    }
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(loginEmail)) {
      setWarning("Invalid email");
      return;
    }
    // password validation
    if (loginPassword === "") {
      setWarning("Password is required");
      return;
    }

    setIsLoading(true);
    // if all is well, send request to server
    fetch(
      `${API_URL}getStudents?email=${loginEmail}&password=${loginPassword}`,
      {
        method: "get",
        credentials: "same-origin",
      }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.status === "error") {
          console.log(resp.message);
        } else {
          // login success
          console.log(localStorage.setItem("email", resp.email)); //save email to localstorage
          navigate("/Home");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // api call finished
        setIsLoading(false);
      });
  }

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 3000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <>
      <Navbar
        className="nav_bar"
        collapseOnSelect
        expand="lg"
        bg="light-dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link>
              <Link className="title" to={"/"}>
                {newName}
              </Link>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="right_align" id="responsive-navbar-nav">
            <Nav className="nav_elements">
              <Nav.Link>
                <Link className="link" to={"/Gallery"}>
                  Gallery
                </Link>
              </Nav.Link>

              <Nav.Link
                onClick={() => {
                  console.log("About pressed");
                  setSelectedItems("About");
                }}
              >
                <Link
                  className="link"
                  to={"/About"}
                  style={{
                    textDecorationLine:
                      selectedItems === "About" ? "underline" : "none",
                  }}
                >
                  About
                </Link>
              </Nav.Link>

              <Nav.Link onClick={() => setSelectedItems("Facilities")}>
                <Link
                  className="link"
                  to={"/Facilities"}
                  style={{
                    textDecorationLine:
                      selectedItems === "Facilities" ? "underline" : "none",
                  }}
                >
                  Facilities
                </Link>
              </Nav.Link>
              <Nav.Link onClick={() => setSelectedItems("Contact")}>
                <Link
                  className="link"
                  to={"/Contact"}
                  style={{
                    textDecorationLine:
                      selectedItems === "Contact" ? "underline" : "none",
                  }}
                >
                  Contact
                </Link>
              </Nav.Link>
              {isLoggedIn ? (
                <Nav.Link>
                  <img
                    src="https://img.icons8.com/external-filled-line-kendis-lasman/344/external-logout-user-interface-filled-line-filled-line-kendis-lasman.png"
                    alt="avatar"
                    height={"30px"}
                    onClick={() => {
                      swal({
                        title: "Are you sure?",
                        icon: "warning",
                        buttons: true,
                      }).then((e) => {
                        if (e) {
                          localStorage.removeItem("email");
                          navigate("/");
                        }
                      });
                    }}
                  />
                </Nav.Link>
              ) : (
                <Nav.Link>
                  <Link className="link" to={""} onClick={handleShowLogin}>
                    <img
                      src="https://img.icons8.com/color/48/undefined/circled-user-male-skin-type-4--v1.png"
                      alt="avatar"
                      height={"30px"}
                    />
                  </Link>
                </Nav.Link>
              )}
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
            <Form.Control
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <div className="d-grid gap-10">
            {isLoading ? (
              <div className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <Button onClick={login} variant="primary" size="sm">
                Login
              </Button>
            )}
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
            <Form.Group
              className="mb-1 col col-md-6"
              controlId="formBasicEmail"
            >
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
              <Form.Label>Departent</Form.Label>
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
            <Form.Group
              className="mb-1 col col-md-6"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* Confirm password */}
            <Form.Group
              className="mb-1 col col-md-6"
              controlId="formBasicPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onChange={(e) => console.log(e.target.value)}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Group>
          </div>

          <div
            className="d-flex justify-content-center mt-3"
            onClick={handleCloseRegister}
          >
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
