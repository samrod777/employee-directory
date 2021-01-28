import React from "react";

function Employees(props) {
  return (
    <div>
      <table>
        <tr>
          <th>Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone #</th>
          <th>ID #</th>
        </tr>
        {props.employeeList.map((employee) => {
          return (
            <tr>
              <img src={employee.picture.thumbnail}/>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.phone}</td>
              <td>{employee.id.value}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default Employees;
