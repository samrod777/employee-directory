import React from "react";

function Employees(props) {
  return (
    <div>
      <table >
        <tr>
          <th>Picture</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Phone</th>
        </tr>
        {props.employeeList.map((employee) => {
          return (
            <tr>
              <td>{employee.picture.small}</td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.phone}</td>
            </tr>
          );
        })}
        
      </table>
    </div>
  );
}
export default Employees;
