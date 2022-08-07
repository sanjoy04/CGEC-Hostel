import React, { useEffect, useState } from "react";
import { Table, Spinner } from "react-bootstrap";
import { fetch_api } from "../../../utils/fetch";
import style from "./style.module.css";
import AdminNav from "../../../Components/AdminNavbar";

function Index() {
  const [data, setData] = useState();

  useEffect(() => {
    const fd = JSON.stringify({});
    fetch_api("admin/meal", "post", fd).then((resp) => {
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
            <th className="text-center">Name</th>
            <th className="text-center">Preference</th>
            <th className="text-center">Type</th>
            <th className="text-center">From</th>
            <th className="text-center">To</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{item.name}</td>
                  <td className="text-center">{item.preference}</td>
                  <td className="text-center">{item.meal_type}</td>
                  <td className="text-center">{item.from}</td>
                  <td className="text-center">{item.to ? item.to : "N/A"}</td>
                  <td className="text-center">
                    <button className="btn btn-light">
                      <span>Edit</span>
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <Spinner className="m-3" animation="grow" variant="light" />
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Index;
