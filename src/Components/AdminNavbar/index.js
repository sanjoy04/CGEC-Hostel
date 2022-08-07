import React from "react";
import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

function Index() {
  const route = useNavigate();
  return (
    <>
      <div className={style.header}>
        <Link to="/admin" className="text-light">
          <p>Welcome Admin</p>
        </Link>
      </div>
      <div
        className={style.logout}
        onClick={() => {
          swal({
            title: "Are sure to logout?",
            icon: "warning",
            buttons: ["Cancel", "Ok"],
            dangerMode: true,
          }).then((e) => {
            if (e) {
              localStorage.removeItem("adminEmail");
              route("login");
            }
          });
        }}
      >
        <FontAwesomeIcon icon={faRightFromBracket} inverse />
      </div>
    </>
  );
}

export default Index;
