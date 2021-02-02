import React from "react";

const styles = {
  jumbotron: {
    textAlign: "center",
    backgroundColor: "White",
  },
};

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid" style={styles.jumbotron}>
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">To find an employee begin typing a first or last name in the search box, or click on the Last Name Column to Alphabetize</p>
      </div>
    </div>
  );
}

export default Jumbotron;
