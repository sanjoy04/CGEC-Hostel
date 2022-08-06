import React, { useEffect, useState } from "react";
import { FloatingLabel, Form, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { fetch_api } from "../../../utils/fetch";
import { getAdminEmail } from "../../../utils/storage";
import style from "./style.module.css";
function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    if (getAdminEmail()) {
      navigation("/admin");
    }
  });

  function login() {
    if (!email || email.length === 0) {
      swal({
        title: "Enter email",
        icon: "warning",
      });
      return;
    }
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      swal({
        title: "Invalid email",
        icon: "error",
      });
      return;
    }
    if (!password || password.length === 0) {
      swal({
        title: "Enter password",
        icon: "warning",
      });
      return;
    }
    // api call
    const data = JSON.stringify({
      email: email,
      password: password,
    });
    setLoader(true);
    fetch_api("admin/login", "post", data).then((resp) => {
      // console.log(resp);
      if (resp.status === "error") {
        swal({
          title: resp.messsage,
          icon: "error",
        });
      } else if (resp.status === "success") {
        // console.log(resp.data[0]);
        localStorage.setItem("adminEmail", resp.data[0].email);
        navigation("/admin");
      }
      setLoader(false);
    });
  }
  return (
    <div className={style.container}>
      <h3 className={style.header}>Welcome to CGEC Hostel Admin</h3>
      <Card className={style.card}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="m-3"
          aria-required={"true"}
        >
          <Form.Control
            required
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel
          className="m-3"
          controlId="floatingPassword"
          label="Password"
        >
          <Form.Control
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>

        {loader ? (
          <div className="d-flex justify-content-center align-items-center m-3">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Button
            type="submit"
            className="w-50"
            variant="primary"
            onClick={login}
          >
            Login
          </Button>
        )}
      </Card>
    </div>
  );
}

export default Index;
