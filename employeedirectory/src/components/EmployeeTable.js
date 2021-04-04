import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import API from "../utils/API";
import EmployeeRow from "./EmployeeRow";

function EmployeeTable() {
  useEffect(() => {
    loadEmployeeTable();
  }, []);

  const loadEmployeeTable = () => {
    API.getRandomEmployee()
      .then((res) =>
        // this.setState({
        //   image: res.data.message,
        // })
        console.log(res)
      )
      .catch((err) => console.log(err));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Picture</th>
          <th>E-Mail</th>
        </tr>
      </thead>
      <tbody>
        <EmployeeRow />
        <EmployeeRow />
      </tbody>
    </Table>
  );
}

export default EmployeeTable;
