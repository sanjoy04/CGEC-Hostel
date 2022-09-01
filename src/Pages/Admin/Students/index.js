import React, { useEffect, useState } from "react";
import { Table, Spinner, Modal, Form } from "react-bootstrap";
import { fetch_api } from "../../../utils/fetch";
import style from "./style.module.css";
import AdminNav from "../../../Components/AdminNavbar";
import swal from "sweetalert";

function Index() {
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(null);
  const [id, setId] = useState(0);

  useEffect(() => {
    const fd = JSON.stringify({});
    fetch_api("admin/students", "post", fd).then((resp) => {
      console.log(resp);
      setData(resp);
    });
  }, [status]);

  const submitStatus = () => {
    const data = JSON.stringify({
      id: id,
      status: status,
    });
    fetch_api("admin/updateroom", "post", data)
      .then((resp) => {
        swal({
          title: resp.status,
          icon: "success",
        });
        setShowModal(false);
      })
      .catch((err) => {
        swal({
          title: "Something went wrong",
          icon: "error",
        });
        setShowModal(false);
      });
    // console.log(status);
  };

  return (
    <div className={style.container}>
      <AdminNav />
      <Table
        striped
        bordered
        hover
        size="sm"
        variant="dark"
        className={style.table}
      >
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Name</th>
            <th className="text-center">Email</th>
            <th className="text-center">Deprtment</th>
            <th className="text-center">Mobile</th>
            <th className="text-center">Roll</th>
            <th className="text-center">Semester</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>

        {data ? (
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{item.name}</td>
                  <td className="text-center">{item.email}</td>
                  <td className="text-center">{item.department}</td>
                  <td className="text-center">{item.mobile}</td>
                  <td className="text-center">{item.roll}</td>
                  <td className="text-center">{item.semester}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-light"
                      onClick={() => {
                        // setId(item.id);
                        // setShowModal(true);
                      }}
                    >
                      <span>Edit</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <Spinner
            className="m-3"
            style={{
              position: "absolute",
              left: "48%",
            }}
            animation="grow"
            variant="light"
          />
        )}
      </Table>
      <Modal show={showModal} centred>
        <Modal.Header>
          <p className="text-center">Approve/Reject Room Change Request</p>
        </Modal.Header>
        <div className="d-flex justify-content-evenly align-items-center m-3">
          <span>Change status:</span>
          <span>
            <Form.Select onChange={(e) => setStatus(e.target.value)}>
              <option disabled selected>
                Change status
              </option>
              <option>Approved</option>
              <option>Rejected</option>
            </Form.Select>
          </span>
        </div>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={submitStatus}>
            Submit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              setStatus(null);
              setShowModal(false);
            }}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Index;
