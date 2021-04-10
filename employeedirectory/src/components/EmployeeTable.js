import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import API from "../utils/API";
import EmployeeRow from "./EmployeeRow";
import Nav from "./Nav";

function EmployeeTable() {
  const [employeeState, setEmployeeState] = useState([]);
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

  return (
    <>
      {console.log(searchState)}
      <Nav handleInputChange={handleInputChange} />
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
    </>
  );
}

export default EmployeeTable;
// handleInputChange = (event) => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     API.getDogsOfBreed(this.state.search)
//       .then((res) => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch((err) => this.setState({ error: err.message }));
//   };
//   render() {
//     return (
//       <div>
//         <Container style={{ minHeight: "80%" }}>
//           <h1 className="text-center">Search By Breed!</h1>
//           <Alert
//             type="danger"
//             style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
//           >
//             {this.state.error}
//           </Alert>
//           <SearchForm
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//             breeds={this.state.breeds}
//           />
//           <SearchResults results={this.state.results} />
//         </Container>
//       </div>
//     );
//   }
// }
