import React from "react";

const styles = {
    jumbotron: {
        marginBottom: "0px",
        textAlign: "center",
        backgroundColor: "White"
    }
}

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid" style={styles.jumbotron}>
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">TBD</p>
            </div>
        </div>
    )
}

export default Jumbotron;