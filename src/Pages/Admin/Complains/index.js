import React, { useEffect, useState } from "react";
import { Table, Spinner } from "react-bootstrap";
import { fetch_api } from "../../../utils/fetch";
import style from "./style.module.css";
import AdminNav from "../../../Components/AdminNavbar";

function Index() {
  const [data, setData] = useState();

  useEffect(() => {
    const fd = JSON.stringify({});
    fetch_api("admin/complains", "post", fd).then((resp) => {
      setData(resp);
    });
  });

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
            <th className="text-center">Description</th>
            <th className="text-center">Title</th>
            <th className="text-center">Name</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        {data ? (
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{item.DESCRIPTION}</td>
                  <td className="text-center">{item.title}</td>
                  <td className="text-center">{item.name}</td>
                  <td className="text-center">
                    <button className="btn btn-light">
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
    </div>
  );
}

export default Index;
