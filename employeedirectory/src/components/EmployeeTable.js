import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import API from "../utils/API";
import EmployeeRow from "./EmployeeRow";
import Nav from "./Nav";

function EmployeeTable() {
  const [employeeState, setEmployeeState] = useState("start");
  const [searchState, setSearchState] = useState([]);
  useEffect(() => {
    loadEmployeeTable();
  }, []);

  const loadEmployeeTable = () => {
    API.getRandomEmployee()
      .then((res) => setEmployeeState(res.data.results))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    setSearchState(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    {
      console.log(searchState);
    }
    const searchName = employeeState.filter((employee) =>
      employee.name.first.includes(searchState)
    );
    setEmployeeState(searchName);
    console.log(searchName);
  };

  const handleFormSort = (event) => {
    event.preventDefault();

    let sorted = [...employeeState];

    sorted.sort((a, b) => {
      let nameOne = a.name.last.toLowerCase(),
        nameTwo = b.name.last.toLowerCase();

      if (nameOne < nameTwo) {
        return -1;
      }
      if (nameOne > nameTwo) {
        return 1;
      }
      return 0;
    });
    setEmployeeState(sorted);
  };

  return (
    <>
      <Nav
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        handleFormSort={handleFormSort}
      />
      <Table striped>
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
          {employeeState != "start" &&
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
    </>
  );
}

export default EmployeeTable;
