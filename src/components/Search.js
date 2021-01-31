import React from "react";

const styles = {
    searchField: {
        display: "flex",
        alignItems: "left",
        justifyContent: "center",
        marginBottom: "0px",
        backgroundColor: "white",
        paddingTop: "5px",
        paddingBottom: "5px"
    }
}

function Search(props) {
    return (
        <form className="form-inline" style={styles.searchField}>
            <div className="form-group row">
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    id="search"
                />
            </div>
        </form>
    )
}

export default Search;