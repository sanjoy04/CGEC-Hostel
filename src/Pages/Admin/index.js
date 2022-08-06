import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAdminEmail } from "../../utils/storage";
import style from "./style.module.css";
import { Link } from "react-router-dom";

function Index() {
  const route = useNavigate();
  useEffect(() => {
    if (!getAdminEmail()) {
      route("/admin/login");
    }
  });
  return (
    <div className={style.container}>
      <div className={style.header}>Welcome Admin</div>
      <div className={style.logout}>logout</div>
      <div className={style.itemContainer}>
        <Row className={style.Row}>
          <Col className={style.Col}>
            <Card style={{ width: "18rem", height: "12rem" }}>
              <Card.Body>
                <Card.Title>Complains</Card.Title>
                <Card.Text>All the complains raised by the students</Card.Text>
                <Card.Link href="#">
                  <Link to={"/admin/Complain"}>Go</Link>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.Col}>
            <Card style={{ width: "18rem", height: "12rem" }}>
              <Card.Body>
                <Card.Title>Meal</Card.Title>
                <Card.Text>
                  Meal information of student to start or stop from particular
                  date
                </Card.Text>
                <Card.Link href="#">
                  <Link to={"/admin/Meal"}>Go</Link>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className={[style.Row, "my-5"]}>
          <Col className={style.Col}>
            <Card style={{ width: "18rem", height: "12rem" }}>
              <Card.Body>
                <Card.Title>Room Change</Card.Title>
                <Card.Text>
                  All the request for room change by the students
                </Card.Text>
                <Card.Link href="#">
                  <Link to={"/admin/RoomChange"}>Go</Link>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className={style.Col}>
            <Card style={{ width: "18rem", height: "12rem" }}>
              <Card.Body>
                <Card.Title>Students</Card.Title>
                <Card.Text>
                  Get all admitted students and their relevant information
                </Card.Text>
                <Card.Link href="#">
                  <Link to={"/admin/Students"}>Go</Link>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Index;
