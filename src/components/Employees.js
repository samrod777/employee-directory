import React from "react";

function Employee(props) {
  return (
    <tr>
      <th scope="row">
        <img
          alt={props.name + props.last + "picture"}
          className="img-fluid"
          src={props.image}
        />
      </th>
      <td className="align-middle">{props.name}</td>
      <td className="align-middle">{props.last}</td>
      <td className="align-middle">{props.phone}</td>
      <td className="align-middle">{props.ID}</td>
    </tr>
  );
}

export default Employee;
