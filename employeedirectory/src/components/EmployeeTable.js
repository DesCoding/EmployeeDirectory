import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import API from "../utils/API";
import EmployeeRow from "./EmployeeRow";

function EmployeeTable() {
  const [employeeState, setEmployeeState] = useState([]);
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
            <EmployeeRow
              employeeLastName={employee.name.last}
              userName={employee.name.first}
              employeePicture={employee.picture.thumbnail}
              employeeEmail={employee.email}
            />
          ))}
      </tbody>
    </Table>
  );
}

export default EmployeeTable;
