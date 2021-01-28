import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Employees from "./components/Employees";


function App() {
const [employees, setEmployees] = useState([])
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=200&nat=us")
    .then((data) => {
      setEmployees(data.data.results)
    } )
  }, [])
  return (
    <div className="App">
      <Employees employeeList={employees}/>
    </div>
  );
}

export default App;
