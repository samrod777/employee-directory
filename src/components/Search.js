import React from "react";

const styles = {
  searchField: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    backgroundColor: "gray",
    padding: "5px 0 5px 25px",
  },
};

function Search(props) {
  return (
    <form className="form-inline" style={styles.searchField}>
      <div className="form-group row">
        <input
          onChange={props.handleImputEvent}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
        />
      </div>
    </form>
  );
}

export default Search;
