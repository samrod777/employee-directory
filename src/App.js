import React, {useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import Employees from "./components/Employees";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";


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
      <Jumbotron/>
      <Search/>
      <Employees employeeList={employees}/>
    </div>
  );
}

export default App;
