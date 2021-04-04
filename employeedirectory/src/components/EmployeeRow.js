import React, { useState, useEffect } from "react";

function EmployeeRow(props) {
  return (
    <tr>
      <td>1</td>
      <td>{props.userName}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  );
}

export default EmployeeRow;
