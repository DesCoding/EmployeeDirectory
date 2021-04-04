import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import API from "../utils/API";
import EmployeeRow from "./EmployeeRow";

function EmployeeTable() {
  const [employeeState, setEmployeeState] = useState([
    "Desire",
    "Anna",
    "Tony",
  ]);
  useEffect(() => {
    loadEmployeeTable();
  }, []);

  const loadEmployeeTable = () => {
    API.getRandomEmployee()
      .then((res) => setEmployeeState(res.data.results))
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
        {console.log(employeeState)}
        {employeeState.length > 3 &&
          employeeState.map((employee) => (
            <EmployeeRow userName={employee.name.first} />
          ))}
      </tbody>
    </Table>
  );
}

export default EmployeeTable;
