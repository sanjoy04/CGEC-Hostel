import "../../App.css";
import "./Home.css";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Typed from "react-typed";
import { Heading, AboutText, MainContainer, IndexTop } from "./HomeStyle";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Dropdown,
  DropdownButton,
  Form,
  Alert,
} from "react-bootstrap";
import section from "../../images/section.png";

import slider1 from "../../images/MAKAUT.jpg";

function Home() {
  // Room change states
  const [roomChange, setRoomChange] = useState(false);
  const [selectRoom] = useState(["1", "2", "3", "4"]);
  const [selectRoomFrom, setSelectRoomFrom] = useState("--Select--");
  const [selectRoomTo, setSelectRoomTo] = useState("--Select--");
  const [roomChangeReason, setRoomChangeReason] = useState("");

  const handleRoomChangeClose = () => {
    setRoomChange(false);
  };
  const handleRoomChangeSubmit = () => {
    if (selectRoomFrom == "--Select--") {
      swal("Must Choose your room number");
      return;
    }
    if (selectRoomTo == "--Select--") {
      swal("Choose room number you want to shift");
      return;
    }

    if (roomChangeReason == "") {
      swal("Write the reason for room change");
      return;
    }
    setRoomChange(false);
    setSelectRoomFrom("--Select--");
    setSelectRoomTo("--Select--");
    setRoomChangeReason("");
  };
  const handleRoomChangeShow = () => setRoomChange(true);

  // Complain Section states
  const [complain, setComplain] = useState(false);
  const [complainTopic] = useState([
    "Food related problem",
    "Problem related to room",
    "Problem related to washroom",
    "Ragging issue",
  ]);
  const [selectComplain, setSelectComplain] = useState("Select your complain");
  const [complainDetails, setComplainDetails] = useState("");
  const handleComplainSubmit = () => {
    if (selectComplain == "Select your complain") {
      swal("Choose a valid reason");
      return;
    }
    if (complainDetails == "") {
      swal("You have to write complain details");
      return;
    }
    setComplain(false);
    setSelectComplain("Select your complain");
    setComplainDetails("");
  };
  const handleComplainClose = () => {
    setComplain(false);
    setSelectComplain("Select your complain");
  };
  const handleComplainShow = () => setComplain(true);

  // Meal section States
  const [meal, setMeal] = useState(false);
  const [mealStopStart] = useState(["Stop my meal", "Start my meal"]);
  const [selectMeal, setSelectMeal] = useState("Select your preference");
  const [selectMealRadio, setSelectMealRadio] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const handleMealSubmit = () => {
    console.log(selectMealRadio);
    if (selectMeal == "Select your preference") {
      swal("Choose a valid preference");
      return;
    }
    if(!selectMealRadio){
      swal("Choose a valid meal option");
      return;
    }
    if(!startDate){
      swal("Choose a valid date");
      return;
    }
    setMeal(false);
    setSelectMeal("Select your preference");
    setSelectMealRadio();
  };
  const handleMealClose = () => {
    setMeal(false);
    setSelectMeal("Select your preference");
  };
  const handleMealShow = () => setMeal(true);

  useEffect(() => {
    document.title = "Welcome to CGEC Boys ";
  });

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
                      <div className="outerCard" onClick={handleMealShow}>
                        <span className="card ">
                          <img src={section}></img>
                        </span>
                        <span className="heading">
                          Meal Start- Stop Request
                        </span>
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

        <MainContainer className="main-container">
          <IndexTop>
            <Heading>
              <Typed
                strings={[
                  "Hey!!!  Welcome to Sukanta Chhatrabas",
                  "Explore your Life!",
                  "Good Luck!",
                ]}
                typeSpeed={70}
                backSpeed={50}
                loop
              />
            </Heading>
            <AboutText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              quasi aperiam eaque impedit dolor deserunt eos cumque dicta harum!
              Voluptates, quas? Dicta alias labore accusantium quas repudiandae,
              facere voluptates ex et inventore sed amet sequi non ea molestiae
              esse. Ex rerum neque nulla, eos facere ratione optio
              exercitationem reiciendis blanditiis! Aut adipisci sunt ut,
              quaerat hic alias delectus provident? Aut enim minima veritatis
              recusandae! Et, blanditiis adipisci dolore neque sit quis sequi
              magnam iste repellat nostrum perspiciatis asperiores cum? Ratione
              qui velit, impedit provident architecto atque consequuntur! Ipsa
              nihil maxime soluta ipsum fugit nostrum id aliquid facilis in,
              voluptatibus deleniti.
            </AboutText>
          </IndexTop>
        </MainContainer>

        <Footer />
      </div>

      {/* Room change Modal section */}
      <Modal
        centered
        show={roomChange}
        onHide={handleRoomChangeClose}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Room Change Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="room-change-dropsown">
            <h6>From Room*</h6>
            <DropdownButton id="dropdown-basic-button" title={selectRoomFrom}>
              {selectRoom.map((item) => {
                return (
                  <Dropdown.Item
                    onClick={(e) => {
                      setSelectRoomFrom(e.target.innerHTML);
                    }}
                    // value={item}
                  >
                    {item}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <h6>To*</h6>
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
            <Form.Control
              as="textarea"
              value={roomChangeReason}
              onChange={(e) => setRoomChangeReason(e.target.value)}
              rows={3}
            />
          </Form.Group>
          <p>*Required field</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleRoomChangeClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRoomChangeSubmit}>
            Submit Request
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Complain box modal */}

      <Modal
        centered
        show={complain}
        onHide={handleComplainClose}
        animation={true}
      >
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
            <Form.Control
              as="textarea"
              value={complainDetails}
              onChange={(e) => setComplainDetails(e.target.value)}
              rows={3}
            />
          </Form.Group>
          <p>*Required field</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleComplainClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleComplainSubmit}>
            Raise a complain
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Meal stop start section */}

      <Modal centered show={meal} onHide={handleMealClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Request for start/stop meal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DropdownButton id="dropdown-item-button" title={selectMeal}>
            {mealStopStart.map((item) => {
              return (
                <Dropdown.Item
                  onClick={(e) => {
                    setSelectMeal(e.target.innerHTML);
                  }}
                >
                  {item}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
          <Form.Group controlId="dob">
            <Form.Label className="mt-3 me-3">From</Form.Label>
            <Form.Check
              className="mt-3"
              inline
              label="Lunch"
              name="group1"
              type={"radio"}
              value="lunch"
              onChange={(e) => setSelectMealRadio(e.target.value)}
            />
            <Form.Check
              className="mt-3"
              inline
              label="Dinner"
              name="group1"
              type={"radio"}
              value="dinner"
              onChange={(e) => setSelectMealRadio(e.target.value)}
            />
            <div className="date-container-meal">
              <Form.Control
                required={true}
                type="date"
                placeholder="Enter date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <p className="mt-3">Till</p>
              <Form.Control
                type="date"
                placeholder="Enter date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </Form.Group>
          <p>*Required field</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleMealSubmit}>
            Submit request
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;
