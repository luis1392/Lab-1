import React, { Component } from "react";

class FilterToDoList extends Component {
  state = {
    activeFilter: "all"
  };

  handleClickAll = () => {
    this.setState({
      activeFilter: "all"
    });
  };

  handleClickComplete = () => {
    this.setState({
      activeFilter: "complete"
    });
  };
  handleClickIncomplete = () => {
    this.setState({
      activeFilter: "incomplete"
    });
  };
  render() {
    return (
      <React.Fragment>
        <ul className="nav nav-tabs">
          <li
            role="presentation"
            className="active"
            onClick={this.handleClickAll}
          >
            <a>All Tasks</a>
          </li>
          <li role="presentation" onClick={this.handleClickComplete}>
            <a>Complete</a>
          </li>
          <li role="presentation" onClick={this.handleClickIncomplete}>
            <a>Incomplete</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
export default FilterToDoList;
