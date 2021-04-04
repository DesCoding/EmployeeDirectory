import React, { useState, useEffect } from "react";

function EmployeeRow(props) {
  return (
    <tr>
      <td>{props.userName}</td>
      <td>{props.employeeLastName}</td>
      <td>{props.employeePicture}</td>
      <td>{props.employeeEmail}</td>
    </tr>
  );
}

export default EmployeeRow;
