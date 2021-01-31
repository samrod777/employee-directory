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
              <img src={employee.picture.medium}/>
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



// function sortEmployees(props) {
//     const { products } = props;
//     let sortedProducts = [...products];
//     sortedProducts.sort((a, b) => {
//       if (a.name < b.name) {
//         return -1;
//       }
//       if (a.name > b.name) {
//         return 1;
//       }
//       return 0;
//     });
//     return (
//       <Table>
//         {/* as before */}
//       </Table>
//     );
//   }

export default Employees;
