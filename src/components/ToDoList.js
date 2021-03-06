import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  renderList(tasksToDo) {
    const list = tasksToDo
      .filter(list => this.filterData(list))
      .map(element => {
        return (
          <ToDoItem
            key={element.id}
            task={element}
            onDelete={this.props.onDelete}
          />
        );
      });

    return list;
  }

  state = {
    activeFilter: "all"
  };

  filterData = task => {
    if (this.state.activeFilter === "all") {
      return true;
    } else if (this.state.activeFilter === "complete") {
      return task.isDone === true;
    } else {
      return task.isDone === false;
    }
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
        <ul className="list-group">{this.renderList(this.props.data)}</ul>
      </React.Fragment>
    );
  }
}

export default ToDoList;
