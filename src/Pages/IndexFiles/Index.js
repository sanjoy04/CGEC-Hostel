import "../../App.css";
import { Link } from "react-router-dom";
import styles from "./Index.module.css";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Typed from "react-typed";
// import { Container, Row, Col } from "react-bootstrap";
import {
  Heading,
  AboutText,
  MainContainer,
  IndexTop,
  RowIn,
  RowIn1,
  ColRow,
  ColRowMain,
  Col,
} from "./IndexStyles";

import hostel_rooms from "../../images/hostel-rooms.jpg";
import hostel_beds from "../../images/hostel-beds.jpg";
import ragging_free from "../../images/ragging-free.png";
import cgec_principal from "../../images/cgec_principal.jpg";
import cgec_hostel from "../../images/hostel.jpeg";
import { useNavigate } from "react-router-dom";

function Index() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Welcome to CGEC Boys Hostel";

    if (localStorage.getItem("email")) {
      navigate("/Home");
    }
  });

  return (
    <div className={styles.index}>
      <Navbar />
      <IndexTop className={styles.indexTop}>
        <Heading>
          <span>HEY!!</span>
          <br />
          <span>WELCOME TO SUKANTA CHHATRABAS CGEC</span>
          <br />
          <span>COME ON & LET'S ...</span>
        </Heading>
        <Heading>
          <Typed
            className={styles.typingText}
            strings={[" STAY TOGETHER", " BUILD CAREER", " GROW TOGETHER"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </Heading>
      </IndexTop>
      <MainContainer className={styles.mainContainer}>
        <RowIn1 className={styles.hostelCorner}>
          <ColRowMain className={styles.ColRowMain}>
            <h4>
              <Link className={styles.link} to="/About">About <span>Hostel</span></Link>
            </h4>
            <ColRow className={styles.about}>
              <div className={styles.img}>{<img src={cgec_hostel} alt= "Hostel"></img>}</div>
              <div className={styles.aboutText}>
                The college is situated in a prime location in the Cooch Behar
                District. The college, being well connected from any part of the
                Cooch Behar
              </div>
            </ColRow>
          </ColRowMain>
          <ColRowMain className={styles.ColRowMain}>
            <h4>
              Principal's <span>Corner</span>
            </h4>
            <ColRow className={styles.principalCorner}>
              <div className={styles.img}>{<img src={cgec_principal} alt="Principal"></img>}</div>
              <div className={styles.aboutText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                cupiditate quod saepe rerum quidem molestias praesentium facilis
                labore 
              </div>
            </ColRow>
          </ColRowMain>
        </RowIn1>
      </MainContainer>

      <RowIn className={styles.aboutCards}>
        <Col className={styles.section}>
          <div className={styles.cards}>
            <div className={styles.image}>{<img src={hostel_rooms}></img>}</div>
            <div className={styles.text}>
              <p>In our hostel we have total 60 bed rooms</p>
            </div>
          </div>
        </Col>
        <Col className={styles.section}>
          <div className={styles.cards}>
            <div className={styles.image}>{<img src={hostel_beds}></img>}</div>
            <div className={styles.text}>
              <p>There we have 180 student capacity in our hostel</p>
            </div>
          </div>
        </Col>
        <Col className={styles.section}>
          <div className={styles.cards}>
            <div className={styles.image}>{<img src={ragging_free}></img>}</div>
            <div className={styles.text}>
              <p>Your hostell is completly ragging free</p>
            </div>
          </div>
        </Col>
      </RowIn>
      <Footer />
    </div>
  );
}
export default Index;
