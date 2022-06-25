import "../../App.css";
import "./Home.css";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Dropdown,
  DropdownButton,
  Form,
} from "react-bootstrap";
import section from "../../images/section.png";

import slider1 from "../../images/MAKAUT.jpg";

function Home() {
  const [roomChange, setRoomChange] = useState(false);
  const [selectRoom] = useState(["1", "2", "3", "4"]);
  const [selectRoomFrom, setSelectRoomFrom] = useState("From room");
  const [selectRoomTo, setSelectRoomTo] = useState("To room");
  const handleRoomChangeClose = () => setRoomChange(false);
  const handleRoomChangeShow = () => setRoomChange(true);




  const [complain, setComplain] = useState(false);
  const [complainTopic] = useState([
    "Food related problem",
    "Problem related to room",
    "Problem related to washroom",
    "Ragging issue",
  ]);
  const [selectComplain, setSelectComplain] = useState("Select your complain");
  const handleComplainClose = () => setComplain(false);
  const handleComplainShow = () => setComplain(true);

  const arr = [12, 3, 4, 5];
  console.log(arr);
  useEffect(() => {
    document.title = "Welcome to CGEC Boys ";
  });

  useEffect(() => {
    // console.log(typeof(select));
    selectRoom.forEach((item) => {
      // return <Dropdown.Item href="#/action-1">1</Dropdown.Item>;
      console.log(item);
    });
    // console.log(arr);
  }, []);

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="fullBody">
          <Container className="home-body">
            <div className="body">
              <Row>
                <Col sm={8} className="complain-section">
                  <Row>
                    <Col className="section">
                      <div className="outerCard" onClick={handleRoomChangeShow}>
                        <span className="card ">
                          <img src={section}></img>
                        </span>
                        <span className="heading">Room Change Request</span>
                      </div>
                    </Col>
                    <Col className="section">
                      <div className="outerCard" onClick={handleComplainShow}>
                        <span className="card ">
                          <img src={section}></img>
                        </span>
                        <span className="heading">Complaint Box</span>
                      </div>
                    </Col>
                    <Col className="section">
                      <div className="outerCard">
                        <span className="card ">
                          <img src={section}></img>
                        </span>
                        <span className="heading">Food Attendence</span>
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
                  <div className="notice">
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

      {/* Room change section */}
      <Modal show={roomChange} onHide={handleRoomChangeClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Room Change Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="room-change-dropsown">
            <h6>From Room</h6>
            <DropdownButton id="dropdown-basic-button" title={selectRoomFrom}>
              {selectRoom.map((item) => {
                return (
                  <Dropdown.Item
                    onClick={(e) => {
                      // console.log(e.target.innerHTML);
                      setSelectRoomFrom(e.target.innerHTML);
                    }}
                    // value={item}
                  >
                    {item}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <h6>To</h6>
            <DropdownButton id="dropdown-basic-button" title={selectRoomTo}>
              {selectRoom.map((item) => {
                return (
                  <Dropdown.Item
                    onClick={(e) => {
                      // console.log(e.target.innerHTML);
                      setSelectRoomTo(e.target.innerHTML);
                    }}
                    // value={item}
                  >
                    {item}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="mt-2">
              Reason for changing the room*:
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleRoomChangeClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRoomChangeClose}>
            Submit Request
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Complain box modal */}

      <Modal show={complain} onHide={handleComplainClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Raise a complain</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DropdownButton id="dropdown-item-button" title={selectComplain}>
            {complainTopic.map((item) => {
              return (
                <Dropdown.Item
                  onClick={(e) => {
                    setSelectComplain(e.target.innerHTML);
                  }}
                >
                  {item}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="mt-2">
              Explain your complain briefly*:
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleComplainClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleComplainClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;
