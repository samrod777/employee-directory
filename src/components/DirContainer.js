import React from "react";
import API from "../utils/API";
import Col from "./Col";
import Row from "./Row";
import Container from "./Container";
import Search from "./Search";
import Table from "./Table";
import Employee from "./Employees";

class DirContainer extends React.Component {
  state = {
    search: "",
    result: [],
    sort: "",
    sortedList: [],
  };

  componentDidMount() {
    this.searchEmployees("?results=500");
  }

  searchEmployees = (query) => {
    API.search(query)
      .then((res) =>
        this.setState({
          result: res.data.results,
          sortedList: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  sortBy = () => {
    if (this.state.sort === "" || this.state.sort === "asc") {
      let sorted = this.state.sortedList.sort((a, b) => {
        if (a.name.last < b.name.last) return -1;
        else if (a.name.last > b.name.last) return 1;
        return 0;
      });
      this.setState({ sortedList: sorted, sort: "desc" });
    } else {
      let sorted = this.state.sortedList.sort((a, b) => {
        if (a.name.last > b.name.last) return -1;
        else if (a.name.last < b.name.last) return 1;
        return 0;
      });
      this.setState({ sortedList: sorted, sort: "asc" });
    }
  };

  handleImputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const sortedList = this.state.result.filter((item) => {
      let names = Object.values(item).join("");
      return names.indexOf(value) !== -1;
    });
    this.setState({
      [name]: value,
      sortedList: sortedList,
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Search
              value={this.state.search}
              handleImputEvent={this.handleImputEvent}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Table sortBy={this.sortBy}>
              {this.state.sortedList.map((item) => (
                <Employee
                  key={item.login.uuid}
                  image={item.picture.medium}
                  name={item.name.first}
                  last={item.name.last}
                  phone={item.phone}
                  ID={item.id.value}
                />
              ))}
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DirContainer;
