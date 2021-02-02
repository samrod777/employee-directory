import React from "react";
import "./Table.css";

function Table(props) {
    return (
        <table className="table table-striped table-bright table-hover">
        <thead>
        <tr>
            <th scope="col">Picture</th>
            <th value="name.first" scope="col">First Name</th>
            <th value="last" scope="col" className="sort-option" onClick={props.sortBy}>Last Name</th>
            <th value ="phone" scope="col">Phone</th>
            <th value="ID" scope="col">ID</th>
            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
        </table>
    );
}

export default Table;